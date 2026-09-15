import { createStart } from "@tanstack/react-start";

import { csrf } from "@/middleware/app-csrf";
import { requestLogger } from "@/middleware/app-request-logger";

export const startInstance = createStart(() => ({
  requestMiddleware: [csrf, requestLogger],
}));
