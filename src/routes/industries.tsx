import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { INDUSTRIES } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Protect | Aurex Security UK" },
      {
        name: "description",
        content:
          "Sector specialists in construction, corporate, retail, hotels, education, logistics, events and residential security across the UK.",
      },
      { property: "og:title", content: "Industries We Protect — Aurex Security" },
      {
        property: "og:description",
        content: "UK security specialists across construction, corporate, retail, events and more.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <Section
      eyebrow="Industries We Serve"
      title={
        <>
          Sector-specialised <span className="gradient-gold-text">UK security teams.</span>
        </>
      }
      description="Our deployments are designed around your industry's threat profile, regulatory environment and operational rhythm."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INDUSTRIES.map((i) => (
          <div
            key={i.slug}
            className="rounded-md border border-border/60 bg-surface/50 p-7 hover:border-gold/40 transition-colors"
          >
            <i.icon className="h-7 w-7 text-gold mb-4" />
            <h3 className="font-display text-xl">{i.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
            <div className="mt-5 pt-5 border-t border-border/60 text-xs text-muted-foreground">
              <div className="text-gold uppercase tracking-[0.22em] text-[10px] mb-2">
                Challenges Solved
              </div>
              Theft & loss prevention · Access control · Out-of-hours cover · Crowd safety
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-4 rounded-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all shadow-gold-glow"
        >
          Discuss Your Sector <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
