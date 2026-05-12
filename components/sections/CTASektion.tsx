import Link from "next/link";
import { Phone, ArrowRight, Mail } from "lucide-react";

export default function CTASektion() {
  return (
    <section className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold text-ice-400 uppercase tracking-widest mb-4">
          Jetzt anfragen
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
          Bereit für professionelle
          <br />
          <span className="text-ice-400">Reinigung ohne Stillstand?</span>
        </h2>
        <p className="text-steel-400 max-w-xl mx-auto mb-10 leading-relaxed">
          Kostenloses Angebot. Antwort innerhalb 24 Stunden. ISO 9001 zertifiziert,
          bundesweit tätig.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ice-500 text-white font-bold rounded-md hover:bg-ice-400 transition-colors text-sm"
          >
            Kostenloses Angebot anfragen
            <ArrowRight size={16} />
          </Link>
          <a
            href="tel:+493377202730"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            <Phone size={15} />
            03377 202730
          </a>
          <a
            href="mailto:info@i-s-c-gmbh.de"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm"
          >
            <Mail size={15} />
            info@i-s-c-gmbh.de
          </a>
        </div>
      </div>
    </section>
  );
}
