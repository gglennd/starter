import { createFileRoute } from "@tanstack/react-router";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/faq")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">FAQ</h1>
      <p className="mb-8 text-muted-foreground">
        Frequently asked questions about the starter template.
      </p>
      <Separator className="mb-10" />

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="what-is-tanstack-start">
          <AccordionTrigger>What is TanStack Start?</AccordionTrigger>
          <AccordionContent>
            TanStack Start is a fullstack React framework powered by TanStack
            Router with SSR, streaming, server functions, and deployment to
            any hosting provider. It provides an isomorphic-by-default
            development experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="how-do-i-get-started">
          <AccordionTrigger>How do I get started?</AccordionTrigger>
          <AccordionContent>
            Clone this repository, install dependencies with
            {" "}
            <code>pnpm install</code>
            , and run the dev server with
            {" "}
            <code>pnpm dev</code>
            . The project is ready to go immediately.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-are-server-functions">
          <AccordionTrigger>What are server functions?</AccordionTrigger>
          <AccordionContent>
            Server functions are created with
            {" "}
            <code>createServerFn</code>
            {" "}
            and
            run exclusively on the server. They provide a secure way to
            perform server-side operations while maintaining full TypeScript
            type inference between server and client.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="is-ssr-supported">
          <AccordionTrigger>Is SSR supported?</AccordionTrigger>
          <AccordionContent>
            Yes. TanStack Start provides built-in SSR support with streaming,
            React Server Components, and automatic loader dehydration and
            hydration. You can configure selective SSR per route as needed.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="what-styling-is-used">
          <AccordionTrigger>What styling system is used?</AccordionTrigger>
          <AccordionContent>
            This project uses Tailwind CSS v4 with shadcn/ui components.
            The design system follows the radix-nova style with neutral
            color tokens and CSS variables for theming support.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="can-i-deploy-anywhere">
          <AccordionTrigger>Can I deploy anywhere?</AccordionTrigger>
          <AccordionContent>
            Yes. TanStack Start supports deployment to any hosting provider
            including Vercel, Netlify, Cloudflare Workers, Node.js/Docker,
            and more. The build generates a standard static site or Node.js
            server depending on your configuration.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
