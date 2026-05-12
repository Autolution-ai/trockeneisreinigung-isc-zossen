import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenvermietung | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisstrahlgeräte, Sandstrahlmaschinen und KAESER-Kompressoren mieten – flexibel, tagesweise, inkl. Einweisung. ISC GmbH in Zossen bei Berlin.",
};

const mietgeraete = [
  {
    name: "Trockeneisstrahlgeräte",
    text: "IceTech Geräte in verschiedenen Größen – von tragbaren Einheiten bis zu Hochleistungsanlagen für schwere Verschmutzungen.",
  },
  {
    name: "Sandstrahlmaschinen",
    text: "Schmidt Druckbehälter 25–400 L, inkl. Strahlmittel auf Anfrage. Für Entrostung, Entlackung und Oberflächenvorbereitung.",
  },
  {
    name: "Soda-Strahlanlagen",
    text: "Für empfindliche Oberflächen – Oldtimer, Fassaden, Holz. Strahlmittel (Natriumbicarbonat) separat bestellbar.",
  },
  {
    name: "KAESER-Kompressoren",
    text: "Fahrbare Kompressoren 5–21 m³/min. Geeignet für alle unsere Strahlgeräte. Lieferung inkl. Druckschläuche.",
  },
];

const inklusive = [
  "Persönliche Einweisung vor Ort oder in Zossen",
  "Technischer Support während der Mietzeit",
  "Sauberes, gewartetes Gerät",
  "Flexible Mietdauer (täglich, wöchentlich, monatlich)",
  "Lieferung und Abholung nach Absprache",
];

export default function VermietungPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Vermietung</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Mieten statt kaufen.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Flexibel für einmalige Projekte oder regelmäßige Einsätze –
            alle Maschinen tages- und wochenweise verfügbar, inkl. Einweisung.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-black text-navy-950 mb-6">Verfügbare Mietgeräte</h2>
            <div className="space-y-4">
              {mietgeraete.map((g) => (
                <div key={g.name} className="p-5 rounded-xl border border-steel-200">
                  <h3 className="font-bold text-navy-900 mb-1.5">{g.name}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{g.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-navy-950 mb-6">Immer inklusive</h2>
            <ul className="space-y-3 mb-10">
              {inklusive.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-ice-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-steel-700">{p}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 bg-navy-950 rounded-xl">
              <h3 className="font-black text-white mb-2">Mietpreise anfragen</h3>
              <p className="text-steel-400 text-sm mb-5">
                Preise nach Gerät, Mietdauer und Ort. Wir erstellen Ihnen ein individuelles Angebot.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-ice-500 text-white text-sm font-semibold rounded-md hover:bg-ice-400 transition-colors"
                >
                  Anfrage senden
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+493377202730"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-semibold rounded-md hover:bg-white/10 transition-colors"
                >
                  <Phone size={14} />
                  03377 202730
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
