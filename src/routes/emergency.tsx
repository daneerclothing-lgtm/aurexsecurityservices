import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Phone, Clock, Zap, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "Emergency Security Response UK | Aurex Security" },
      { name: "description", content: "24/7 emergency security response across the UK. Rapid SIA-licensed officer deployment for businesses, sites and events." },
      { property: "og:title", content: "Emergency Security Response — Aurex" },
      { property: "og:description", content: "Rapid 24/7 emergency security deployment across the UK." },
      { property: "og:url", content: "/emergency" },
    ],
    links: [{ rel: "canonical", href: "/emergency" }],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.12_0.02_260),oklch(0.18_0.05_265))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.6_0.22_25/0.18),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto container-px grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/15 border border-destructive/40 text-xs uppercase tracking-[0.22em] text-destructive mb-5">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" /></span>
            Live · 24/7 Operations
          </div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">Emergency security <span className="gradient-gold-text">deployed within hours.</span></h1>
          <p className="mt-6 text-muted-foreground text-lg max-w-xl">Speak to a senior controller now for rapid SIA-licensed officer deployment, mobile response or interim cover anywhere in the UK.</p>
          <a href="tel:+442045258800" className="mt-8 inline-flex items-center gap-3 px-9 py-5 rounded-sm font-semibold text-primary-foreground bg-[image:var(--gradient-gold)] shadow-gold-glow hover:brightness-110 transition-all">
            <Phone className="h-5 w-5" /> Call +44 7723 406782
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { i: Clock, t: "24/7", d: "Senior controllers always on shift." },
            { i: Zap, t: "Rapid", d: "Mobile response within SLA across UK." },
            { i: ShieldCheck, t: "Vetted", d: "100% SIA-licensed officers with full training." },
            { i: Phone, t: "Direct", d: "Speak to a controller, never a queue." },
          ].map((b) => (
            <div key={b.t} className="glass rounded-md p-6">
              <b.i className="h-6 w-6 text-gold mb-3" />
              <div className="font-display text-2xl">{b.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
