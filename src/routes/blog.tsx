import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Section } from "@/components/site/Section";
import { POSTS } from "@/lib/site-data";
import { Search, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Security News & Insights | Aurex Security UK" },
      { name: "description", content: "UK security news, crime prevention tips, CCTV best practices, event security advice and compliance guidance from Aurex Security." },
      { property: "og:title", content: "Security News & Insights — Aurex Security" },
      { property: "og:description", content: "Security insights, CCTV best practices and compliance guidance for UK businesses." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const cats = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))];
  const filtered = POSTS.filter((p) =>
    (cat === "All" || p.category === cat) &&
    (q === "" || p.title.toLowerCase().includes(q.toLowerCase()) || p.excerpt.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <Section eyebrow="News & Insights" title={<>Sharp thinking on <span className="gradient-gold-text">UK security.</span></>} description="Industry insight, compliance guidance and practical playbooks for security buyers.">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-colors ${cat === c ? "border-gold text-gold bg-gold/5" : "border-border text-muted-foreground hover:border-gold/40"}`}>{c}</button>
          ))}
        </div>
        <label className="relative inline-flex items-center w-full md:w-72">
          <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search articles..." className="w-full pl-10 pr-4 py-2.5 bg-background/40 border border-border focus:border-gold rounded-sm text-sm outline-none" />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.slug} className="group rounded-md border border-border/60 bg-surface/50 overflow-hidden hover:border-gold/40 transition-colors">
            <div className="h-44 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.22_0.05_265),oklch(0.16_0.02_260))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.82_0.13_85/0.25),transparent_60%)]" />
              <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-gold/30">AX</div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                <span className="text-gold">{p.category}</span> · <span>{p.date}</span>
              </div>
              <h3 className="font-display text-xl mt-3 leading-snug group-hover:text-gold transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{p.excerpt}</p>
              <a href="#" className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-gold">Read article <ArrowUpRight className="h-3.5 w-3.5" /></a>
            </div>
          </article>
        ))}
      </div>
      {filtered.length === 0 && <p className="text-center text-muted-foreground py-12">No articles match your search.</p>}
    </Section>
  );
}
