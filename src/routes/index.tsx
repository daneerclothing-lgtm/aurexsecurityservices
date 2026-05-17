import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Clock, BadgeCheck, MapPin, Star, Quote, Phone, ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero-guard.jpg";
import cctvImg from "@/assets/cctv-room.jpg";
import constructionImg from "@/assets/construction-security.jpg";
import eventImg from "@/assets/event-security.jpg";
import { Section } from "@/components/site/Section";
import { Counter } from "@/components/site/Counter";
import { QuoteForm } from "@/components/site/QuoteForm";
import { SERVICES, WHY_CHOOSE, TESTIMONIALS, CASE_STUDIES } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aurex Security Services | SIA Licensed UK Security Company" },
      { name: "description", content: "Trusted UK security services. SIA licensed officers, CCTV monitoring, event & corporate protection across London and the UK. Get a free quote." },
      { property: "og:title", content: "Aurex Security Services | SIA Licensed UK Security Company" },
      { property: "og:description", content: "SIA licensed manned guarding, CCTV, events and corporate protection across the UK." },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const TRUST = [
  { icon: ShieldCheck, label: "SIA Licensed Officers" },
  { icon: Clock, label: "24/7 Security" },
  { icon: BadgeCheck, label: "Fully Insured £10M" },
  { icon: MapPin, label: "London & UK Coverage" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img src={heroImg} alt="UK security officer in a luxury corporate lobby" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.1_0.02_260/0.92)_0%,oklch(0.12_0.02_260/0.78)_45%,oklch(0.14_0.02_260/0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.82_0.13_85/0.18),transparent_55%)]" />
        <div className="relative max-w-7xl mx-auto container-px py-24 md:py-32 grid lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-3 mb-7">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] uppercase tracking-[0.32em] text-gold">Premium UK Security · Est. 2022</span>
            </div>
            <h1 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-foreground">
              Trusted Professional <br />
              <span className="gradient-gold-text">Security Services</span> <br />
              Across the United Kingdom
            </h1>
            <p className="mt-7 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
              SIA licensed security guards, manned CCTV monitoring, event security and corporate protection — delivered to a standard you can rely on, 24 hours a day.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all shadow-gold-glow">
                Get Free Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a href="tel:+442045258800" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm font-medium border border-gold/40 text-foreground hover:bg-gold/10 hover:border-gold transition-all">
                <Phone className="h-4 w-4 text-gold" /> Emergency Security Contact
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TRUST.map((t) => (
                <div key={t.label} className="flex items-center gap-2.5 text-xs text-foreground/80">
                  <t.icon className="h-4 w-4 text-gold flex-shrink-0" /> {t.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="absolute inset-0 -m-6 bg-gradient-to-br from-gold/10 to-transparent rounded-md" />
            <div className="relative glass rounded-md p-7 shadow-luxe animate-fade-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] uppercase tracking-[0.22em] text-gold">Live Operations</span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" /></span>
                  Control Room Online
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { k: "Officers Deployed", v: "412" },
                  { k: "Sites Protected", v: "147" },
                  { k: "Avg. Response", v: "8 min" },
                  { k: "SLA Compliance", v: "99.7%" },
                ].map((s) => (
                  <div key={s.k} className="rounded-sm border border-border/60 bg-background/40 p-4">
                    <div className="text-2xl font-display gradient-gold-text">{s.v}</div>
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-5 gold-line" />
              <div className="mt-5 flex items-center gap-3">
                <div className="flex -space-x-2">
                  {["JM","AR","SK"].map((i) => (
                    <div key={i} className="h-9 w-9 rounded-full border border-gold/30 bg-charcoal text-xs flex items-center justify-center text-gold font-medium">{i}</div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Senior controllers on shift now.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER / TRUSTED BY */}
      <section className="border-y border-border/40 bg-charcoal/60">
        <div className="max-w-7xl mx-auto container-px py-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-gold/80">Trusted by leading UK organisations</span>
          {["Carrington Build","Meridian Retail","Lattice Holdings","Atlas Events","Halcyon Hotels","Northgate Logistics"].map((c) => (
            <span key={c} className="font-display text-base text-foreground/70">{c}</span>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <Section eyebrow="About Aurex" title={<>A standard of security <em className="not-italic gradient-gold-text">worth trusting.</em></>} description="Aurex Security Services is a UK-based, SIA-regulated security company delivering professional manned guarding, CCTV monitoring and corporate protection. Built on three years of operational excellence and a no-compromise approach to vetting and training.">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Every officer we deploy is SIA licensed and trained against an internal operating standard refined across hundreds of UK contracts. From reception desks to high-risk construction sites, our officers represent your brand with discipline and discretion.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm">
              {["100% SIA Licensed","Sector-Specific Training","Health & Safety Compliant","Live Reporting","GPS Patrol Verified","Dedicated Account Manager"].map((x) => (
                <li key={x} className="flex items-center gap-2.5"><ShieldCheck className="h-4 w-4 text-gold" /> {x}</li>
              ))}
            </ul>
            <Link to="/about" className="inline-flex items-center gap-2 text-gold hover:gap-3 transition-all">Learn more about Aurex <ArrowRight className="h-4 w-4" /></Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "Years Experience", v: 3, suffix: "+" },
              { k: "Clients Protected", v: 100, suffix: "+" },
              { k: "Officers on Roll", v: 410, suffix: "" },
              { k: "Avg. Response", v: 8, suffix: " min" },
            ].map((s) => (
              <div key={s.k} className="glass rounded-md p-6">
                <div className="font-display text-4xl gradient-gold-text"><Counter to={s.v} suffix={s.suffix} /></div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">{s.k}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHY CHOOSE */}
      <Section eyebrow="Why Aurex" title={<>The qualities <span className="gradient-gold-text">enterprise UK clients</span> insist on.</>}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE.map((w) => (
            <div key={w.title} className="group p-7 rounded-md border border-border/60 bg-surface/50 hover:border-gold/50 transition-all hover:-translate-y-1">
              <w.icon className="h-6 w-6 text-gold mb-4 transition-transform group-hover:scale-110" />
              <h3 className="font-display text-lg mb-1.5">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LIVE STATS */}
      <section className="py-20 bg-charcoal/70 border-y border-border/40">
        <div className="max-w-7xl mx-auto container-px grid gap-10 sm:grid-cols-3 text-center">
          {[
            { v: 1280, suffix: "+", label: "Guards Deployed" },
            { v: 147, suffix: "", label: "Sites Protected" },
            { v: 9420, suffix: "+", label: "Emergency Responses" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl md:text-6xl gradient-gold-text"><Counter to={s.v} suffix={s.suffix} /></div>
              <div className="mt-3 text-xs uppercase tracking-[0.28em] text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Client Voices" title={<>Reviewed by clients who <span className="gradient-gold-text">trust us nightly.</span></>}>
        <div className="grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="glass rounded-md p-8 relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-gold/20" />
              <div className="flex gap-1 text-gold mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="text-base md:text-lg leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-6 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full border border-gold/30 bg-charcoal text-gold font-medium flex items-center justify-center">{t.avatar}</div>
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section eyebrow="Case Studies" title={<>Real outcomes, <span className="gradient-gold-text">measured precisely.</span></>}>
        <div className="grid gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((c, idx) => (
            <article key={c.title} className="rounded-md border border-border/60 bg-surface/50 p-7 hover:border-gold/40 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-[0.28em] text-gold">Case 0{idx + 1}</span>
                {idx === 0 && <img src={constructionImg} alt="" className="hidden" />}
              </div>
              <h3 className="font-display text-2xl">{c.title}</h3>
              <div className="mt-5 space-y-3 text-sm">
                <p><span className="text-gold font-medium">Challenge — </span><span className="text-muted-foreground">{c.challenge}</span></p>
                <p><span className="text-gold font-medium">Solution — </span><span className="text-muted-foreground">{c.solution}</span></p>
                <p><span className="text-gold font-medium">Result — </span><span className="text-muted-foreground">{c.result}</span></p>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-border/60">
                {c.stats.map((s) => (
                  <div key={s.k} className="text-center">
                    <div className="font-display text-xl gradient-gold-text">{s.v}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{s.k}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* QUOTE FORM */}
      <Section eyebrow="Get a Quote" title={<>Request a <span className="gradient-gold-text">free security assessment.</span></>} description="A senior account manager will contact you within one business hour, day or night.">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="font-display text-2xl">What to expect</h4>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="font-display text-gold">01.</span> Detailed risk and site discovery call.</li>
                <li className="flex gap-3"><span className="font-display text-gold">02.</span> Bespoke deployment plan and SLA proposal.</li>
                <li className="flex gap-3"><span className="font-display text-gold">03.</span> Officer mobilisation in as little as 24 hours.</li>
              </ul>
            </div>
            <div className="glass rounded-md p-6">
              <div className="text-xs uppercase tracking-[0.22em] text-gold mb-2">Direct Line</div>
              <a href="tel:+442045258800" className="font-display text-3xl gradient-gold-text">+44 20 4525 8800</a>
              <p className="text-xs text-muted-foreground mt-3">24/7 Operations · info@aurexsecurity.co.uk</p>
            </div>
            <img src={eventImg} alt="UK event security officer" className="rounded-md w-full h-56 object-cover" loading="lazy" width={1280} height={896} />
          </div>
          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </div>
      </Section>

      {/* EMERGENCY BANNER */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,oklch(0.16_0.02_260),oklch(0.2_0.05_265))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,oklch(0.82_0.13_85/0.18),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto container-px flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-destructive/15 border border-destructive/40 text-xs uppercase tracking-[0.22em] text-destructive mb-4">
              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75 animate-ping" /><span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" /></span>
              24/7 Emergency Line
            </div>
            <h2 className="font-display text-3xl md:text-5xl">Need <span className="gradient-gold-text">emergency security</span> coverage?</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Rapid deployment of SIA-licensed officers across the UK. Speak to a senior controller now.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+442045258800" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm font-semibold bg-[image:var(--gradient-gold)] text-primary-foreground shadow-gold-glow hover:brightness-110 transition-all">
              <Phone className="h-4 w-4" /> Call +44 20 4525 8800
            </a>
            <Link to="/emergency" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm font-medium border border-gold/40 hover:bg-gold/10 transition-colors">
              Emergency Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
