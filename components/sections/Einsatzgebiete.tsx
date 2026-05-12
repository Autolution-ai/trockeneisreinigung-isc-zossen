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
    <section id="einsatzgebiete" className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            Einsatzgebiete
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
            Wo wir reinigen.
          </h2>
          <p className="mt-4 text-steel-600 leading-relaxed">
            Trockeneisstrahlen funktioniert in nahezu jeder Branche: Lebensmittel,
            Pharma, KFZ, Druckerei, Brandschaden, Fassade und mehr.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {einsatzgebiete.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.titel}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="bg-white rounded-xl p-5 border border-steel-200 hover:border-ice-300 hover:shadow-sm transition-all group"
              >
                <div className="w-9 h-9 rounded-lg bg-ice-100 flex items-center justify-center mb-3 group-hover:bg-ice-500 transition-colors">
                  {Icon && (
                    <Icon size={17} className="text-ice-500 group-hover:text-white transition-colors" />
                  )}
                </div>
                <h3 className="text-sm font-bold text-navy-900 mb-1">{item.titel}</h3>
                <p className="text-xs text-steel-500 leading-relaxed">{item.beschreibung}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/einsatzgebiete"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ice-500 hover:text-ice-400 transition-colors"
          >
            Alle Einsatzgebiete ansehen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
