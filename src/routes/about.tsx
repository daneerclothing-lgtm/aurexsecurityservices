import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { ShieldCheck, Target, Users, Award, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-guard.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aurex Security | UK Security Company" },
      {
        name: "description",
        content:
          "Aurex Security Services is a UK SIA-licensed security company. Learn about our mission, vetting standards and operational excellence.",
      },
      { property: "og:title", content: "About Aurex Security" },
      {
        property: "og:description",
        content: "Mission, vetting and operational standards behind Aurex Security.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative pt-28 pb-20 overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        <div className="relative max-w-7xl mx-auto container-px">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-gold">About Aurex</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-4xl">
            A modern UK security company built on{" "}
            <span className="gradient-gold-text">discipline, discretion and trust.</span>
          </h1>
        </div>
      </section>

      <Section
        eyebrow="Our Mission"
        title={
          <>
            Professional, trusted, <span className="gradient-gold-text">client-focused</span> UK
            security solutions.
          </>
        }
      >
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Aurex Security Services was founded to raise the bar for UK manned guarding — a sector
              too often defined by inconsistency. We deliver an enterprise-grade service to clients
              who expect their security partner to operate with the same rigour as their own
              organisation.
            </p>
            <p>
              Our officers are SIA licensed and trained to internal operating standards refined
              across hundreds of contracts. From discreet corporate concierge to large-scale event
              security, our presence reflects the standards of the brands we protect.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                i: Target,
                t: "Mission-Led",
                d: "A single operating standard across every contract.",
              },
              { i: Users, t: "People First", d: "Vetted, trained and supported senior officers." },
              { i: Award, t: "Audit Ready", d: "Documented, ISO-aligned operational processes." },
              { i: ShieldCheck, t: "Compliant", d: "SIA licensed and GDPR compliant by design." },
            ].map((b) => (
              <div key={b.t} className="rounded-md border border-border/60 bg-surface/40 p-6">
                <b.i className="h-5 w-5 text-gold mb-3" />
                <div className="font-display text-lg">{b.t}</div>
                <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="py-16 bg-charcoal/70 border-y border-border/40">
        <div className="max-w-7xl mx-auto container-px grid gap-8 sm:grid-cols-4 text-center">
          {[
            { v: 3, s: "+", l: "Years Experience" },
            { v: 100, s: "+", l: "Clients Protected" },
            { v: 410, s: "", l: "Officers on Roll" },
            { v: 24, s: "/7", l: "Monitoring" },
          ].map((x) => (
            <div key={x.l}>
              <div className="font-display text-5xl gradient-gold-text">
                <Counter to={x.v} suffix={x.s} />
              </div>
              <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground mt-3">
                {x.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="font-display text-3xl md:text-4xl">Ready to upgrade your security?</h3>
          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 px-7 py-4 rounded-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all shadow-gold-glow"
          >
            Request a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
