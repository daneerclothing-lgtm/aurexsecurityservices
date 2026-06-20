import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, ShieldCheck, Clock, Phone, Mail, MapPin } from "lucide-react";

const Schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  service: z.string().min(1, "Select a service"),
  location: z.string().trim().min(2).max(120),
  budget: z.string().min(1, "Select a budget"),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

const SERVICES = ["Corporate Security","Construction Site Security","Retail Security","Event Security","CCTV Monitoring","Concierge / Reception","Other"];
const BUDGETS = ["Under £1,000 / mo","£1,000 – £5,000 / mo","£5,000 – £20,000 / mo","£20,000+ / mo","One-off project"];

export function QuoteForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = Schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    const d = parsed.data;
    const subject = `New Security Quote Request — ${d.name}${d.company ? ` (${d.company})` : ""}`;
    const body = [
      `Name: ${d.name}`,
      `Company: ${d.company || "-"}`,
      `Email: ${d.email}`,
      `Phone: ${d.phone}`,
      `Service: ${d.service}`,
      `Location: ${d.location}`,
      `Budget: ${d.budget}`,
      "",
      "Message:",
      d.message || "-",
    ].join("\n");
    const mailto = `mailto:hello@aurexsecurity.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="glass rounded-md p-10 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
        <h3 className="mt-4 font-display text-2xl">Request received</h3>
        <p className="mt-2 text-muted-foreground text-sm">A senior account manager will be in touch within one business hour, 24/7.</p>
      </div>
    );
  }

  const field = "w-full bg-background/40 border border-border focus:border-gold focus:ring-1 focus:ring-gold/40 rounded-sm px-4 py-3 text-sm outline-none transition-colors";
  const lab = "text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2 block";
  const err = "text-xs text-destructive mt-1";

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      {/* LEFT — what to expect + contact */}
      <aside className="lg:col-span-2 space-y-6">
        <div className="glass rounded-md p-6 md:p-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-gold mb-3">What to expect</div>
          <h3 className="font-display text-2xl leading-tight">A senior consultant — not a call centre.</h3>
          <ul className="mt-5 space-y-4 text-sm">
            {[
              { icon: Clock, t: "Response within 1 business hour", d: "24/7 operations team on standby." },
              { icon: ShieldCheck, t: "SIA-licensed officers only", d: "Vetted to BS 7858 standards." },
              { icon: CheckCircle2, t: "No-obligation site assessment", d: "Tailored proposal, transparent pricing." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-gold/40 bg-gold/10 text-gold">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-foreground font-medium">{t}</div>
                  <div className="text-muted-foreground text-xs mt-0.5">{d}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-border/60 bg-surface/50 p-6 space-y-3 text-sm">
          <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> <a href="tel:+447723406782" className="hover:text-gold">+44 7723 406782</a></div>
          <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> <a href="mailto:hello@aurexsecurity.co.uk" className="hover:text-gold">hello@aurexsecurity.co.uk</a></div>
          <div className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" /> 100 Grant Avenue, Liverpool, L15 5AZ</div>
        </div>
      </aside>

      {/* RIGHT — form */}
      <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-md p-6 md:p-10 grid gap-5 md:grid-cols-2">
      <div>
        <label className={lab}>Full Name</label>
        <input name="name" className={field} placeholder="John Smith" />
        {errors.name && <p className={err}>{errors.name}</p>}
      </div>
      <div>
        <label className={lab}>Company</label>
        <input name="company" className={field} placeholder="Company Ltd" />
      </div>
      <div>
        <label className={lab}>Email</label>
        <input name="email" type="email" className={field} placeholder="you@company.co.uk" />
        {errors.email && <p className={err}>{errors.email}</p>}
      </div>
      <div>
        <label className={lab}>Phone</label>
        <input name="phone" className={field} placeholder="+44 ..." />
        {errors.phone && <p className={err}>{errors.phone}</p>}
      </div>
      <div>
        <label className={lab}>Service Needed</label>
        <select name="service" defaultValue="" className={field}>
          <option value="" disabled>Select a service</option>
          {SERVICES.map((s) => <option key={s}>{s}</option>)}
        </select>
        {errors.service && <p className={err}>{errors.service}</p>}
      </div>
      <div>
        <label className={lab}>Site Location</label>
        <input name="location" className={field} placeholder="London, UK" />
        {errors.location && <p className={err}>{errors.location}</p>}
      </div>
      <div className="md:col-span-2">
        <label className={lab}>Budget</label>
        <select name="budget" defaultValue="" className={field}>
          <option value="" disabled>Select a budget</option>
          {BUDGETS.map((b) => <option key={b}>{b}</option>)}
        </select>
        {errors.budget && <p className={err}>{errors.budget}</p>}
      </div>
      <div className="md:col-span-2">
        <label className={lab}>Message</label>
        <textarea name="message" rows={5} className={field} placeholder="Tell us about your security requirements..." />
      </div>
      <div className="md:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-2">
        <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all shadow-gold-glow">
          Get Free Security Assessment
        </button>
        <p className="text-xs text-muted-foreground">No obligation. Response within 1 business hour.</p>
      </div>
      </form>
    </div>
  );
}
