import type { ServerEnv } from "@/lib/env";

declare global {
  namespace NodeJS {
    interface ProcessEnv extends ServerEnv {}
  }
}

export {};
