import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Section } from "@/components/site/Section";
import { CheckCircle2, Briefcase, ShieldCheck, GraduationCap, Heart } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Security Guard Jobs UK | Careers at Aurex Security" },
      { name: "description", content: "Join Aurex Security. SIA-licensed security guard vacancies across the UK. Competitive pay, training and progression." },
      { property: "og:title", content: "Careers — Aurex Security" },
      { property: "og:description", content: "SIA security guard jobs across the UK with Aurex Security." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const VACANCIES = [
  { role: "SIA Door Supervisor", location: "London", type: "Full-time", rate: "£14.50 – £17/hr" },
  { role: "Construction Site Officer", location: "Manchester", type: "Full-time", rate: "£13.50 – £16/hr" },
  { role: "Corporate Concierge Security", location: "London EC2", type: "Full-time", rate: "£15 – £18/hr" },
  { role: "CCTV Operator (BS 7958)", location: "Birmingham", type: "Shifts", rate: "£14 – £16/hr" },
  { role: "Mobile Patrol Officer", location: "South East", type: "Nights", rate: "£14 – £17/hr" },
  { role: "Event Security Steward", location: "UK Wide", type: "Casual", rate: "£12.50 – £15/hr" },
];

const Schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  role: z.string().min(1),
  sia: z.string().min(1),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
});

function CareersPage() {
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = Schema.safeParse(Object.fromEntries(fd.entries()));
    if (!parsed.success) {
      const errs: Record<string,string> = {};
      parsed.error.issues.forEach((i) => { errs[String(i.path[0])] = i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setDone(true);
  }

  const field = "w-full bg-background/40 border border-border focus:border-gold focus:ring-1 focus:ring-gold/40 rounded-sm px-4 py-3 text-sm outline-none transition-colors";
  const lab = "text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2 block";

  return (
    <>
      <Section eyebrow="Careers" title={<>Build a career with the <span className="gradient-gold-text">UK's most disciplined</span> security team.</>} description="We invest in our officers — competitive rates, structured training and clear progression into supervisory and control-room roles.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {[
            { i: Briefcase, t: "Steady Contracts", d: "Long-term placements with leading UK clients." },
            { i: ShieldCheck, t: "Officer Welfare", d: "Senior support 24/7 and quality uniform issued." },
            { i: GraduationCap, t: "Training Funded", d: "SIA refreshers, FAW, ProtectDuty and more." },
            { i: Heart, t: "Real Progression", d: "Promotion into supervision, control room, account management." },
          ].map((b) => (
            <div key={b.t} className="rounded-md border border-border/60 bg-surface/50 p-6">
              <b.i className="h-5 w-5 text-gold mb-3" />
              <div className="font-display text-lg">{b.t}</div>
              <p className="text-sm text-muted-foreground mt-1">{b.d}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display text-2xl mb-5">Current Vacancies</h3>
        <div className="rounded-md border border-border/60 overflow-hidden">
          {VACANCIES.map((v, i) => (
            <div key={v.role} className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-5 items-center ${i !== VACANCIES.length - 1 ? "border-b border-border/60" : ""} hover:bg-surface/40 transition-colors`}>
              <div>
                <div className="font-medium">{v.role}</div>
                <div className="text-xs text-muted-foreground">{v.type}</div>
              </div>
              <div className="text-sm text-muted-foreground">{v.location}</div>
              <div className="text-sm text-gold">{v.rate}</div>
              <a href="#apply" className="justify-self-end text-xs uppercase tracking-[0.22em] text-foreground/80 hover:text-gold transition-colors">Apply →</a>
            </div>
          ))}
        </div>
      </Section>

      <Section id="apply" eyebrow="Apply" title="Apply Online">
        {done ? (
          <div className="glass rounded-md p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-gold" />
            <h3 className="mt-4 font-display text-2xl">Application received</h3>
            <p className="mt-2 text-muted-foreground text-sm">Our recruitment team will review your details and respond within 3 working days.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="glass rounded-md p-6 md:p-10 grid gap-5 md:grid-cols-2 max-w-3xl">
            <div><label className={lab}>Full Name</label><input name="name" className={field} /></div>
            <div><label className={lab}>Phone</label><input name="phone" className={field} /></div>
            <div><label className={lab}>Email</label><input name="email" type="email" className={field} /></div>
            <div><label className={lab}>Applying For</label>
              <select name="role" defaultValue="" className={field}>
                <option value="" disabled>Select a role</option>
                {VACANCIES.map((v) => <option key={v.role}>{v.role}</option>)}
              </select>
            </div>
            <div className="md:col-span-2"><label className={lab}>SIA License Held</label>
              <select name="sia" defaultValue="" className={field}>
                <option value="" disabled>Select license</option>
                <option>Door Supervisor</option><option>Security Guard</option><option>CCTV Operator</option><option>Close Protection</option><option>Not yet — pursuing</option>
              </select>
            </div>
            <div className="md:col-span-2"><label className={lab}>Brief Message</label><textarea name="message" rows={4} className={field} /></div>
            <button type="submit" className="md:col-span-2 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-sm font-medium text-primary-foreground bg-[image:var(--gradient-gold)] hover:brightness-110 transition-all">Submit Application</button>
            {Object.keys(errors).length > 0 && <p className="md:col-span-2 text-xs text-destructive">Please complete all required fields correctly.</p>}
          </form>
        )}
      </Section>
    </>
  );
}
