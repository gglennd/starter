import { PinoTransport } from "@loglayer/transport-pino";
import { LogLayer } from "loglayer";
import { pino } from "pino";
import { serializeError } from "serialize-error";

import type { ServerEnv } from "@/lib/env";

import { serverEnv } from "@/lib/env";

type LogLevel = ServerEnv["LOG_LEVEL"];

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

const level = parseLogLevel(serverEnv.LOG_LEVEL);

const pinoTransport = new PinoTransport({
  logger: pino({
    level,
    ...(serverEnv.NODE_ENV === "production"
      ? {}
      : {
          transport: {
            target: "pino-pretty",
            options: {
              colorize: true,
              translateTime: "SYS:standard",
            },
          },
        }),
  }),
  level,
});

export const logger = new LogLayer({
  errorSerializer: serializeError,
  errorFieldName: "error",
  transport: [pinoTransport],
});
