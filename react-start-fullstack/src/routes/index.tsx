import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto flex max-w-7xl flex-1 flex-col items-center justify-center px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            TanStack Start Fullstack
          </p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Build modern web experiences
          </h1>
          <p className="mb-10 text-lg text-muted-foreground">
            A production-ready starter template with routing, server functions,
            Tailwind CSS, and shadcn/ui components.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link to="/about">Get Started</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link to="/legal/terms">View Terms</Link>
            </Button>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Batteries included. Start building faster with a solid foundation.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title="Type-Safe Routing" description="Full type safety across your entire route tree with TanStack Router." />
          <FeatureCard title="Server Functions" description="createServerFn for secure server-side actions with full TypeScript inference." />
          <FeatureCard title="SSR &amp; Streaming" description="Built-in SSR support with streaming, React Server Components, and hydration." />
          <FeatureCard title="Data Fetching" description="TanStack Query integration for server-state management and caching." />
          <FeatureCard title="Tailwind CSS" description="Styling with Tailwind v4 and shadcn/ui components for rapid development." />
          <FeatureCard title="Production Ready" description="Configured with ESLint, TypeScript, and optimized build tooling out of the box." />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
