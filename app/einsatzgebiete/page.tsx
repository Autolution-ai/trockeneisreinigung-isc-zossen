import Link from "next/link";
import { ArrowRight, Factory, Car, UtensilsCrossed, Printer, Building2, Flame, Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes } from "lucide-react";
import { einsatzgebiete } from "@/lib/data/einsatzgebiete";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Einsatzgebiete | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisreinigung für Industrie, KFZ, Lebensmittel, Brandschaden und mehr. Alle Branchen und Einsatzbereiche der ISC GmbH aus Zossen bei Berlin.",
};

const iconMap: Record<string, React.ElementType> = {
  Factory, Car, UtensilsCrossed, Printer, Building2, Flame,
  Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes,
};

export default function EinsatzgebietePage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Einsatzgebiete</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Wo wir reinigen.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Trockeneisstrahlen eignet sich für nahezu jede Branche –
            überall dort, wo herkömmliche Verfahren versagen oder unzulässig sind.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {einsatzgebiete.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.titel}
                className="p-6 rounded-xl border border-steel-200 hover:border-ice-300 hover:shadow-sm transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center mb-4 group-hover:bg-ice-500 transition-colors">
                  {Icon && <Icon size={20} className="text-ice-500 group-hover:text-white transition-colors" />}
                </div>
                <h2 className="font-bold text-navy-900 mb-2">{item.titel}</h2>
                <p className="text-sm text-steel-600 leading-relaxed">{item.beschreibung}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 bg-navy-950 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-black text-white mb-1">Ihr Einsatzgebiet dabei?</h2>
            <p className="text-steel-400 text-sm">Kontaktieren Sie uns – wir finden die passende Lösung.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm flex-shrink-0"
          >
            Jetzt anfragen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
