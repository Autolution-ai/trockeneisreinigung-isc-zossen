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

type CardCfg = {
  span: string;
  rowSpan?: string;
  tone: Tone;
  image: string;
  imageFocus?: string; // object-position
  cta: string;
};

// 4-col grid · 3 rows · all cells filled
//  Row 1: [Trockeneis 2×2          ] [Sandstrahlen 2×1   ]
//  Row 2: [Trockeneis cont.        ] [Soda 1×1][Sponge 1×1]
//  Row 3: [Verkauf 2×1   ] [Vermietung 2×1]
const layout: CardCfg[] = [
  {
    span: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
    tone: "dark",
    image: "/leistungen/motor.jpg",
    imageFocus: "object-right",
    cta: "Verfahren ansehen",
  },
  {
    span: "lg:col-span-2",
    tone: "dark",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1400&q=80",
    imageFocus: "object-center",
    cta: "Mehr erfahren",
  },
  {
    span: "lg:col-span-1",
    tone: "light",
    image: "/leistungen/restauration.jpg",
    imageFocus: "object-right",
    cta: "Mehr erfahren",
  },
  {
    span: "lg:col-span-1",
    tone: "dark",
    image: "/leistungen/kleber.jpg",
    imageFocus: "object-right",
    cta: "Mehr erfahren",
  },
  {
    span: "lg:col-span-2",
    tone: "dark",
    image:
      "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1400&q=80",
    imageFocus: "object-center",
    cta: "Zum Verkauf",
  },
  {
    span: "lg:col-span-2",
    tone: "ice",
    image:
      "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=1400&q=80",
    imageFocus: "object-center",
    cta: "Zur Vermietung",
  },
];

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

            const iconBg = dark
              ? "bg-white/15 group-hover:bg-brand-red"
              : ice
                ? "bg-white/25 group-hover:bg-brand-red"
                : "bg-white/90 group-hover:bg-brand-red";
            const iconColor = dark
              ? "text-white group-hover:text-white"
              : ice
                ? "text-white"
                : "text-navy-950 group-hover:text-white";
            const titleColor = "text-white";
            const subColor = "text-white/85";
            const indexColor = dark
              ? "text-white/40"
              : ice
                ? "text-white/70"
                : "text-white/70";
            const ctaColor = "text-white";

            // Overlay strength — different tints per tone
            const overlay = dark
              ? "from-navy-950 via-navy-950/85 to-navy-950/50"
              : ice
                ? "from-ice-600 via-ice-600/80 to-ice-500/40"
                : "from-navy-950/90 via-navy-950/70 to-navy-950/30";

            const isFlagship = !!cfg.rowSpan;

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
                  className="group relative block overflow-hidden rounded-2xl h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cfg.image}
                    alt=""
                    aria-hidden
                    className={`absolute inset-0 w-full h-full object-cover ${cfg.imageFocus ?? "object-center"} transition-transform duration-700 group-hover:scale-105`}
                  />

                  {/* Tinted gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${overlay}`}
                  />

                  {/* Content */}
                  <div className="relative h-full p-6 sm:p-7 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm ${iconBg}`}
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

                    <div>
                      <h3
                        className={`font-display font-black tracking-tight leading-[1.05] drop-shadow-sm ${titleColor} ${isFlagship ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl"}`}
                      >
                        {item.titel}
                      </h3>
                      <p
                        className={`mt-3 leading-relaxed drop-shadow-sm ${subColor} ${isFlagship ? "text-base max-w-md" : "text-sm line-clamp-2"}`}
                      >
                        {item.kurz}
                      </p>

                      <div
                        className={`mt-5 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest ${ctaColor}`}
                      >
                        <span>{cfg.cta}</span>
                        <ArrowUpRight
                          size={14}
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Red glow on hover */}
                  <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-brand-red transition-all pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-steel-500 text-center">
          → Jede Karte ist klickbar und führt zur detaillierten Leistungsbeschreibung
        </p>
      </div>
    </section>
  );
}
