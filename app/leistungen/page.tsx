import Link from "next/link";
import { ArrowRight, Phone, Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package } from "lucide-react";
import { leistungen } from "@/lib/data/leistungen";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leistungen | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisreinigung, Sandstrahlen, Soda-Strahlen und Sponge-Jet – das komplette Strahlverfahren-Portfolio der ISC GmbH aus Zossen bei Berlin.",
};

const iconMap: Record<string, React.ElementType> = {
  Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package,
};

const details: Record<string, { punkte: string[]; info: string }> = {
  trockeneisreinigung: {
    info: "CO₂-Pellets bei −79 °C sublimieren beim Aufprall sofort. Keine Feuchtigkeit, keine Chemie, keine Rückstände außer dem abgetragenen Schmutz.",
    punkte: [
      "Reinigung ohne Demontage und ohne Betriebsunterbrechung",
      "Elektrisch nicht leitend – geeignet für Schaltschränke und Motoren",
      "Lebensmittelzugelassen nach EU-Vorschriften",
      "Keine Entsorgungskosten für Strahlmittel",
      "Für nahezu alle Branchen geeignet",
    ],
  },
  sandstrahlen: {
    info: "Mit Sandstrahlmaschinen von Schmidt Sandstrahltechnik und KAESER-Kompressoren erzielen wir optimale Ergebnisse für Oberflächenvorbereitung und Entrostung.",
    punkte: [
      "Entrostung, Entlackung, Oberflächenvorbereitung",
      "Verschiedene Strahlmittel: Sand, Korund, Glasperlen",
      "Mobile Einheiten für Einsatz vor Ort",
      "Staubarme Variante mit Nass-/Feuchtstrahlen möglich",
      "Geeignet für Stahl, Beton, Stein, Holz",
    ],
  },
  "soda-strahlen": {
    info: "Natriumbicarbonat (Backpulver) als Strahlmittel – ideal für empfindliche Oberflächen, die klassisches Sandstrahlen nicht vertragen.",
    punkte: [
      "Nicht abrasiv – schont Untergrundmaterial",
      "Ideal für Oldtimer, Bootslacke, Fassaden",
      "Neutralisiert Gerüche und Bakterien",
      "Wasserlöslich – einfache Nachbehandlung",
      "Lebensmittelzugelassen",
    ],
  },
  "sponge-jet": {
    info: "Innovative Technologie mit schwammartigen Strahlmitteln, die Staub binden und wiederverwertbar sind. Über 20 verschiedene Strahlmitteltypen verfügbar.",
    punkte: [
      "Bis zu 90 % weniger Staub als klassisches Strahlen",
      "Strahlmittel recycelbar und wiederverwertbar",
      "Präzise Oberflächenrauhigkeit einstellbar",
      "Geeignet für sensible Umgebungen (Lebensmittel, Pharma)",
      "Über 20 verschiedene Strahlmittel",
    ],
  },
  maschinenverkauf: {
    info: "Autorisierter Händler für IceTech Trockeneisstrahlgeräte, Schmidt Sandstrahlmaschinen, Sponge-Jet Systeme und Soda-Strahlanlagen.",
    punkte: [
      "IceTech Trockeneisstrahlgeräte (alle Modelle)",
      "Schmidt Sandstrahlmaschinen",
      "Sponge-Jet Systeme",
      "KAESER Kompressoren",
      "Eigene Trockeneis-Produktion: Pellets in 3 mm und 16 mm",
    ],
  },
  maschinenvermietung: {
    info: "Flexibel mieten statt kaufen: Alle unsere Maschinen sind auch zur Miete verfügbar – inkl. Einweisung und technischem Support.",
    punkte: [
      "Trockeneisstrahlgeräte tages- und wochenweise",
      "Sandstrahl- und Soda-Anlagen",
      "KAESER-Kompressoren verschiedener Größen",
      "Einweisung inklusive",
      "Technischer Support während der Mietzeit",
    ],
  },
};

export default function LeistungenPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Leistungen</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Alles aus einer Hand.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Von der professionellen Trockeneisreinigung bis zur Maschinenvermietung –
            das breiteste Strahlverfahren-Portfolio in Berlin und Brandenburg.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-16">
          {leistungen.map((item, i) => {
            const Icon = iconMap[item.icon];
            const detail = details[item.id];
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.id}
                id={item.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center">
                      {Icon && <Icon size={20} className="text-ice-400" />}
                    </div>
                    <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
                      Leistung {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-950 mb-4">{item.titel}</h2>
                  {detail && (
                    <p className="text-steel-600 leading-relaxed mb-6">{detail.info}</p>
                  )}
                  {detail && (
                    <ul className="space-y-2 mb-8">
                      {detail.punkte.map((p) => (
                        <li key={p} className="flex items-start gap-2.5 text-sm text-steel-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-ice-500 mt-1.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white text-sm font-semibold rounded-md hover:bg-navy-800 transition-colors"
                  >
                    Angebot anfragen
                    <ArrowRight size={14} />
                  </Link>
                </div>
                <div className={`p-8 rounded-2xl ${item.highlight ? "bg-navy-950" : "bg-steel-50"} ${!isEven ? "lg:order-1" : ""}`}>
                  <p className={`text-lg leading-relaxed ${item.highlight ? "text-steel-300" : "text-steel-600"}`}>
                    {item.kurz}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-black text-white mb-1">Kostenloses Angebot anfordern</h2>
            <p className="text-steel-400 text-sm">Antwort innerhalb von 24 Stunden. Bundesweit tätig.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm"
            >
              Jetzt anfragen
              <ArrowRight size={14} />
            </Link>
            <a
              href="tel:+493377202730"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <Phone size={14} />
              03377 202730
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
