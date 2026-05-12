import Link from "next/link";
import { ArrowRight, Phone, ShoppingCart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenverkauf | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisstrahlgeräte, Sandstrahlmaschinen, Sponge-Jet und Trockeneis kaufen – autorisierter IceTech und Schmidt Partner in Zossen bei Berlin.",
};

const produkte = [
  {
    kategorie: "Trockeneisstrahlgeräte",
    hersteller: "IceTech",
    punkte: [
      "Tragbare Einmann-Einheiten bis Industrieanlagen",
      "Verbrauch: 30–150 kg/h Trockeneis",
      "Alle Modelle der IceTech ICEMASTER und TRIBLAST Serie",
      "Inkl. Beratung, Einweisung und Service",
    ],
  },
  {
    kategorie: "Sandstrahlmaschinen",
    hersteller: "Schmidt",
    punkte: [
      "Druckbehälter 25 bis 400 Liter",
      "Stationär und mobil",
      "Verschiedene Strahlmittel einsetzbar",
      "Komplettanlagen inkl. Kompressor auf Anfrage",
    ],
  },
  {
    kategorie: "Sponge-Jet Systeme",
    hersteller: "Sponge-Jet Inc.",
    punkte: [
      "Gesamtes Sponge-Jet Portfolio",
      "Über 20 verschiedene Strahlmitteltypen",
      "Für staubarmes Strahlen in sensiblen Umgebungen",
      "Strahlmittel-Nachlieferung und Recycling",
    ],
  },
  {
    kategorie: "Kompressoren",
    hersteller: "KAESER",
    punkte: [
      "Fahrbare Kompressoren 5–21 m³/min",
      "Stationäre Anlagen",
      "Wartung und Service durch Fachpersonal",
      "Miete und Leasing möglich",
    ],
  },
  {
    kategorie: "Trockeneis (Pellets)",
    hersteller: "Eigenproduktion ISC",
    punkte: [
      "3 mm und 16 mm Pellets in jeder Menge",
      "Frisch produziert – direkt ab Werk in Zossen",
      "Lieferung bundesweit in isolierten Behältern",
      "Haltbarkeit 4–8 Tage, Schwund ca. 4%/24h",
    ],
  },
];

export default function VerkaufPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Maschinenverkauf</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Profi-Equipment kaufen.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Als autorisierter IceTech- und KAESER-Partner verkaufen wir
            professionelle Strahlgeräte und produzieren Trockeneis selbst.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {produkte.map((p) => (
            <div key={p.kategorie} className="p-6 rounded-xl border border-steel-200">
              <div className="flex items-start justify-between mb-3">
                <h2 className="font-bold text-navy-900">{p.kategorie}</h2>
                <span className="text-xs text-ice-500 font-semibold bg-ice-100 px-2 py-0.5 rounded">
                  {p.hersteller}
                </span>
              </div>
              <ul className="space-y-2">
                {p.punkte.map((punkt) => (
                  <li key={punkt} className="flex items-start gap-2 text-sm text-steel-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice-500 mt-1.5 flex-shrink-0" />
                    {punkt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-steel-50 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0">
              <ShoppingCart size={18} className="text-ice-400" />
            </div>
            <div>
              <h2 className="font-black text-navy-950 text-lg mb-2">Preisanfrage</h2>
              <p className="text-steel-600 text-sm mb-4 max-w-xl">
                Preise sind abhängig von Modell, Ausstattung und Bestellmenge.
                Kontaktieren Sie uns für ein individuelles Angebot.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white text-sm font-semibold rounded-md hover:bg-navy-800 transition-colors"
                >
                  Angebot anfordern
                  <ArrowRight size={14} />
                </Link>
                <a
                  href="tel:+493377202730"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy-200 text-navy-900 text-sm font-semibold rounded-md hover:bg-navy-50 transition-colors"
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
