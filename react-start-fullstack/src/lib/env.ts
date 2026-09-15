import { z } from "zod";

const ServerEnvSchema = z.object({
  PORT: z.coerce.number().optional(),
  NODE_ENV: z.enum(["development", "production"]),
  LOG_LEVEL: z.enum(["fatal", "error", "warn", "info", "debug", "trace"]).default("info"),
}).readonly();

const ClientEnvSchema = z.object({
  VITE_APP_ORIGIN: z.string(),
}).readonly();

export type ServerEnv = z.infer<typeof ServerEnvSchema>;
export type ClientEnv = z.infer<typeof ClientEnvSchema>;

// eslint-disable-next-line node/prefer-global/process
export const serverEnv = ServerEnvSchema.parse(process.env);
export const clientEnv = ClientEnvSchema.parse(import.meta.env);
