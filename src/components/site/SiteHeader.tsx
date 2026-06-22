import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden md:block bg-charcoal/90 text-xs text-muted-foreground border-b border-border/40">
        <div className="max-w-7xl mx-auto container-px flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href="tel:+447723406782" className="inline-flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone className="h-3.5 w-3.5 text-gold" /> +44 7723 406782
            </a>
            <span className="text-gold font-medium tracking-wide">24/7 Emergency Line</span>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${scrolled ? "glass-strong" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto container-px flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 rounded-md border border-gold/30 flex items-center justify-center bg-charcoal/60 group-hover:shadow-gold-glow transition-shadow">
              <span className="font-display text-xl gradient-gold-text leading-none font-semibold">AX</span>
            </div>
            <div className="leading-tight">
              <div className="font-display text-lg text-foreground tracking-wide">Aurex Security</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A Project by YCT LTD</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-gold" }}
                className="text-sm tracking-wide text-foreground/85 hover:text-gold transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link to="/emergency" className="text-xs uppercase tracking-widest text-foreground/70 hover:text-destructive transition-colors">Emergency</Link>
            <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all shadow-gold-glow">
              Request Quote
            </Link>
          </div>

          <button aria-label="Open menu" onClick={() => setOpen(true)} className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/60">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-charcoal border-l border-gold/20 p-6 overflow-y-auto animate-fade-up">
            <div className="flex items-center justify-between mb-8">
              <span className="font-display text-xl gradient-gold-text">AX Security</span>
              <button aria-label="Close" onClick={() => setOpen(false)} className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-border/60">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }} activeProps={{ className: "text-gold border-gold/40" }} className="px-4 py-3 rounded-md border border-transparent hover:border-gold/30 text-base">
                  {n.label}
                </Link>
              ))}
              <Link to="/emergency" onClick={() => setOpen(false)} className="px-4 py-3 rounded-md text-destructive border border-destructive/40 mt-2">
                Emergency Response
              </Link>
            </nav>
            <a href="tel:+447723406782" className="mt-6 flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[image:var(--gradient-gold)] text-primary-foreground font-medium">
              <Phone className="h-4 w-4" /> Call +44 7723 406782
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
