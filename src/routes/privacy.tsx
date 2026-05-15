import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Aurex Security" },
      { name: "description", content: "How Aurex Security collects, uses and protects personal data under UK GDPR." },
      { property: "og:title", content: "Privacy Policy — Aurex Security" },
      { property: "og:description", content: "How Aurex Security collects, uses and protects personal data under UK GDPR." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy" description="How Aurex Security collects, uses and protects personal data under UK GDPR.">
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-4 leading-relaxed">
        <p>This document outlines our policies and practices. Aurex Security Services Ltd (Company No. 14782931) is committed to operating to the highest UK regulatory standards.</p>
        <p>For specific questions about this policy, please contact <a href="mailto:legal@aurexsecurity.co.uk" className="text-gold">legal@aurexsecurity.co.uk</a>.</p>
        <p>Last updated: 1 May 2025.</p>
      </div>
    </Section>
  );
}
