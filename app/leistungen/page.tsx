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

type Spec = { label: string; value: string };
type Detail = {
  claim: string;
  info: string;
  specs: Spec[];
  punkte: string[];
  heroStat: { value: string; unit?: string; label: string };
  visual: "pellets" | "diagonals" | "rings" | "mesh" | "stack" | "duration";
};

const details: Record<string, Detail> = {
  trockeneisreinigung: {
    claim: "Sublimiert. Hinterlässt nichts.",
    info: "CO₂-Pellets bei −79 °C sublimieren beim Aufprall sofort. Keine Feuchtigkeit, keine Chemie, keine Rückstände – außer dem abgetragenen Schmutz.",
    heroStat: { value: "−79", unit: "°C", label: "Pellet-Temperatur" },
    visual: "pellets",
    specs: [
      { label: "Strahlmittel", value: "CO₂-Pellets 3 / 16 mm" },
      { label: "Rückstände", value: "Keine" },
      { label: "Demontage", value: "Nicht nötig" },
      { label: "Zulassung", value: "EU-Lebensmittel" },
    ],
    punkte: [
      "Reinigung ohne Demontage und ohne Betriebsunterbrechung",
      "Elektrisch nicht leitend – geeignet für Schaltschränke und Motoren",
      "Lebensmittelzugelassen nach EU-Vorschriften",
      "Keine Entsorgungskosten für Strahlmittel",
    ],
  },
  sandstrahlen: {
    claim: "Wenn nur abrasiv reicht.",
    info: "Mit Sandstrahlmaschinen von Schmidt Sandstrahltechnik und KAESER-Kompressoren erzielen wir optimale Ergebnisse für Oberflächenvorbereitung und Entrostung.",
    heroStat: { value: "400", unit: "L", label: "Druckbehälter bis" },
    visual: "diagonals",
    specs: [
      { label: "Hersteller", value: "Schmidt" },
      { label: "Strahlmittel", value: "Sand / Korund / Glas" },
      { label: "Untergrund", value: "Stahl, Beton, Stein" },
      { label: "Variante", value: "Trocken & Nass" },
    ],
    punkte: [
      "Entrostung, Entlackung, Oberflächenvorbereitung",
      "Verschiedene Strahlmittel: Sand, Korund, Glasperlen",
      "Mobile Einheiten für Einsatz vor Ort",
      "Staubarme Variante mit Nass-/Feuchtstrahlen möglich",
    ],
  },
  "soda-strahlen": {
    claim: "Schonend. Sogar essbar.",
    info: "Natriumbicarbonat (Backpulver) als Strahlmittel – ideal für empfindliche Oberflächen, die klassisches Sandstrahlen nicht vertragen.",
    heroStat: { value: "pH", unit: "8,3", label: "Mild-alkalisch" },
    visual: "rings",
    specs: [
      { label: "Strahlmittel", value: "Natriumbicarbonat" },
      { label: "Abrasion", value: "Nicht abrasiv" },
      { label: "Nachbehandlung", value: "Wasserlöslich" },
      { label: "Einsatz", value: "Oldtimer, Fassaden" },
    ],
    punkte: [
      "Nicht abrasiv – schont Untergrundmaterial",
      "Ideal für Oldtimer, Bootslacke, Fassaden",
      "Neutralisiert Gerüche und Bakterien",
      "Lebensmittelzugelassen",
    ],
  },
  "sponge-jet": {
    claim: "90 % weniger Staub.",
    info: "Innovative Technologie mit schwammartigen Strahlmitteln, die Staub binden und wiederverwertbar sind. Über 20 verschiedene Strahlmitteltypen verfügbar.",
    heroStat: { value: "−90", unit: "%", label: "Staubreduktion" },
    visual: "mesh",
    specs: [
      { label: "Strahlmittel", value: "20+ Typen" },
      { label: "Wiederverwertbar", value: "Ja" },
      { label: "Rauhigkeit", value: "Präzise einstellbar" },
      { label: "Einsatz", value: "Lebensmittel, Pharma" },
    ],
    punkte: [
      "Bis zu 90 % weniger Staub als klassisches Strahlen",
      "Strahlmittel recycelbar und wiederverwertbar",
      "Präzise Oberflächenrauhigkeit einstellbar",
      "Geeignet für sensible Umgebungen (Lebensmittel, Pharma)",
    ],
  },
  verkauf: {
    claim: "Vom Pellet bis zur Anlage.",
    info: "Autorisierter Händler für IceTech Trockeneisstrahlgeräte, Schmidt Sandstrahlmaschinen, Sponge-Jet Systeme und KAESER-Kompressoren. Trockeneis aus eigener Produktion.",
    heroStat: { value: "5", unit: "Marken", label: "Im Portfolio" },
    visual: "stack",
    specs: [
      { label: "Strahlgeräte", value: "IceTech" },
      { label: "Sandstrahl", value: "Schmidt" },
      { label: "Schwamm", value: "Sponge-Jet" },
      { label: "Druckluft", value: "KAESER" },
    ],
    punkte: [
      "IceTech Trockeneisstrahlgeräte (alle Modelle)",
      "Schmidt Sandstrahlmaschinen",
      "Sponge-Jet Systeme",
      "KAESER Kompressoren",
    ],
  },
  vermietung: {
    claim: "Ab einem Tag verfügbar.",
    info: "Flexibel mieten statt kaufen: Alle unsere Maschinen sind auch zur Miete verfügbar – inkl. Einweisung und technischem Support.",
    heroStat: { value: "1", unit: "Tag", label: "Minimum-Miete" },
    visual: "duration",
    specs: [
      { label: "Min. Mietdauer", value: "1 Tag" },
      { label: "Einweisung", value: "Inklusive" },
      { label: "Support", value: "Während Mietzeit" },
      { label: "Lieferung", value: "Auf Anfrage" },
    ],
    punkte: [
      "Trockeneisstrahlgeräte tages- und wochenweise",
      "Sandstrahl- und Soda-Anlagen",
      "KAESER-Kompressoren verschiedener Größen",
      "Technischer Support während der Mietzeit",
    ],
  },
};

function Visual({ kind, accent }: { kind: Detail["visual"]; accent: boolean }) {
  const bg = accent ? "bg-navy-950" : "bg-steel-50";
  const fg = accent ? "text-white" : "text-navy-950";
  const sub = accent ? "text-ice-300" : "text-steel-500";

  if (kind === "pellets") {
    return (
      <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle at center, oklch(75% 0.20 210) 1.2px, transparent 1.6px)`,
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-navy-950 via-transparent to-transparent" />
        <div className="relative h-full flex flex-col justify-end p-8">
          <div className={`font-display text-7xl sm:text-8xl font-black tracking-tighter ${fg} leading-none`}>
            −79°C
          </div>
          <div className={`mt-3 text-xs uppercase tracking-widest ${sub}`}>Sublimation bei Aufprall</div>
        </div>
      </div>
    );
  }

  if (kind === "diagonals") {
    return (
      <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden`}>
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, oklch(67% 0.24 210) 0 1.5px, transparent 1.5px 14px)`,
          }}
        />
        <div className="relative h-full flex flex-col justify-end p-8">
          <div className={`font-display text-7xl sm:text-8xl font-black tracking-tighter ${fg} leading-none`}>
            8 bar
          </div>
          <div className={`mt-3 text-xs uppercase tracking-widest ${sub}`}>Schmidt Druckanlagen</div>
        </div>
      </div>
    );
  }

  if (kind === "rings") {
    return (
      <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden`}>
        <div className="absolute -bottom-32 -right-24 w-[420px] h-[420px] rounded-full border border-ice-500/30" />
        <div className="absolute -bottom-20 -right-12 w-[280px] h-[280px] rounded-full border border-ice-500/40" />
        <div className="absolute -bottom-10 -right-4 w-[160px] h-[160px] rounded-full bg-ice-100/60" />
        <div className="relative h-full flex flex-col justify-end p-8">
          <div className={`font-display text-7xl sm:text-8xl font-black tracking-tighter ${fg} leading-none`}>
            pH 8,3
          </div>
          <div className={`mt-3 text-xs uppercase tracking-widest ${sub}`}>Mild-alkalisch · NaHCO₃</div>
        </div>
      </div>
    );
  }

  if (kind === "mesh") {
    return (
      <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden`}>
        <div className="absolute inset-0 p-6 grid grid-cols-8 grid-rows-7 gap-1.5">
          {Array.from({ length: 56 }).map((_, idx) => {
            const highlight = [4, 9, 11, 18, 22, 27, 33, 40, 44, 51].includes(idx);
            return (
              <div
                key={idx}
                className={highlight ? "bg-ice-500 rounded-[2px]" : "bg-steel-200/60 rounded-[2px]"}
              />
            );
          })}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-steel-50 via-steel-50/95 to-transparent">
          <div className={`font-display text-7xl sm:text-8xl font-black tracking-tighter ${fg} leading-none`}>
            −90%
          </div>
          <div className={`mt-3 text-xs uppercase tracking-widest ${sub}`}>Staub vs. klassisches Strahlen</div>
        </div>
      </div>
    );
  }

  if (kind === "stack") {
    const brands = ["IceTech", "Schmidt", "Sponge-Jet", "KAESER", "ISC"];
    return (
      <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden p-8 flex flex-col justify-between`}>
        <div className="space-y-2.5">
          {brands.map((b, i) => (
            <div key={b} className="flex items-center gap-4">
              <span className={`font-display text-xs font-black ${sub} w-6`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={`font-display text-2xl sm:text-3xl font-black tracking-tight ${fg}`}>
                {b}
              </span>
            </div>
          ))}
        </div>
        <div className={`text-xs uppercase tracking-widest ${sub}`}>Autorisierte Partnerschaften</div>
      </div>
    );
  }

  // duration
  return (
    <div className={`relative aspect-[5/4] ${bg} rounded-2xl overflow-hidden p-8 flex flex-col justify-between`}>
      <div className="grid grid-cols-7 gap-1.5">
        {Array.from({ length: 28 }).map((_, idx) => (
          <div
            key={idx}
            className={`aspect-square rounded-[3px] ${idx < 7 ? "bg-ice-500" : idx < 14 ? "bg-ice-500/40" : "bg-steel-200"}`}
          />
        ))}
      </div>
      <div>
        <div className={`font-display text-7xl sm:text-8xl font-black tracking-tighter ${fg} leading-none`}>
          1 Tag+
        </div>
        <div className={`mt-3 text-xs uppercase tracking-widest ${sub}`}>Flexibel · inkl. Einweisung</div>
      </div>
    </div>
  );
}

const ablauf = [
  { nr: "01", titel: "Anfrage", text: "Telefon, Mail oder Formular – wir melden uns binnen 24 h." },
  { nr: "02", titel: "Beratung", text: "Verfahren, Aufwand und Kosten gemeinsam definieren." },
  { nr: "03", titel: "Termin", text: "Vor Ort oder in Zossen – flexibel auch kurzfristig." },
  { nr: "04", titel: "Ausführung", text: "Fachpersonal, eigene Maschinen, dokumentiertes Ergebnis." },
];

export default function LeistungenPage() {
  return (
    <div className="bg-white">
      {/* Hero with stat strip */}
      <div className="bg-navy-950 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Leistungen</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl">
            Sechs Verfahren.<br />
            <span className="text-ice-400">Ein Ansprechpartner.</span>
          </h1>
          <p className="mt-6 text-steel-400 max-w-xl leading-relaxed">
            Von der professionellen Trockeneisreinigung bis zur Maschinenvermietung –
            das breiteste Strahlverfahren-Portfolio in Berlin und Brandenburg.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {[
              { v: "6", l: "Verfahren" },
              { v: "−79°C", l: "CO₂-Strahlen" },
              { v: "5", l: "Hersteller" },
              { v: "1991", l: "Gegründet" },
            ].map((s) => (
              <div key={s.l} className="bg-navy-950 px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-steel-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editorial sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-28">
          {leistungen.map((item, i) => {
            const Icon = iconMap[item.icon];
            const d = details[item.id];
            const isEven = i % 2 === 0;
            const accentVisual = item.highlight;

            return (
              <section key={item.id} id={item.id} className="scroll-mt-24">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Text column */}
                  <div className={`lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="flex items-baseline gap-4 mb-6">
                      <span className="font-display text-5xl sm:text-6xl font-black text-steel-200 leading-none tracking-tighter">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-md bg-navy-950 flex items-center justify-center">
                          {Icon && <Icon size={16} className="text-ice-400" />}
                        </div>
                        <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">
                          {item.titel}
                        </span>
                      </div>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-black text-navy-950 leading-[1] tracking-tight">
                      {d.claim}
                    </h2>

                    <p className="mt-6 text-steel-600 leading-relaxed max-w-xl">{d.info}</p>

                    {/* Spec grid */}
                    <div className="mt-8 grid grid-cols-2 gap-px bg-steel-200 border border-steel-200 rounded-lg overflow-hidden max-w-xl">
                      {d.specs.map((s) => (
                        <div key={s.label} className="bg-white px-4 py-3.5">
                          <div className="text-[10px] uppercase tracking-widest text-steel-500 font-semibold">
                            {s.label}
                          </div>
                          <div className="mt-1 text-sm font-bold text-navy-950">{s.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Inline punkte as compact tags */}
                    <ul className="mt-6 flex flex-wrap gap-2 max-w-xl">
                      {d.punkte.map((p) => (
                        <li
                          key={p}
                          className="text-xs text-steel-700 bg-steel-50 border border-steel-200 rounded-full px-3 py-1.5 leading-snug"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex gap-3 flex-wrap">
                      <Link
                        href="/kontakt"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white text-sm font-semibold rounded-md hover:bg-navy-800 transition-colors"
                      >
                        Angebot anfragen
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href="tel:+493377202730"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-navy-950 text-sm font-semibold hover:text-ice-600 transition-colors"
                      >
                        <Phone size={14} />
                        03377 202730
                      </a>
                    </div>
                  </div>

                  {/* Visual column */}
                  <div className={`lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                    <Visual kind={d.visual} accent={accentVisual} />
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>

      {/* Ablauf timeline */}
      <div className="bg-steel-50 border-y border-steel-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold text-ice-600 uppercase tracking-widest">So arbeiten wir</span>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-black text-navy-950 tracking-tight">
              Von der Anfrage zum sauberen Ergebnis.
            </h2>
          </div>

          <div className="relative grid sm:grid-cols-4 gap-px bg-steel-200 border border-steel-200 rounded-xl overflow-hidden">
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
            <h2 className="font-display text-2xl font-black text-white mb-1">Kostenloses Angebot anfordern</h2>
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
