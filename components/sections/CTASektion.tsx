import Link from "next/link";
import { Phone, ArrowRight, Mail } from "lucide-react";

export default function CTASektion() {
  return (
    <section className="py-32 bg-void relative overflow-hidden">

      {/* Dot texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(85% 0.012 228) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ice glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-ice-500/6 blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="inline-flex items-center gap-2 text-xs font-semibold text-ice-400 uppercase tracking-widest mb-8">
          <span className="w-4 h-px bg-ice-500" />
          Kostenloses Angebot
          <span className="w-4 h-px bg-ice-500" />
        </span>

        <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] font-black text-white leading-[0.92] tracking-tight mb-6">
          Antwort innerhalb
          <br />
          <span className="text-ice-400">24 Stunden.</span>
        </h2>

        <p className="text-steel-400 max-w-md mx-auto mb-12 leading-relaxed">
          ISO 9001 zertifiziert. Bundesweit tätig. Eigenproduktion Trockeneis.
          Kein Risiko, kein Overhead.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white font-bold rounded-sm hover:bg-brand-red-hover transition-colors text-sm tracking-wide"
          >
            Angebot anfragen
            <ArrowRight size={15} />
          </Link>
          <a
            href="tel:+493377202730"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/12 text-white/80 font-medium rounded-sm hover:border-white/25 hover:text-white transition-colors text-sm"
          >
            <Phone size={14} />
            03377 202730
          </a>
          <a
            href="mailto:info@i-s-c-gmbh.de"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/12 text-white/80 font-medium rounded-sm hover:border-white/25 hover:text-white transition-colors text-sm"
          >
            <Mail size={14} />
            info@i-s-c-gmbh.de
          </a>
        </div>
      </div>
    </section>
  );
}
