import { referenzen } from "@/lib/data/referenzen";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen | ISC Industrie-Service-Czech GmbH",
  description: "Vorher/Nachher-Referenzen der ISC GmbH – echte Reinigungsergebnisse aus Industrie, Druckerei, Brandschadensanierung und mehr.",
};

export default function ReferenzenPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Referenzen</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Ergebnisse, die überzeugen.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Schieben Sie den Regler und sehen Sie den Unterschied.
            Echte Reinigungsergebnisse aus unseren Projekten.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {referenzen.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden border border-steel-200">
              <BeforeAfterSlider
                vorher={item.vorher}
                nachher={item.nachher}
                alt={item.titel}
              />
              <div className="p-5">
                <span className="text-xs font-semibold text-ice-500 uppercase tracking-wider">{item.branche}</span>
                <h2 className="font-bold text-navy-900 mt-1 mb-2">{item.titel}</h2>
                <p className="text-sm text-steel-600 leading-relaxed">{item.beschreibung}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-steel-600 mb-6 max-w-lg mx-auto">
            Sie möchten ähnliche Ergebnisse für Ihr Unternehmen?
            Fordern Sie jetzt ein kostenloses Angebot an.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-8 py-4 bg-ice-500 text-white font-bold rounded-md hover:bg-ice-400 transition-colors"
          >
            Kostenloses Angebot anfragen
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
