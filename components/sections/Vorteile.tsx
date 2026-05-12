"use client";

import { motion } from "framer-motion";
import { vorteile } from "@/lib/data/vorteile";
import { Droplets, Leaf, Wrench, Sparkles, Shield, CheckCircle } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Droplets, Leaf, Wrench, Sparkles, Shield, CheckCircle,
};

const bigStats = [
  { wert: "−79 °C", sub: "CO₂-Temperatur" },
  { wert: "0", sub: "Chemikalien, Wasser, Abfall" },
  { wert: "100%", sub: "Rückstandsfrei" },
];

export default function Vorteile() {
  return (
    <section id="vorteile" className="py-24 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            Vorteile
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-navy-950 leading-[0.95] tracking-tight">
            Warum Trockeneis?
          </h2>
        </div>

        {/* Big stats */}
        <div className="grid grid-cols-3 border border-steel-200 rounded-sm mb-16 bg-white overflow-hidden">
          {bigStats.map(({ wert, sub }, i) => (
            <motion.div
              key={sub}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`py-8 px-6 text-center ${i < 2 ? "border-r border-steel-200" : ""}`}
            >
              <div className="font-display text-3xl sm:text-4xl font-black text-navy-950">{wert}</div>
              <div className="text-xs text-steel-500 mt-2 leading-snug">{sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Advantage list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 divide-y divide-steel-200 sm:divide-y-0">
          {vorteile.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.titel}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`flex gap-4 py-5 ${
                  i % 2 === 0 && i < vorteile.length - 1 ? "sm:border-b sm:border-steel-200" : ""
                } ${i < vorteile.length - 2 ? "sm:border-b sm:border-steel-200" : ""}`}
              >
                <div className="w-8 h-8 rounded-sm bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {Icon && <Icon size={15} className="text-ice-400" />}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 text-sm mb-0.5">{item.titel}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed">{item.beschreibung}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
