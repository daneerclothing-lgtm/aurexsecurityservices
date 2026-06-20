import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Aurex Security | UK Security Company" },
      { name: "description", content: "Contact Aurex Security Services. UK office locations, 24/7 emergency line, email and quote request form." },
      { property: "og:title", content: "Contact — Aurex Security" },
      { property: "og:description", content: "Get in touch with Aurex Security. 24/7 UK operations." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Section eyebrow="Contact" title={<>Speak to a <span className="gradient-gold-text">senior account manager.</span></>} description="UK offices in London, Manchester and Birmingham — operations 24 hours a day, every day.">
      <QuoteForm />
    </Section>
  );
}
