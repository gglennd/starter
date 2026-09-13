import { createCsrfMiddleware, createMiddleware, createStart } from "@tanstack/react-start";
import { getResponse } from "@tanstack/react-start/server";

import { logger } from "@/lib/logger";

const REQUEST_HEADERS = ["user-agent", "content-type", "accept", "x-request-id"];
const RESPONSE_HEADERS = ["content-type", "cache-control"];

type HeaderReader = { get: (name: string) => string | null | undefined };

function getHeaders(headers: HeaderReader | null, names: string[]): Record<string, string> {
  const out: Record<string, string> = {};
  if (headers) {
    for (const name of names) {
      const value = headers.get(name);
      if (value)
        out[name] = value;
    }
  }
  return out;
}

const requestLogger = createMiddleware().server(async ({ next, request }) => {
  const start = performance.now();

  logger
    .withMetadata({
      method: request.method,
      url: request.url,
      headers: getHeaders(request.headers, REQUEST_HEADERS),
    })
    .info("incoming request");

  const result = await next();
  const res = (result as { response?: Response }).response ?? (result as { result?: Response }).result;
  const headers = res?.headers ?? getResponse().headers;
  const status = res?.status ?? getResponse().status;
  const ms = Math.round(performance.now() - start);

  logger
    .withMetadata({
      method: request.method,
      url: request.url,
      status,
      headers: getHeaders(headers, RESPONSE_HEADERS),
      ms,
    })
    .info("request completed");

  return result;
});

const csrf = createCsrfMiddleware({ filter: ctx => ctx.handlerType === "serverFn" });

export const startInstance = createStart(() => ({
  requestMiddleware: [csrf, requestLogger],
}));
