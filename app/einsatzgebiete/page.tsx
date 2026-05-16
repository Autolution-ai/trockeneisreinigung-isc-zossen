import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Factory,
  Car,
  UtensilsCrossed,
  Printer,
  Building2,
  Flame,
  Zap,
  FlaskConical,
  Anchor,
  Trees,
  Thermometer,
  Boxes,
} from "lucide-react";
import { einsatzgebiete } from "@/lib/data/einsatzgebiete";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Einsatzgebiete | ISC Industrie-Service-Czech GmbH",
  description: "Trockeneisreinigung für Industrie, KFZ, Lebensmittel, Brandschaden und mehr. Alle Branchen und Einsatzbereiche der ISC GmbH aus Zossen bei Berlin.",
};

const iconMap: Record<string, React.ElementType> = {
  Factory, Car, UtensilsCrossed, Printer, Building2, Flame,
  Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes,
};

// Bento mosaic recipe — pattern repeats predictably for 12 items
type CardLook = {
  span: string;
  rowSpan?: string;
  tone: "dark" | "ice" | "light";
  size: "lg" | "md" | "sm";
  pattern?: "dots" | "diagonals" | "rings" | "mesh" | "none";
};

const layout: CardLook[] = [
  { span: "lg:col-span-4", rowSpan: "lg:row-span-2", tone: "dark", size: "lg", pattern: "dots" },
  { span: "lg:col-span-2", tone: "light", size: "md", pattern: "none" },
  { span: "lg:col-span-2", tone: "ice", size: "md", pattern: "diagonals" },
  { span: "lg:col-span-2", tone: "light", size: "md", pattern: "none" },
  { span: "lg:col-span-3", tone: "dark", size: "md", pattern: "rings" },
  { span: "lg:col-span-3", tone: "light", size: "md", pattern: "none" },
  { span: "lg:col-span-2", tone: "dark", size: "md", pattern: "mesh" },
  { span: "lg:col-span-2", tone: "light", size: "md", pattern: "none" },
  { span: "lg:col-span-2", tone: "ice", size: "md", pattern: "dots" },
  { span: "lg:col-span-3", tone: "light", size: "md", pattern: "none" },
  { span: "lg:col-span-3", tone: "dark", size: "md", pattern: "diagonals" },
  { span: "lg:col-span-6", tone: "ice", size: "md", pattern: "rings" },
];

const branchenStats = [
  { v: "12", l: "Branchen" },
  { v: "100+", l: "Anlagen­typen" },
  { v: "0", l: "Demontage" },
  { v: "BRD", l: "Einsatz" },
];

function PatternLayer({ kind, tone }: { kind: CardLook["pattern"]; tone: CardLook["tone"] }) {
  if (!kind || kind === "none") return null;
  const color =
    tone === "dark"
      ? "oklch(75% 0.20 210 / 0.45)"
      : tone === "ice"
        ? "rgba(255,255,255,0.55)"
        : "oklch(85% 0.012 228)";
  const op = tone === "light" ? "opacity-40" : "opacity-30";

  if (kind === "dots") {
    return (
      <div
        className={`absolute inset-0 ${op} pointer-events-none`}
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1.4px)`,
          backgroundSize: "22px 22px",
        }}
      />
    );
  }
  if (kind === "diagonals") {
    return (
      <div
        className={`absolute inset-0 ${op} pointer-events-none`}
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${color} 0 1px, transparent 1px 16px)`,
        }}
      />
    );
  }
  if (kind === "rings") {
    return (
      <div className={`absolute inset-0 ${op} pointer-events-none overflow-hidden`}>
        <div
          className="absolute -bottom-16 -right-10 w-72 h-72 rounded-full border"
          style={{ borderColor: color }}
        />
        <div
          className="absolute -bottom-8 -right-2 w-44 h-44 rounded-full border"
          style={{ borderColor: color }}
        />
      </div>
    );
  }
  if (kind === "mesh") {
    return (
      <div className={`absolute inset-0 ${op} pointer-events-none`}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
            backgroundSize: "26px 26px",
          }}
        />
      </div>
    );
  }
  return null;
}

export default function EinsatzgebietePage() {
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
          <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">Einsatzgebiete</span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl font-black text-white leading-[0.95] tracking-tight max-w-3xl">
            Zwölf Branchen.<br />
            <span className="text-ice-400">Ein Verfahren.</span>
          </h1>
          <p className="mt-6 text-steel-400 max-w-xl leading-relaxed">
            Trockeneisstrahlen eignet sich für nahezu jede Branche –
            überall dort, wo herkömmliche Verfahren versagen oder unzulässig sind.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden">
            {branchenStats.map((s) => (
              <div key={s.l} className="bg-navy-950 px-5 py-6">
                <div className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{s.v}</div>
                <div className="mt-1 text-[11px] uppercase tracking-widest text-steel-400">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bento mosaic — alternating dark/ice/light */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[14rem] gap-3">
          {einsatzgebiete.map((item, i) => {
            const Icon = iconMap[item.icon];
            const cfg = layout[i] ?? layout[layout.length - 1];

            const tone = cfg.tone;
            const isDark = tone === "dark";
            const isIce = tone === "ice";

            const bg =
              isDark
                ? "bg-navy-950"
                : isIce
                  ? "bg-ice-500"
                  : "bg-white border border-steel-200";

            const iconBg =
              isDark
                ? "bg-white/10 group-hover:bg-ice-500"
                : isIce
                  ? "bg-white/20 group-hover:bg-white/40"
                  : "bg-steel-100 group-hover:bg-navy-950";

            const iconColor =
              isDark
                ? "text-ice-400 group-hover:text-white"
                : isIce
                  ? "text-white"
                  : "text-navy-950 group-hover:text-white";

            const titleColor = isDark || isIce ? "text-white" : "text-navy-950";
            const textColor = isDark ? "text-steel-400" : isIce ? "text-white/80" : "text-steel-600";
            const indexColor = isDark ? "text-ice-400/70" : isIce ? "text-white/60" : "text-steel-400";
            const borderHover = isDark
              ? "hover:border-ice-500/40"
              : isIce
                ? "hover:bg-ice-400"
                : "hover:border-navy-950";

            return (
              <div
                key={item.titel}
                className={`group relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${bg} ${cfg.span} ${cfg.rowSpan ?? ""} ${borderHover} ${isDark ? "border border-white/8" : ""}`}
              >
                <PatternLayer kind={cfg.pattern} tone={tone} />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`w-11 h-11 rounded-lg flex items-center justify-center transition-colors ${iconBg}`}
                  >
                    {Icon && <Icon size={20} className={`transition-colors ${iconColor}`} />}
                  </div>
                  <span
                    className={`font-display text-xs font-black tracking-widest ${indexColor}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h2 className={`font-display font-black tracking-tight leading-[1.1] ${titleColor} ${cfg.size === "lg" ? "text-3xl sm:text-4xl" : "text-xl"}`}>
                    {item.titel}
                  </h2>
                  <p className={`mt-3 leading-relaxed ${textColor} ${cfg.size === "lg" ? "text-base max-w-md" : "text-sm"}`}>
                    {item.beschreibung}
                  </p>

                  {cfg.size === "lg" && (
                    <Link
                      href="/kontakt"
                      className="relative mt-6 inline-flex items-center gap-2 px-4 py-2 bg-brand-red text-white text-xs font-bold rounded-md hover:bg-brand-red-hover transition-colors"
                    >
                      Anfrage stellen
                      <ArrowRight size={12} />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA — dark band so the page doesn't end on white */}
      <div className="bg-navy-950 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl font-black text-white mb-1">Ihr Einsatzgebiet dabei?</h2>
            <p className="text-steel-400 text-sm">Auch wenn nicht — wir finden eine Lösung.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-red text-white font-semibold rounded-md hover:bg-brand-red-hover transition-colors text-sm"
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
