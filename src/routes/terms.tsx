import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Aurex Security" },
      { name: "description", content: "Terms of service governing Aurex Security engagements in the UK." },
      { property: "og:title", content: "Terms & Conditions — Aurex Security" },
      { property: "og:description", content: "Terms of service governing Aurex Security engagements in the UK." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section eyebrow="Legal" title="Terms & Conditions" description="Terms of service governing Aurex Security engagements in the UK.">
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-4 leading-relaxed">
        <p>This document outlines our policies and practices. Aurex Security Services Ltd (Company No. 14782931) is committed to operating to the highest UK regulatory standards.</p>
        <p>For specific questions about this policy, please contact <a href="mailto:legal@aurexsecurity.co.uk" className="text-gold">legal@aurexsecurity.co.uk</a>.</p>
        <p>Last updated: 1 May 2025.</p>
      </div>
    </Section>
  );
}
