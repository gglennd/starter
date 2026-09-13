import { createFileRoute } from "@tanstack/react-router";

import { Separator } from "@/components/ui/separator";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col">
      <section className="mx-auto max-w-4xl px-4 py-24 lg:px-8">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          About Us
        </h1>
        <Separator className="my-6" />
        <p className="mb-6 text-lg text-muted-foreground">
          We build developer tools that make it easy to create fullstack web
          applications with confidence and speed.
        </p>
        <p className="mb-8 text-muted-foreground">
          Our mission is to provide the best developer experience possible. The
          starter template you&apos;re looking at is the result of years of
          iterating on real-world projects, stripping away the boilerplate, and
          keeping only what matters.
        </p>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="mb-3 text-xl font-semibold">Our Approach</h2>
            <p className="text-muted-foreground">
              We believe in simplicity without compromise. Every component, every
              line of code, serves a purpose. No bloat, no unnecessary abstractions.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold">The Stack</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>• TanStack Start &amp; Router</li>
              <li>• React 19</li>
              <li>• Tailwind CSS v4</li>
              <li>• shadcn/ui Components</li>
              <li>• TypeScript</li>
            </ul>
          </div>
        </div>
      </section>

      <Separator />

      <section className="mx-auto max-w-4xl px-4 py-24 lg:px-8">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Team</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Alex Chen", role: "Founder & Lead Developer" },
            { name: "Jordan Park", role: "Fullstack Engineer" },
            { name: "Sam Rivera", role: "UX Designer" },
          ].map(member => (
            <div key={member.name} className="rounded-lg border p-6">
              <div className="mb-2 h-12 w-12 rounded-full bg-muted" />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
