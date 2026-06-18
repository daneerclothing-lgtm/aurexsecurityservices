import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { SERVICES } from "@/lib/site-data";
import { ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Security Services UK | Manned Guarding, CCTV, Events — Aurex" },
      {
        name: "description",
        content:
          "Explore our full range of UK security services: corporate, construction, retail, event, CCTV monitoring, concierge, residential and more.",
      },
      { property: "og:title", content: "Security Services — Aurex Security" },
      {
        property: "og:description",
        content: "Manned guarding, CCTV, events, corporate, retail and more across the UK.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Security Services"
        title={
          <>
            A complete portfolio of{" "}
            <span className="gradient-gold-text">UK security services.</span>
          </>
        }
        description="Each service is delivered to a single Aurex operating standard — vetted officers, documented processes and live reporting."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="group rounded-md border border-border/60 bg-surface/60 p-7 hover:border-gold/50 hover:-translate-y-1 transition-all"
            >
              <div className="h-11 w-11 rounded-sm border border-gold/30 bg-charcoal/60 flex items-center justify-center mb-5">
                <s.icon className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 pt-5 border-t border-border/60">
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-3">
                  Key Benefits
                </div>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li key={p} className="text-sm text-foreground/80 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold hover:gap-2.5 transition-all"
              >
                Request Quote <ChevronRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-14 glass rounded-md p-10 text-center">
          <h3 className="font-display text-3xl">Don't see your requirement?</h3>
          <p className="mt-3 text-muted-foreground">
            We design bespoke security operations for complex briefs — from threat assessments to
            round-the-clock executive cover.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[image:var(--gradient-gold)] text-primary-foreground font-medium hover:brightness-110 transition-all"
          >
            Speak to a Specialist <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
