import { createFileRoute } from "@tanstack/react-router";

import { app } from "@/api";

export const Route = createFileRoute("/api/$")({
  server: {
    handlers: {
      ANY: async ({ request }: { request: Request }) => {
        return app.fetch(request);
      },
    },
  },
});
