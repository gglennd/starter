import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Contact Us</h1>
      <p className="mb-8 text-muted-foreground">
        Have a question or want to work together? Send us a message.
      </p>
      <Separator className="mb-10" />

      <div className="grid gap-8 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              We&apos;ll respond within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">hello@starter.example.com</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Location</p>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
            </div>
          </CardContent>
        </Card>

        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <FieldGroup>
            <Input id="name" placeholder="Your name" required />
          </FieldGroup>
          <FieldGroup>
            <Input id="email" type="email" placeholder="you@example.com" required />
          </FieldGroup>
          <FieldGroup>
            <Input id="subject" placeholder="What is this regarding?" />
          </FieldGroup>
          <FieldGroup>
            <Textarea id="message" placeholder="Your message..." className="min-h-[120px]" />
          </FieldGroup>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
