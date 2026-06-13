import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/gdpr")({
  head: () => ({
    meta: [
      { title: "GDPR Compliance | Aurex Security" },
      {
        name: "description",
        content: "Aurex Security's commitments under the UK GDPR and Data Protection Act 2018.",
      },
      { property: "og:title", content: "GDPR Compliance — Aurex Security" },
      {
        property: "og:description",
        content: "Aurex Security's commitments under the UK GDPR and Data Protection Act 2018.",
      },
      { property: "og:url", content: "/gdpr" },
    ],
    links: [{ rel: "canonical", href: "/gdpr" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section
      eyebrow="Legal"
      title="GDPR Compliance"
      description="Aurex Security's commitments under the UK GDPR and Data Protection Act 2018."
    >
      <div className="prose prose-invert max-w-3xl text-muted-foreground space-y-4 leading-relaxed">
        <p>
          This document outlines our policies and practices. Aurex Security Services Ltd (Company
          No. 14782931) is committed to operating to the highest UK regulatory standards.
        </p>
        <p>
          For specific questions about this policy, please contact{" "}
          <a href="mailto:legal@aurexsecurity.co.uk" className="text-gold">
            legal@aurexsecurity.co.uk
          </a>
          .
        </p>
        <p>Last updated: 1 May 2025.</p>
      </div>
    </Section>
  );
}
