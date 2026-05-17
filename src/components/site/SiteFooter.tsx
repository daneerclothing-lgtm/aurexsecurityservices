import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ShieldCheck, Twitter } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border/40 bg-charcoal/80">
      <div className="gold-line" />
      <div className="max-w-7xl mx-auto container-px py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="h-10 w-10 rounded-md border border-gold/30 flex items-center justify-center bg-background/60">
              <span className="font-display text-xl gradient-gold-text">AX</span>
            </div>
            <div>
              <div className="font-display text-lg">Aurex Security</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">UK Wide Coverage</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            SIA licensed, fully insured manned guarding, CCTV monitoring and corporate protection across the United Kingdom.
          </p>
          <div className="flex items-center gap-3 mt-6">
            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social" className="h-9 w-9 inline-flex items-center justify-center rounded-full border border-border/60 hover:border-gold hover:text-gold transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Security Services" },
              { to: "/careers", label: "Careers" },
              { to: "/blog", label: "News & Insights" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-gold transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Services</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>Corporate Security</li>
            <li>Construction Site Security</li>
            <li>Retail Security</li>
            <li>Event Security</li>
            <li>CCTV Monitoring</li>
            <li>Concierge & Hotel Security</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> 22 Bishopsgate, London EC2N 4BQ</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+442045258800" className="hover:text-gold">+44 20 4525 8800</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:info@aurexsecurity.co.uk" className="hover:text-gold">info@aurexsecurity.co.uk</a></li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 text-gold" /> 24/7 Emergency Response</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40">
        <div className="max-w-7xl mx-auto container-px py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Aurex Security Services Ltd. Company No. 14782931 · SIA ABS Member</div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms & Conditions</Link>
            <Link to="/cookies" className="hover:text-gold">Cookie Policy</Link>
            <Link to="/gdpr" className="hover:text-gold">GDPR</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
