import Link from "next/link";
import { ArrowRight, Phone, Snowflake, Wind, Sparkles, Gauge } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenvermietung | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisstrahlgeräte, Sandstrahlmaschinen und KAESER-Kompressoren mieten – flexibel, tagesweise, inkl. Einweisung. ISC GmbH in Zossen bei Berlin.",
};

const mietgeraete = [
  {
    icon: Snowflake,
    nr: "01",
    name: "Trockeneisstrahlgeräte",
    hersteller: "IceTech",
    text: "Tragbare Einmann-Einheiten bis zu Hochleistungsanlagen für schwere industrielle Verschmutzungen.",
    specs: [
      { label: "Verbrauch", value: "30–150 kg/h" },
      { label: "Pellet-Größe", value: "3 mm / 16 mm" },
      { label: "Strom", value: "230 / 400 V" },
      { label: "Gewicht", value: "ab 75 kg" },
    ],
  },
  {
    icon: Wind,
    nr: "02",
    name: "Sandstrahlmaschinen",
    hersteller: "Schmidt",
    text: "Druckbehälter von 25 bis 400 Litern, inkl. Strahlmittel-Beratung. Für Entrostung und Oberflächenvorbereitung.",
    specs: [
      { label: "Behälter", value: "25–400 L" },
      { label: "Druck", value: "bis 8 bar" },
      { label: "Strahlmittel", value: "Sand / Korund" },
      { label: "Variante", value: "Mobil & stationär" },
    ],
  },
  {
    icon: Sparkles,
    nr: "03",
    name: "Soda-Strahlanlagen",
    hersteller: "Schmidt / ISC",
    text: "Für empfindliche Oberflächen – Oldtimer, Fassaden, Holz. Natriumbicarbonat wasserlöslich und schonend.",
    specs: [
      { label: "Strahlmittel", value: "NaHCO₃" },
      { label: "Abrasion", value: "Nicht abrasiv" },
      { label: "Nachbehandlung", value: "Mit Wasser" },
      { label: "Lebensmittel", value: "Zugelassen" },
    ],
  },
  {
    icon: Gauge,
    nr: "04",
    name: "KAESER-Kompressoren",
    hersteller: "KAESER",
    text: "Fahrbare Kompressoren in verschiedenen Größenklassen – Lieferung inklusive passender Druckschläuche.",
    specs: [
      { label: "Leistung", value: "5–21 m³/min" },
      { label: "Druck", value: "bis 14 bar" },
      { label: "Antrieb", value: "Diesel mobil" },
      { label: "Schläuche", value: "Inklusive" },
    ],
  },
];

const ablauf = [
  { nr: "01", titel: "Anfrage", text: "Gerät, Zeitraum und Einsatzort durchgeben." },
  { nr: "02", titel: "Angebot", text: "Festpreis inkl. Einweisung – binnen 24 h." },
  { nr: "03", titel: "Abholung / Lieferung", text: "Selbstabholung Zossen oder Lieferung." },
  { nr: "04", titel: "Einweisung", text: "Vor Ort oder in unserer Werkstatt." },
  { nr: "05", titel: "Einsatz", text: "Telefonischer Support während Mietzeit." },
  { nr: "06", titel: "Rückgabe", text: "Sauber zurück – wir prüfen und warten." },
];

export default function VermietungPage() {
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
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Vermietung</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl">
            Mieten statt kaufen.<br />
            <span className="text-ice-400">Ab einem Tag.</span>
          </h1>
          <p className="mt-6 text-steel-400 max-w-xl leading-relaxed">
            Flexibel für einmalige Projekte oder regelmäßige Einsätze –
            alle Maschinen tages- und wochenweise verfügbar, inkl. Einweisung und Support.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {[
              { v: "1 Tag", l: "Minimum-Miete" },
              { v: "4", l: "Geräte-Kategorien" },
              { v: "24h", l: "Antwortzeit" },
              { v: "BRD", l: "Lieferradius" },
            ].map((s) => (
              <div key={s.l} className="bg-navy-950 px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-steel-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Geräte als editorial alternating rows */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">Mietpark</span>
          <h2 className="mt-2 font-display text-3xl sm:text-5xl font-black text-navy-950 tracking-tight leading-[1]">
            Vier Kategorien.<br />Eine Quelle.
          </h2>
        </div>

        <div className="space-y-20">
          {mietgeraete.map((g, i) => {
            const Icon = g.icon;
            const isEven = i % 2 === 0;
            return (
              <div key={g.name} className="grid lg:grid-cols-12 gap-10 items-center">
                <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-5xl sm:text-6xl font-black text-steel-200 leading-none tracking-tighter">
                      {g.nr}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-navy-950 flex items-center justify-center">
                        <Icon size={16} className="text-ice-400" />
                      </div>
                      <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">
                        {g.hersteller}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-navy-950 tracking-tight">
                    {g.name}
                  </h3>
                  <p className="mt-4 text-steel-600 leading-relaxed max-w-xl">{g.text}</p>

                  <div className="mt-6 grid grid-cols-2 gap-px bg-steel-200 border border-steel-200 rounded-lg overflow-hidden max-w-xl">
                    {g.specs.map((s) => (
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
                  <div className="relative aspect-[4/5] bg-steel-50 rounded-2xl overflow-hidden border border-steel-200">
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: `repeating-linear-gradient(${isEven ? "45deg" : "-45deg"}, oklch(85% 0.012 228) 0 1px, transparent 1px 18px)`,
                      }}
                    />
                    <div className="relative h-full flex flex-col justify-between p-8">
                      <Icon size={64} className="text-navy-950/15" strokeWidth={1.2} />
                      <div>
                        <div className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-black text-navy-950 leading-[0.9] tracking-tighter">
                          {g.name.split(" ")[0]}
                        </div>
                        <div className="mt-2 inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-navy-950 px-2.5 py-1 rounded-sm">
                          {g.hersteller}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ablauf timeline */}
      <div className="bg-navy-950 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Ablauf</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
              In sechs Schritten zum Mietgerät.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {ablauf.map((s) => (
              <div key={s.nr} className="bg-navy-950 p-6 sm:p-7">
                <div className="font-display text-xs font-black text-ice-400 tracking-widest">{s.nr}</div>
                <div className="mt-3 font-display text-lg font-black text-white">{s.titel}</div>
                <p className="mt-2 text-sm text-steel-400 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-white/5 border border-white/10 rounded-2xl">
            <div>
              <h3 className="font-display text-2xl font-black text-white mb-1">Mietpreise anfragen</h3>
              <p className="text-steel-400 text-sm">Preise nach Gerät, Mietdauer und Ort – individuelles Angebot binnen 24 h.</p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded-md hover:bg-brand-red-hover transition-colors"
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
  );
}
