"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Snowflake,
  Wind,
  Sparkles,
  Layers,
  ShoppingCart,
  Package,
} from "lucide-react";
import { motion } from "framer-motion";
import { leistungen } from "@/lib/data/leistungen";

const iconMap: Record<string, React.ElementType> = {
  Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package,
};

type Tone = "dark" | "ice" | "light";
type Pattern = "pellets" | "diagonals" | "rings" | "mesh" | "stack" | "duration";

const layout: { span: string; rowSpan?: string; tone: Tone; pattern: Pattern; cta: string }[] = [
  // Trockeneisreinigung — flagship
  { span: "lg:col-span-2", rowSpan: "lg:row-span-2", tone: "dark", pattern: "pellets", cta: "Verfahren ansehen" },
  // Sandstrahlen
  { span: "lg:col-span-1", tone: "ice", pattern: "diagonals", cta: "Mehr erfahren" },
  // Soda-Strahlen
  { span: "lg:col-span-1", tone: "light", pattern: "rings", cta: "Mehr erfahren" },
  // Sponge-Jet
  { span: "lg:col-span-2", tone: "dark", pattern: "mesh", cta: "Verfahren ansehen" },
  // Verkauf
  { span: "lg:col-span-1", tone: "light", pattern: "stack", cta: "Zum Verkauf" },
  // Vermietung
  { span: "lg:col-span-1", tone: "ice", pattern: "duration", cta: "Zur Vermietung" },
];

function Pattern({ kind, tone }: { kind: Pattern; tone: Tone }) {
  const dark = tone === "dark";
  const ice = tone === "ice";
  const color = dark
    ? "rgba(255,255,255,0.18)"
    : ice
      ? "rgba(255,255,255,0.4)"
      : "oklch(85% 0.012 228)";

  if (kind === "pellets") {
    return (
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${color} 1.4px, transparent 1.7px)`,
          backgroundSize: "26px 26px",
        }}
      />
    );
  }
  if (kind === "diagonals") {
    return (
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${color} 0 1px, transparent 1px 14px)`,
        }}
      />
    );
  }
  if (kind === "rings") {
    return (
      <div className="absolute inset-0 opacity-50 pointer-events-none overflow-hidden">
        <div
          className="absolute -bottom-20 -right-12 w-80 h-80 rounded-full border"
          style={{ borderColor: color }}
        />
        <div
          className="absolute -bottom-10 -right-4 w-48 h-48 rounded-full border"
          style={{ borderColor: color }}
        />
      </div>
    );
  }
  if (kind === "mesh") {
    return (
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
    );
  }
  if (kind === "stack") {
    return (
      <div className="absolute right-5 bottom-5 flex flex-col gap-1.5 opacity-30 pointer-events-none">
        {["IceTech", "Schmidt", "KAESER"].map((b) => (
          <div
            key={b}
            className="font-display text-[11px] font-black tracking-tight text-navy-950"
          >
            {b}
          </div>
        ))}
      </div>
    );
  }
  if (kind === "duration") {
    return (
      <div className="absolute right-5 bottom-5 grid grid-cols-5 gap-1 opacity-50 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-[2px] ${i < 5 ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    );
  }
  return null;
}

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Leistungen
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-navy-950 leading-[0.95] tracking-tight">
              Sechs Verfahren.<br />
              <span className="text-brand-red">Ein Partner.</span>
            </h2>
            <p className="mt-5 text-steel-600 max-w-md leading-relaxed">
              Klicken Sie auf eine Leistung für Details, Spezifikationen und Einsatzbereiche.
            </p>
          </div>
          <Link
            href="/leistungen"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy-950 text-navy-950 text-sm font-semibold rounded-sm hover:bg-navy-950 hover:text-white transition-colors self-start sm:self-auto flex-shrink-0"
          >
            Alle Leistungen
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[15rem] gap-3">
          {leistungen.map((item, i) => {
            const Icon = iconMap[item.icon];
            const cfg = layout[i];
            const dark = cfg.tone === "dark";
            const ice = cfg.tone === "ice";

            const bg = dark
              ? "bg-navy-950"
              : ice
                ? "bg-ice-500"
                : "bg-white border border-steel-200";

            const titleColor = dark || ice ? "text-white" : "text-navy-950";
            const subColor = dark ? "text-steel-300" : ice ? "text-white/90" : "text-steel-600";
            const indexColor = dark ? "text-white/30" : ice ? "text-white/60" : "text-steel-300";
            const iconBg = dark
              ? "bg-white/10 group-hover:bg-brand-red"
              : ice
                ? "bg-white/20 group-hover:bg-brand-red"
                : "bg-steel-100 group-hover:bg-brand-red";
            const iconColor = dark
              ? "text-ice-400 group-hover:text-white"
              : ice
                ? "text-white"
                : "text-navy-950 group-hover:text-white";
            const ctaColor = dark
              ? "text-ice-400 group-hover:text-white"
              : ice
                ? "text-white"
                : "text-brand-red";

            const isFlagship = cfg.rowSpan;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className={`${cfg.span} ${cfg.rowSpan ?? ""}`}
              >
                <Link
                  href={item.href}
                  className={`group relative overflow-hidden rounded-2xl p-6 sm:p-7 flex flex-col justify-between h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${bg}`}
                >
                  <Pattern kind={cfg.pattern} tone={cfg.tone} />

                  {/* Top row: icon + index */}
                  <div className="relative flex items-start justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${iconBg}`}
                    >
                      {Icon && (
                        <Icon size={22} className={`transition-colors ${iconColor}`} />
                      )}
                    </div>
                    <span
                      className={`font-display text-xs font-black tracking-widest ${indexColor}`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="relative mt-6">
                    <h3
                      className={`font-display font-black tracking-tight leading-[1.05] ${titleColor} ${isFlagship ? "text-3xl sm:text-4xl" : "text-xl"}`}
                    >
                      {item.titel}
                    </h3>
                    <p
                      className={`mt-3 leading-relaxed ${subColor} ${isFlagship ? "text-base max-w-md" : "text-sm line-clamp-2"}`}
                    >
                      {item.kurz}
                    </p>

                    {/* Click CTA — always visible */}
                    <div
                      className={`mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-all ${ctaColor}`}
                    >
                      <span>{cfg.cta}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>

                  {/* Hover border accent — red glow signaling click */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-brand-red/50 transition-all pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Footer hint */}
        <p className="mt-6 text-xs text-steel-500 text-center">
          → Jede Karte ist klickbar und führt zur detaillierten Leistungsbeschreibung
        </p>
      </div>
    </section>
  );
}
