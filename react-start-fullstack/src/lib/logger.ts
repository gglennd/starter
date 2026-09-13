import { HttpTransport } from "@loglayer/transport-http";
import { ConsoleTransport, LogLayer } from "loglayer";
import { serializeError } from "serialize-error";

type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

function env(name: string, fallback?: string): string | undefined {
  // eslint-disable-next-line node/prefer-global/process
  const value = typeof process !== "undefined" ? process.env[name] : undefined;
  return value ?? fallback;
}

function parseLogLevel(value: string | undefined): LogLevel {
  switch (value?.toLowerCase()) {
    case "trace":
    case "debug":
    case "info":
    case "warn":
    case "error":
    case "fatal":
      return value.toLowerCase() as LogLevel;
    default:
      return "info";
  }
}

const level = parseLogLevel(env("LOG_LEVEL"));
const httpUrl = env("LOG_HTTP_URL");
const apiKey = env("LOG_API_KEY");

const consoleTransport = new ConsoleTransport({
  logger: console,
  level,
  messageField: "message",
  dateField: "timestamp",
  levelField: "level",
});

const httpTransport = httpUrl
  ? new HttpTransport({
      url: httpUrl,
      method: "POST",
      headers: () => ({
        "Content-Type": "application/json",
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
      }),
      payloadTemplate: ({ logLevel, message, data, error }) =>
        JSON.stringify({
          timestamp: new Date().toISOString(),
          level: logLevel,
          message,
          ...data,
          ...(error ? { error } : {}),
        }),
      enableBatchSend: false,
      compression: false,
      maxRetries: 2,
      retryDelay: 500,
      onError: err => console.error("[logger:http]", err.message),
    })
  : null;

export const logger = new LogLayer({
  errorSerializer: serializeError,
  errorFieldName: "error",
  transport: [consoleTransport, ...(httpTransport ? [httpTransport] : [])],
});
