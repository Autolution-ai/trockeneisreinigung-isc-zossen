"use client";

import Link from "next/link";
import { ArrowRight, Droplets, Leaf, Wrench, Sparkles, Shield, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { vorteile } from "@/lib/data/vorteile";

const iconMap: Record<string, React.ElementType> = {
  Droplets, Leaf, Wrench, Sparkles, Shield, CheckCircle,
};

export default function Vorteile() {
  return (
    <section id="vorteile" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            Vorteile
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
            Warum Trockeneis?
          </h2>
          <p className="mt-4 text-steel-600 leading-relaxed">
            Das Trockeneisstrahlen ist die modernste Reinigungsmethode für Industrie und
            Gewerbe. Sechs entscheidende Vorteile gegenüber herkömmlichen Verfahren.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vorteile.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.titel}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-navy-950 flex items-center justify-center flex-shrink-0 mt-0.5">
                  {Icon && <Icon size={18} className="text-ice-400" />}
                </div>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1">{item.titel}</h3>
                  <p className="text-sm text-steel-600 leading-relaxed">{item.beschreibung}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-14 p-8 bg-navy-950 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-black text-white mb-2">
              Bereit für saubere Ergebnisse?
            </h3>
            <p className="text-steel-400 text-sm">
              Kontaktieren Sie uns für ein kostenloses Angebot.
            </p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm flex-shrink-0"
          >
            Jetzt anfragen
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
