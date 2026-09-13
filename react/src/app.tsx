"use client";

import { RiArrowRightLine, RiCheckLine, RiCloseLine, RiMenuLine, RiPulseLine, RiRocket2Line, RiSearchLine, RiShieldCheckLine } from "@remixicon/react";
import * as React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/styles/utils";

function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("w-full max-w-6xl mx-auto px-6 py-24 md:py-32", className)} {...props} />;
}

function Hero() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const duration = 2000;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * 2400));
      if (progress < 1)
        requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <Section className="flex flex-col justify-center min-h-[80vh]">
      <div className="mb-8">
        <Badge variant="outline" className="rounded-full border-foreground/10 text-foreground/60">
          <RiPulseLine className="mr-1.5 size-3" />
          Now in public beta
        </Badge>
      </div>

      <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl lg:text-8xl leading-[0.95]">
        Every signal,
        <span className="block text-amber-500">instantly</span>
      </h1>

      <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
        Pulsar surfaces the metrics that matter. Stop drowning in dashboards — get real-time
        insights that drive decisions, not noise.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <Button size="lg" className="rounded-full bg-amber-500 text-amber-50-foreground hover:bg-amber-600">
          Get started free
          <RiArrowRightLine className="ml-2 size-4" />
        </Button>
        <Button variant="outline" size="lg" className="rounded-full border-foreground/10">
          See how it works
        </Button>
      </div>

      <div className="mt-16 flex items-center gap-8 border-t border-b border-foreground/5 py-6">
        <div>
          <div className="text-3xl font-black tabular-nums text-foreground">{count.toLocaleString()}</div>
          <div className="mt-1 text-xs font-light text-muted-foreground">Events tracked</div>
        </div>
        <Separator orientation="vertical" className="h-10" />
        <div>
          <div className="text-3xl font-black tabular-nums text-foreground">&lt;50ms</div>
          <div className="mt-1 text-xs font-light text-muted-foreground">P99 latency</div>
        </div>
        <Separator orientation="vertical" className="h-10" />
        <div>
          <div className="text-3xl font-black tabular-nums text-foreground">99.99%</div>
          <div className="mt-1 text-xs font-light text-muted-foreground">Uptime</div>
        </div>
      </div>
    </Section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="group cursor-default border-foreground/5 bg-transparent shadow-none hover:bg-muted/30">
      <CardHeader>
        <div className="mb-3 size-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="text-base font-light leading-relaxed">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

function Features({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="mb-16">
        <h2 className="text-3xl font-black tracking-tight md:text-4xl">Built for clarity</h2>
        <p className="mt-4 text-lg font-light text-muted-foreground max-w-xl">
          Three pillars that separate Pulsar from every other analytics tool on the market.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={<RiSearchLine className="size-5" />}
          title="Surface level insights"
          description="Pulsar filters the noise and surfaces the metrics that actually move your business forward."
        />
        <FeatureCard
          icon={<RiRocket2Line className="size-5" />}
          title="Sub-second delivery"
          description="Events propagate in under 50 milliseconds. Your dashboard is always current, never stale."
        />
        <FeatureCard
          icon={<RiShieldCheckLine className="size-5" />}
          title="Enterprise-grade security"
          description="SOC 2 compliant with end-to-end encryption. Your data never leaves your control."
        />
      </div>
    </Section>
  );
}

function Stats({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Data points processed daily", value: "14.2B" },
          { label: "Integrations supported", value: "120+" },
          { label: "Teams actively tracking", value: "8,400" },
          { label: "Uptime guarantee", value: "99.99%" },
        ].map(stat => (
          <div key={stat.label} className="flex flex-col gap-2">
            <div className="text-4xl font-black tabular-nums text-amber-500">{stat.value}</div>
            <div className="text-sm font-light text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Testimonials({ id }: { id?: string }) {
  return (
    <Section id={id}>
      <h2 className="text-3xl font-black tracking-tight md:text-4xl">Trusted by builders</h2>
      <Separator className="my-12" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Sarah Chen",
            role: "VP Engineering, Meridian",
            quote: "Pulsar replaced three tools we were running. We finally have one dashboard that tells the whole story.",
          },
          {
            name: "Marcus Obi",
            role: "Founder, NovaPay",
            quote: "The latency numbers alone justified the switch. Our decisions are now based on real data, not guesses.",
          },
          {
            name: "Aiko Tanaka",
            role: "CTO, Streamline",
            quote: "We went from weekly reports to real-time insights. Pulsar changed how our entire team thinks about data.",
          },
        ].map(testimonial => (
          <Card key={testimonial.name} className="border-foreground/5 bg-transparent shadow-none">
            <CardContent className="pt-6">
              <p className="text-sm font-light leading-relaxed text-muted-foreground">
                "
                {testimonial.quote}
                "
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="size-8 rounded-full bg-amber-500/20 flex items-center justify-center text-xs font-bold text-amber-500">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function CTA() {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <Section className="py-20">
      <div className="relative overflow-hidden rounded-2xl border border-foreground/5 bg-foreground/5 p-8 md:p-16">
        <div className="absolute top-0 right-0 size-64 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="relative flex flex-col items-center text-center">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            Start seeing signals today
          </h2>
          <p className="mt-4 max-w-md text-lg font-light text-muted-foreground">
            Join thousands of teams already using Pulsar. No credit card required.
          </p>

          {submitted
            ? (
                <div className="mt-8 flex items-center gap-2 text-amber-500">
                  <RiCheckLine className="size-5" />
                  <span className="font-medium">You&rsquo;re in. Check your inbox.</span>
                </div>
              )
            : (
                <form
                  className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) {
                      setSubmitted(true);
                      setEmail("");
                    }
                  }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    required
                    className="flex-1 rounded-lg border border-foreground/10 bg-background px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 placeholder:text-muted-foreground"
                  />
                  <Button type="submit" size="lg" className="rounded-full bg-amber-500 text-amber-50-foreground hover:bg-amber-600">
                    Get started
                    <RiArrowRightLine className="ml-2 size-4" />
                  </Button>
                </form>
              )}
        </div>
      </div>
    </Section>
  );
}

function Navigation() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 backdrop-blur-xl">
      <nav className="flex h-16 items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2">
          <RiPulseLine className="size-6 text-amber-500" />
          <span className="text-lg font-bold">Pulsar</span>
        </a>

        {!isMobile && (
          <div className="flex items-center gap-8">
            <a href="#features" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#stats" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
              Docs
            </a>
            <a href="#testimonials" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
            <Button variant="ghost" size="sm">
              Sign in
            </Button>
          </div>
        )}

        {isMobile && (
          <Button variant="ghost" size="icon" onClick={() => setOpen(!open)}>
            {open ? <RiCloseLine className="size-5" /> : <RiMenuLine className="size-5" />}
          </Button>
        )}
      </nav>

      {isMobile && open && (
        <div className="flex flex-col gap-4 border-t border-foreground/5 px-6 pb-6 pt-2">
          <a href="#features" className="text-sm font-light text-muted-foreground" onClick={() => setOpen(false)}>Features</a>
          <a href="#stats" className="text-sm font-light text-muted-foreground" onClick={() => setOpen(false)}>Docs</a>
          <a href="#testimonials" className="text-sm font-light text-muted-foreground" onClick={() => setOpen(false)}>Pricing</a>
          <Button variant="outline" size="sm" className="w-full">Sign in</Button>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12">
      <div className="flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="flex items-center gap-2">
          <RiPulseLine className="size-5 text-amber-500" />
          <span className="text-sm font-light text-muted-foreground">2025 Pulsar. All rights reserved.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">Terms</a>
          <a href="#" className="text-sm font-light text-muted-foreground transition-colors hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <Hero />
        <Features id="features" />
        <Stats id="stats" />
        <Testimonials id="testimonials" />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
