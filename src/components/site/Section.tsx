import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  id?: string;
  className?: string;
  align?: "left" | "center";
}

export function Section({ eyebrow, title, description, children, id, className = "", align = "left" }: SectionProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="max-w-7xl mx-auto container-px">
        {(eyebrow || title || description) && (
          <div className={`max-w-2xl mb-14 ${alignCls}`}>
            {eyebrow && (
              <div className="inline-flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[11px] uppercase tracking-[0.28em] text-gold">{eyebrow}</span>
              </div>
            )}
            {title && <h2 className="text-3xl md:text-5xl font-display leading-[1.05] text-foreground">{title}</h2>}
            {description && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
