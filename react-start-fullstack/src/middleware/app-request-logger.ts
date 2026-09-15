import { createMiddleware } from "@tanstack/react-start";
import { getResponse } from "@tanstack/react-start/server";

import { logger } from "@/lib/logger";

const REQUEST_HEADERS = ["user-agent", "content-type", "accept", "x-request-id"] as const;
const RESPONSE_HEADERS = ["content-type", "cache-control"] as const;

type HeaderReader = { get: (name: string) => string | null | undefined };

function getHeaders(headers: HeaderReader | null, names: readonly string[]): Record<string, string> {
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

export const requestLogger = createMiddleware().server(async ({ next, request }) => {
  const start = performance.now();

  const baseMetadata = {
    method: request.method,
    url: request.url,
    headers: getHeaders(request.headers, REQUEST_HEADERS),
  };

  logger.withMetadata(baseMetadata).info("incoming request");

  const result = await next();

  const response = getResponse();
  const status = response.status ?? 200;
  const ms = Math.round(performance.now() - start);

  const metadata = {
    ...baseMetadata,
    status,
    headers: getHeaders(response.headers, RESPONSE_HEADERS),
    ms,
  };

  if (status >= 500)
    logger.withMetadata(metadata).error("request failed");
  else if (status >= 400)
    logger.withMetadata(metadata).warn("request completed");
  else
    logger.withMetadata(metadata).info("request completed");

  return result;
});
