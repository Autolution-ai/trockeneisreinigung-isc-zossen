import type { Metadata } from "next";
import KontaktForm from "./KontaktForm";

export const metadata: Metadata = {
  title: "Kontakt | ISC Industrie-Service-Czech GmbH",
  description: "Kostenloses Angebot anfordern: Trockeneisreinigung, Sandstrahlen und Maschinenvermietung. ISC GmbH Zossen – (03377) 202730 – Antwort innerhalb 24h.",
};

export default function KontaktPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Kontakt</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Sprechen wir.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Angebot, Mietanfrage oder Beratung — wir antworten innerhalb von 24 Stunden.
          </p>
        </div>
      </div>
      <KontaktForm />
    </div>
  );
}
