import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Aurex Security" },
      {
        name: "description",
        content: "How aurexsecurity.co.uk uses cookies under UK and EU regulations.",
      },
      { property: "og:title", content: "Cookie Policy — Aurex Security" },
      {
        property: "og:description",
        content: "How aurexsecurity.co.uk uses cookies under UK and EU regulations.",
      },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: Page,
});

function Page() {
  return (
    <Section
      eyebrow="Legal"
      title="Cookie Policy"
      description="How aurexsecurity.co.uk uses cookies under UK and EU regulations."
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
