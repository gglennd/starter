import { createRootRouteWithContext, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import * as React from "react";

import type { RouterContext } from "@/router";

import { Footer } from "@/components/layout/footer";
import { Nav } from "@/components/layout/nav";
import appCss from "@/styles/globals.css?url";

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Starter | TanStack Start Fullstack" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg" },
    ],
  }),
  component: RootComponent,
  shellComponent: RootDocument,
});

function RootComponent() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
