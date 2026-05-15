import { useEffect, useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

export function FloatingActions() {
  const [showCookie, setShowCookie] = useState(false);

  useEffect(() => {
    const ok = typeof window !== "undefined" && window.localStorage.getItem("ax-cookie-ack");
    if (!ok) setShowCookie(true);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
        <a
          href="https://wa.me/442045258800"
          aria-label="WhatsApp"
          target="_blank"
          rel="noreferrer"
          className="h-13 w-13 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform"
          style={{ height: 52, width: 52 }}
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <a
          href="tel:+442045258800"
          aria-label="Emergency call"
          className="inline-flex items-center gap-2 pl-3 pr-4 py-3 rounded-full bg-destructive text-destructive-foreground shadow-luxe hover:brightness-110 transition-all"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Phone className="h-4 w-4" />
          <span className="text-sm font-semibold tracking-wide hidden sm:inline">Emergency</span>
        </a>
      </div>

      {showCookie && (
        <div className="fixed bottom-5 left-5 z-40 max-w-sm glass rounded-md p-5 shadow-luxe animate-fade-up">
          <div className="flex items-start gap-3">
            <div className="text-xs leading-relaxed text-muted-foreground">
              We use cookies to enhance your experience and analyze site performance, in line with UK GDPR.
            </div>
            <button onClick={() => setShowCookie(false)} aria-label="Dismiss" className="text-muted-foreground hover:text-foreground">
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button
              onClick={() => { localStorage.setItem("ax-cookie-ack", "1"); setShowCookie(false); }}
              className="px-4 py-2 text-xs font-medium rounded-sm bg-[image:var(--gradient-gold)] text-primary-foreground"
            >
              Accept
            </button>
            <button
              onClick={() => { localStorage.setItem("ax-cookie-ack", "0"); setShowCookie(false); }}
              className="px-4 py-2 text-xs font-medium rounded-sm border border-border text-foreground/80 hover:border-gold/60"
            >
              Decline
            </button>
          </div>
        </div>
      )}
    </>
  );
}
