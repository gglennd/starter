import { createFileRoute } from "@tanstack/react-router";

import { Separator } from "@/components/ui/separator";

const LAST_UPDATED = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const Route = createFileRoute("/legal/terms")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated:
        {" "}
        {LAST_UPDATED}
      </p>
      <Separator className="mb-10" />

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-2xl font-bold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground">
            By accessing and using our services, you agree to be bound by these
            Terms of Service. If you disagree with any part of these terms,
            you may not access the service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">2. Description of Service</h2>
          <p className="text-muted-foreground">
            Our service provides a starter template and related tools for
            building fullstack web applications. We reserve the right to modify
            or discontinue the service at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">3. User Responsibilities</h2>
          <p className="text-muted-foreground">
            You are responsible for maintaining the confidentiality of your
            account and password. You agree to accept responsibility for all
            activities that occur under your account and to immediately notify
            us of any unauthorized use.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">4. Intellectual Property</h2>
          <p className="text-muted-foreground">
            The content, features, and functionality of this service are owned
            by us and are protected by international copyright, trademark, and
            other intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">5. Limitation of Liability</h2>
          <p className="text-muted-foreground">
            In no event shall we be liable for any indirect, incidental,
            special, consequential, or punitive damages, including without
            limitation, loss of profits, data, or use, whether in an action of
            contract, tort, or otherwise, arising from your use of the service.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">6. Governing Law</h2>
          <p className="text-muted-foreground">
            These Terms shall be governed and construed in accordance with the
            laws of the jurisdiction in which we operate, without regard to
            its conflict of law provisions.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">7. Changes to Terms</h2>
          <p className="text-muted-foreground">
            We reserve the right to modify these Terms of Service at any time.
            We will notify you of any changes by posting the new Terms on this
            page. Your continued use of the service constitutes acceptance of
            those changes.
          </p>
        </section>
      </div>
    </div>
  );
}
