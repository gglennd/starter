import { createCsrfMiddleware } from "@tanstack/react-start";

export const csrf = createCsrfMiddleware({ filter: ctx => ctx.handlerType === "serverFn" });
