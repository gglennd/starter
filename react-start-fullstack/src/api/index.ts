import { Hono } from "hono";

export type ApiRouteType = typeof app;
export const app = new Hono()
  .basePath("/api")
  .get("/health", c => c.json({ status: "Ok" }, 200));
