import Link from "next/link";
import { ArrowRight, Wrench, GraduationCap, Truck, ClipboardList } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Reparatur | ISC Industrie-Service-Czech GmbH",
  description: "Reparatur, Wartung, Schulung und Trockeneis-Lieferung – der Rundum-Service der ISC GmbH aus Zossen bei Berlin.",
};

const services = [
  {
    icon: Wrench,
    titel: "Reparatur & Wartung",
    text: "Wir warten und reparieren alle Strahlmaschinen, die wir verkaufen und vermieten – IceTech, Schmidt, Sponge-Jet und KAESER-Kompressoren. Kundendienst vor Ort oder in unserer Werkstatt in Zossen.",
    punkte: [
      "Wartung nach Herstellervorgabe",
      "Ersatzteilversorgung sichergestellt",
      "Vor-Ort-Service bundesweit möglich",
      "Garantieabwicklung",
    ],
  },
  {
    icon: GraduationCap,
    titel: "Schulungen & Einweisungen",
    text: "Wir schulen Ihre Mitarbeiter im sicheren Umgang mit Trockeneisstrahlgeräten und anderen Strahlanlagen – bei Ihnen vor Ort oder in Zossen.",
    punkte: [
      "Sicherheitsunterweisung Trockeneis (CO₂)",
      "Gerätebedienung und Wartung",
      "Einzelpersonen oder Gruppen",
      "Auf Deutsch und Tschechisch",
    ],
  },
  {
    icon: Truck,
    titel: "Trockeneis-Lieferung",
    text: "Wir produzieren Trockeneis selbst und liefern bundesweit in isolierten Behältern. Kurzfristige Lieferungen ab Lager Zossen möglich.",
    punkte: [
      "3 mm Pellets (Standardstrahlen)",
      "16 mm Nuggets (Blockreinigung)",
      "Behälter als Leihgabe oder Kauf",
      "Mindestmenge 25 kg",
    ],
  },
  {
    icon: ClipboardList,
    titel: "Projektberatung",
    text: "Nicht sicher, welches Verfahren das Richtige ist? Wir analysieren Ihre Anforderung und empfehlen die optimale Lösung – Verfahren, Maschine, Zeitaufwand und Kosten.",
    punkte: [
      "Kostenloser Erstberatung",
      "Verfahrensauswahl und Planung",
      "Kostenschätzung vor Ort",
      "Neutral – wir empfehlen was passt",
    ],
  },
];

export default function ServicePage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Service</span>
          <h1 className="mt-2 text-4xl sm:text-5xl font-black text-white leading-tight">
            Mehr als Reinigung.
          </h1>
          <p className="mt-4 text-steel-400 max-w-xl leading-relaxed">
            Reparatur, Schulung, Trockeneis-Lieferung und Projektberatung –
            alles aus einer Hand.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, titel, text, punkte }) => (
            <div key={titel} className="p-6 rounded-xl border border-steel-200">
              <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center mb-4">
                <Icon size={20} className="text-ice-500" />
              </div>
              <h2 className="font-bold text-navy-900 mb-2">{titel}</h2>
              <p className="text-sm text-steel-600 leading-relaxed mb-4">{text}</p>
              <ul className="space-y-1.5">
                {punkte.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-xs text-steel-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-ice-500 mt-1 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-navy-950 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-black text-white mb-1">Jetzt Service anfragen</h2>
            <p className="text-steel-400 text-sm">Reparatur, Schulung oder Beratung – wir helfen weiter.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm flex-shrink-0"
          >
            Anfrage senden
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
