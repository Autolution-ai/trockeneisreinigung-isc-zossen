import Link from "next/link";
import { ArrowRight, Phone, Snowflake, Wind, Layers, Gauge, Package } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenverkauf | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisstrahlgeräte, Sandstrahlmaschinen, Sponge-Jet und Trockeneis kaufen – autorisierter IceTech und Schmidt Partner in Zossen bei Berlin.",
};

const produkte = [
  {
    nr: "01",
    icon: Snowflake,
    kategorie: "Trockeneisstrahlgeräte",
    hersteller: "IceTech",
    rolle: "Autorisierter Händler",
    intro: "Tragbare Einmann-Einheiten bis Industrieanlagen – die komplette ICEMASTER und TRIBLAST Serie. Inkl. Beratung, Einweisung und Service.",
    specs: [
      { label: "Verbrauch", value: "30–150 kg/h" },
      { label: "Serien", value: "ICEMASTER / TRIBLAST" },
      { label: "Anwendung", value: "Tragbar bis stationär" },
      { label: "Service", value: "Inklusive" },
    ],
  },
  {
    nr: "02",
    icon: Wind,
    kategorie: "Sandstrahlmaschinen",
    hersteller: "Schmidt",
    rolle: "Vertragspartner",
    intro: "Druckbehälter 25 bis 400 Liter, stationär und mobil. Komplettanlagen inklusive passender Kompressoren auf Anfrage.",
    specs: [
      { label: "Behälter", value: "25–400 L" },
      { label: "Bauform", value: "Stationär & mobil" },
      { label: "Strahlmittel", value: "Universell" },
      { label: "Kompressor", value: "Auf Wunsch" },
    ],
  },
  {
    nr: "03",
    icon: Layers,
    kategorie: "Sponge-Jet Systeme",
    hersteller: "Sponge-Jet Inc.",
    rolle: "Distributor",
    intro: "Das gesamte Sponge-Jet Portfolio mit über 20 Strahlmitteltypen für staubarmes Strahlen in sensiblen Umgebungen.",
    specs: [
      { label: "Strahlmittel", value: "20+ Typen" },
      { label: "Staubreduktion", value: "bis −90 %" },
      { label: "Recycling", value: "Wiederverwertbar" },
      { label: "Branchen", value: "Lebensmittel, Pharma" },
    ],
  },
  {
    nr: "04",
    icon: Gauge,
    kategorie: "Kompressoren",
    hersteller: "KAESER",
    rolle: "Vertragspartner",
    intro: "Fahrbare und stationäre Kompressoren von 5 bis 21 m³/min – inkl. Wartung, Service und optionalem Leasing.",
    specs: [
      { label: "Leistung", value: "5–21 m³/min" },
      { label: "Bauform", value: "Mobil & stationär" },
      { label: "Wartung", value: "Fachpersonal" },
      { label: "Finanzierung", value: "Kauf / Miete / Leasing" },
    ],
  },
  {
    nr: "05",
    icon: Package,
    kategorie: "Trockeneis-Pellets",
    hersteller: "ISC Eigenproduktion",
    rolle: "Hersteller",
    intro: "Trockeneis aus eigener Produktion in Zossen – frisch ab Werk, bundesweit in isolierten Behältern lieferbar.",
    specs: [
      { label: "Größen", value: "3 mm / 16 mm" },
      { label: "Menge", value: "Ab 25 kg" },
      { label: "Haltbarkeit", value: "4–8 Tage" },
      { label: "Schwund", value: "ca. 4 % / 24 h" },
    ],
  },
];

export default function VerkaufPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-navy-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Maschinenverkauf</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl">
            Profi-Equipment.<br />
            <span className="text-ice-400">Direkt vom Vertragspartner.</span>
          </h1>
          <p className="mt-6 text-steel-400 max-w-xl leading-relaxed">
            Autorisierter IceTech-, Schmidt- und KAESER-Partner – Trockeneis aus eigener Produktion.
            Beratung, Einweisung und Service inklusive.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {[
              { v: "5", l: "Produktbereiche" },
              { v: "4", l: "Marken-Partner" },
              { v: "1991", l: "Erfahrung seit" },
              { v: "BRD", l: "Lieferung" },
            ].map((s) => (
              <div key={s.l} className="bg-navy-950 px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-steel-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand strip */}
      <div className="border-b border-steel-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <span className="text-[11px] uppercase tracking-widest text-steel-500 font-semibold">
              Autorisierte Partner
            </span>
            <div className="flex items-center gap-x-10 gap-y-3 flex-wrap">
              {["IceTech", "Schmidt", "Sponge-Jet", "KAESER", "ISC"].map((b) => (
                <span
                  key={b}
                  className="font-display text-xl sm:text-2xl font-black text-navy-950 tracking-tight"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Editorial product rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {produkte.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <section key={p.kategorie} className="grid lg:grid-cols-12 gap-10 items-center">
                <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-5xl sm:text-6xl font-black text-steel-200 leading-none tracking-tighter">
                      {p.nr}
                    </span>
                    <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">
                      {p.rolle}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-md bg-navy-950 flex items-center justify-center">
                      <Icon size={18} className="text-ice-400" />
                    </div>
                    <span className="font-display text-base font-black text-navy-950 tracking-tight">
                      {p.hersteller}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight leading-[1.05]">
                    {p.kategorie}
                  </h2>
                  <p className="mt-4 text-steel-600 leading-relaxed max-w-xl">{p.intro}</p>

                  <div className="mt-6 grid grid-cols-2 gap-px bg-steel-200 border border-steel-200 rounded-lg overflow-hidden max-w-xl">
                    {p.specs.map((s) => (
                      <div key={s.label} className="bg-white px-4 py-3.5">
                        <div className="text-[10px] uppercase tracking-widest text-steel-500 font-semibold">
                          {s.label}
                        </div>
                        <div className="mt-1 text-sm font-bold text-navy-950">{s.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/5] bg-navy-950 rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: `repeating-linear-gradient(${isEven ? "0deg" : "90deg"}, oklch(75% 0.20 210 / 0.5) 0 1px, transparent 1px 24px)`,
                      }}
                    />
                    <div className="relative">
                      <Icon size={72} className="text-ice-400/80" strokeWidth={1.2} />
                    </div>
                    <div className="relative">
                      <div className="font-display text-[clamp(2rem,5vw,3.5rem)] font-black text-white leading-[0.9] tracking-tighter">
                        {p.hersteller}
                      </div>
                      <div className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-navy-950 bg-ice-400 px-2.5 py-1 rounded-sm">
                        {p.rolle}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-steel-50 border-t border-steel-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-white border border-steel-200 rounded-2xl">
            <div>
              <h2 className="font-display text-2xl font-black text-navy-950 mb-1">Preisanfrage stellen</h2>
              <p className="text-steel-600 text-sm">Preise abhängig von Modell, Ausstattung und Bestellmenge – individuelles Angebot binnen 24 h.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white text-sm font-semibold rounded-md hover:bg-navy-800 transition-colors"
              >
                Angebot anfordern
                <ArrowRight size={14} />
              </Link>
              <a
                href="tel:+493377202730"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-steel-300 text-navy-950 text-sm font-semibold rounded-md hover:bg-steel-50 transition-colors"
              >
                <Phone size={14} />
                03377 202730
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
