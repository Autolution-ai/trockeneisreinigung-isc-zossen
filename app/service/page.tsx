import Link from "next/link";
import { ArrowRight, Phone, Wrench, GraduationCap, Truck, ClipboardList } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Reparatur | ISC Industrie-Service-Czech GmbH",
  description: "Reparatur, Wartung, Schulung und Trockeneis-Lieferung – der Rundum-Service der ISC GmbH aus Zossen bei Berlin.",
};

const services = [
  {
    nr: "01",
    icon: Wrench,
    titel: "Reparatur & Wartung",
    claim: "Wartung nach Hersteller­vorgabe.",
    text: "Wir warten und reparieren alle Strahlmaschinen, die wir verkaufen und vermieten – IceTech, Schmidt, Sponge-Jet und KAESER. Kundendienst vor Ort oder in unserer Werkstatt.",
    specs: [
      { label: "Marken", value: "IceTech, Schmidt, KAESER" },
      { label: "Ort", value: "Werkstatt & Vor-Ort" },
      { label: "Ersatzteile", value: "Sichergestellt" },
      { label: "Garantie", value: "Abwicklung inkl." },
    ],
  },
  {
    nr: "02",
    icon: GraduationCap,
    titel: "Schulungen & Einweisungen",
    claim: "Sicher mit CO₂ arbeiten.",
    text: "Wir schulen Ihre Mitarbeiter im sicheren Umgang mit Trockeneisstrahlgeräten und anderen Strahlanlagen – bei Ihnen vor Ort oder in Zossen.",
    specs: [
      { label: "Inhalt", value: "Sicherheit & Bedienung" },
      { label: "Gruppen", value: "1–10 Personen" },
      { label: "Sprache", value: "Deutsch / Tschechisch" },
      { label: "Ort", value: "Vor Ort oder Zossen" },
    ],
  },
  {
    nr: "03",
    icon: Truck,
    titel: "Trockeneis-Lieferung",
    claim: "Frisch ab Werk Zossen.",
    text: "Wir produzieren Trockeneis selbst und liefern bundesweit in isolierten Behältern. Kurzfristige Lieferungen ab Lager Zossen möglich.",
    specs: [
      { label: "Größen", value: "3 mm / 16 mm" },
      { label: "Mindestmenge", value: "25 kg" },
      { label: "Behälter", value: "Leihgabe / Kauf" },
      { label: "Radius", value: "Bundesweit" },
    ],
  },
  {
    nr: "04",
    icon: ClipboardList,
    titel: "Projektberatung",
    claim: "Verfahren neutral empfohlen.",
    text: "Nicht sicher, welches Verfahren das Richtige ist? Wir analysieren Ihre Anforderung und empfehlen die optimale Lösung – Verfahren, Maschine, Zeitaufwand und Kosten.",
    specs: [
      { label: "Erstberatung", value: "Kostenlos" },
      { label: "Vor Ort", value: "Bundesweit" },
      { label: "Ergebnis", value: "Kostenschätzung" },
      { label: "Empfehlung", value: "Herstellerneutral" },
    ],
  },
];

const ablauf = [
  { nr: "01", titel: "Anliegen schildern", text: "Maschine, Problem oder Ziel kurz beschreiben." },
  { nr: "02", titel: "Erstanalyse", text: "Telefonisch oder vor Ort – meist binnen 24 h." },
  { nr: "03", titel: "Angebot", text: "Festpreis oder Kostenschätzung, transparent." },
  { nr: "04", titel: "Durchführung", text: "Reparatur, Schulung, Lieferung oder Beratung." },
];

export default function ServicePage() {
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
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Service</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl">
            Mehr als Reinigung.<br />
            <span className="text-ice-400">Vier Service-Säulen.</span>
          </h1>
          <p className="mt-6 text-steel-400 max-w-xl leading-relaxed">
            Reparatur, Schulung, Trockeneis-Lieferung und Projektberatung – alles aus einer Hand,
            für eigene Geräte und Fremdmarken.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {[
              { v: "4", l: "Service-Bereiche" },
              { v: "24h", l: "Reaktionszeit" },
              { v: "DE/CZ", l: "Schulungssprache" },
              { v: "BRD", l: "Servicegebiet" },
            ].map((s) => (
              <div key={s.l} className="bg-navy-950 px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-steel-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial service blocks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {services.map((s, i) => {
            const Icon = s.icon;
            const isEven = i % 2 === 0;
            return (
              <section key={s.titel} className="grid lg:grid-cols-12 gap-10 items-center">
                <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-display text-5xl sm:text-6xl font-black text-steel-200 leading-none tracking-tighter">
                      {s.nr}
                    </span>
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-navy-950 flex items-center justify-center">
                        <Icon size={16} className="text-ice-400" />
                      </div>
                      <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">
                        {s.titel}
                      </span>
                    </div>
                  </div>
                  <h2 className="font-display text-3xl sm:text-5xl font-black text-navy-950 tracking-tight leading-[1]">
                    {s.claim}
                  </h2>
                  <p className="mt-6 text-steel-600 leading-relaxed max-w-xl">{s.text}</p>

                  <div className="mt-8 grid grid-cols-2 gap-px bg-steel-200 border border-steel-200 rounded-lg overflow-hidden max-w-xl">
                    {s.specs.map((sp) => (
                      <div key={sp.label} className="bg-white px-4 py-3.5">
                        <div className="text-[10px] uppercase tracking-widest text-steel-500 font-semibold">
                          {sp.label}
                        </div>
                        <div className="mt-1 text-sm font-bold text-navy-950">{sp.value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                  <div className="relative aspect-[4/5] bg-steel-50 border border-steel-200 rounded-2xl overflow-hidden p-8 flex flex-col justify-between">
                    <div
                      className="absolute inset-0 opacity-50"
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, oklch(85% 0.012 228) 1px, transparent 0)`,
                        backgroundSize: "20px 20px",
                      }}
                    />
                    <div className="relative">
                      <Icon size={72} className="text-navy-950/20" strokeWidth={1.2} />
                    </div>
                    <div className="relative">
                      <div className="font-display text-[clamp(2.5rem,6vw,4rem)] font-black text-navy-950 leading-[0.9] tracking-tighter">
                        {s.titel.split(" ")[0]}
                      </div>
                      <div className="mt-3 inline-block text-[10px] font-bold uppercase tracking-widest text-white bg-navy-950 px-2.5 py-1 rounded-sm">
                        ISC Service
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Ablauf */}
      <div className="bg-steel-50 border-y border-steel-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">So läuft's</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              Vier Schritte zum Ergebnis.
            </h2>
          </div>

          <div className="grid sm:grid-cols-4 gap-px bg-steel-200 border border-steel-200 rounded-xl overflow-hidden">
            {ablauf.map((s) => (
              <div key={s.nr} className="bg-white p-6 sm:p-7">
                <div className="font-display text-xs font-black text-ice-500 tracking-widest">{s.nr}</div>
                <div className="mt-3 font-display text-lg font-black text-navy-950">{s.titel}</div>
                <p className="mt-2 text-sm text-steel-600 leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-black text-white mb-1">Jetzt Service anfragen</h2>
            <p className="text-steel-400 text-sm">Reparatur, Schulung oder Beratung – wir helfen weiter.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-md hover:bg-brand-red-hover transition-colors text-sm"
            >
              Anfrage senden
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
