import { Award, Snowflake, Globe, Wrench, CheckCircle } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    titel: "ISO 9001 zertifiziert",
    text: "Unser Qualitätsmanagementsystem ist nach ISO 9001 zertifiziert – für reproduzierbar hohe Reinigungsqualität.",
  },
  {
    icon: Snowflake,
    titel: "Eigenproduktion Trockeneis",
    text: "Wir produzieren Trockeneis selbst – 24/7 verfügbar, frisch geliefert, in verschiedenen Pelletgrößen.",
  },
  {
    icon: Globe,
    titel: "Bundesweit tätig",
    text: "Von Zossen bei Berlin aus bedienen wir Kunden in ganz Deutschland – schnell, flexibel, zuverlässig.",
  },
  {
    icon: Wrench,
    titel: "IceTech & KAESER Partner",
    text: "Autorisierter Partner von IceTech (Strahlanlagen) und KAESER (Kompressoren) für Verkauf, Vermietung und Service.",
  },
];

const zahlen = [
  { wert: "10+", label: "Jahre Erfahrung" },
  { wert: "ISO", label: "9001 zertifiziert" },
  { wert: "24/7", label: "Trockeneis-Produktion" },
  { wert: "4", label: "Strahlverfahren" },
];

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Über uns
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
              Ihr Spezialist für
              <br />
              Trockeneisstrahlen.
            </h2>
            <p className="mt-4 text-steel-600 leading-relaxed">
              Die ISC Industrie-Service-Czech GmbH mit Sitz in Zossen bei Berlin ist
              seit über zehn Jahren auf Trockeneisstrahlen und industrielle
              Strahlverfahren spezialisiert. Wir bieten das breiteste Portfolio
              der Region: Reinigungsdienstleistung, Maschinenverkauf, Vermietung
              und Eigenproduktion von Trockeneis aus einer Hand.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {zahlen.map(({ wert, label }) => (
                <div key={label} className="p-4 bg-steel-50 rounded-xl">
                  <div className="text-2xl font-black text-navy-950">{wert}</div>
                  <div className="text-xs text-steel-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {trustItems.map(({ icon: Icon, titel, text }) => (
              <div
                key={titel}
                className="flex gap-4 p-5 rounded-xl border border-steel-200 hover:border-ice-200 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Icon size={18} className="text-ice-500" />
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">{titel}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-2 mt-2 px-1">
              <CheckCircle size={14} className="text-ice-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-steel-500">
                Geschäftsführer: Henry Czech · An den Wulzen 2-6 · 15806 Zossen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
