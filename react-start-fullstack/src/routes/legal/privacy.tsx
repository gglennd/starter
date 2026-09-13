import { createFileRoute } from "@tanstack/react-router";

import { Separator } from "@/components/ui/separator";

const LAST_UPDATED = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export const Route = createFileRoute("/legal/privacy")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      <h1 className="mb-2 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mb-8 text-sm text-muted-foreground">
        Last updated:
        {" "}
        {LAST_UPDATED}
      </p>
      <Separator className="mb-10" />

      <div className="space-y-8">
        <section>
          <h2 className="mb-3 text-2xl font-bold">1. Information We Collect</h2>
          <p className="text-muted-foreground">
            We collect personal information that you provide directly to us,
            including names, email addresses, and other details you choose to
            share. We also collect usage data such as pages visited, time spent
            on the site, and device information.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">2. How We Use Your Information</h2>
          <p className="text-muted-foreground">
            We use the information we collect to provide, operate, and maintain
            our services, to improve and personalize your experience, to process
            transactions, and to communicate with you about our products and
            services.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">3. Data Sharing</h2>
          <p className="text-muted-foreground">
            We do not sell, trade, or otherwise transfer your personal
            information to third parties without your consent. We may share
            information with trusted service providers who assist us in
            operating our website, conducting our business, or servicing you,
            so long as those parties agree to keep this information confidential.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">4. Data Retention</h2>
          <p className="text-muted-foreground">
            We retain your personal information only for as long as necessary
            to provide the services you request and for legitimate business
            purposes. When we no longer need your information, we delete or
            anonymize it.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">5. Your Rights</h2>
          <p className="text-muted-foreground">
            Depending on your location, you may have the right to access,
            update, or delete your personal information. You may also have the
            right to restrict or object to certain processing activities.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-bold">6. Contact Us</h2>
          <p className="text-muted-foreground">
            If you have any questions about this Privacy Policy, please contact
            us at privacy@starter.example.com.
          </p>
        </section>
      </div>
    </div>
  );
}
