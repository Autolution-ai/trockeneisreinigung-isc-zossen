"use client";

import Link from "next/link";
import { ArrowRight, Factory, Car, UtensilsCrossed, Printer, Building2, Flame, Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes } from "lucide-react";
import { motion } from "framer-motion";
import { einsatzgebiete } from "@/lib/data/einsatzgebiete";

const iconMap: Record<string, React.ElementType> = {
  Factory, Car, UtensilsCrossed, Printer, Building2, Flame,
  Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes,
};

export default function Einsatzgebiete() {
  return (
    <section id="einsatzgebiete" className="py-24 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Einsatzgebiete
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-white leading-[0.95] tracking-tight">
              Von Industrie
              <br />
              bis Oldtimer.
            </h2>
          </div>
          <p className="text-steel-400 max-w-xs text-sm leading-relaxed sm:text-right">
            Trockeneisstrahlen funktioniert in nahezu jeder Branche.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {einsatzgebiete.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.titel}
                variants={{
                  hidden: { opacity: 0, scale: 0.88 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
                }}
                className="group flex items-center gap-2.5 px-4 py-2.5 border border-white/10 rounded-full hover:border-ice-500/50 hover:bg-ice-500/8 transition-all cursor-default"
              >
                {Icon && (
                  <Icon size={14} className="text-ice-500 flex-shrink-0" />
                )}
                <span className="text-sm font-medium text-steel-300 group-hover:text-white transition-colors whitespace-nowrap">
                  {item.titel}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12">
          <Link
            href="/einsatzgebiete"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ice-400 hover:text-ice-300 transition-colors"
          >
            Alle Branchen ansehen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
