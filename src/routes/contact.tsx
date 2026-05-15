import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

const OFFICES = [
  { city: "London (HQ)", addr: "22 Bishopsgate, London EC2N 4BQ", phone: "+44 20 4525 8800" },
  { city: "Manchester", addr: "1 Spinningfields, Manchester M3 3AP", phone: "+44 161 506 0900" },
  { city: "Birmingham", addr: "Colmore Plaza, Birmingham B3 2BJ", phone: "+44 121 314 5500" },
];

function ContactPage() {
  return (
    <Section eyebrow="Contact" title={<>Speak to a <span className="gradient-gold-text">senior account manager.</span></>} description="UK offices in London, Manchester and Birmingham — operations 24 hours a day, every day.">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-5">
          {OFFICES.map((o) => (
            <div key={o.city} className="rounded-md border border-border/60 bg-surface/50 p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-2">{o.city}</div>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> {o.addr}</div>
                <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> <a href={`tel:${o.phone.replace(/\s/g,"")}`} className="hover:text-gold">{o.phone}</a></div>
              </div>
            </div>
          ))}
          <div className="glass rounded-md p-6 space-y-3 text-sm">
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:info@aurexsecurity.co.uk" className="hover:text-gold">info@aurexsecurity.co.uk</a></div>
            <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-gold" /> Operations: 24/7 · Sales: Mon–Sat 8am–8pm</div>
          </div>
        </div>
        <div className="lg:col-span-3">
          <QuoteForm />
        </div>
      </div>
    </Section>
  );
}
