"use client";

import Link from "next/link";
import { ArrowRight, Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package } from "lucide-react";
import { motion } from "framer-motion";
import { leistungen } from "@/lib/data/leistungen";

const iconMap: Record<string, React.ElementType> = {
  Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package,
};

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Leistungen
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-navy-950 leading-[0.95] tracking-tight">
              Alles aus einer Hand.
            </h2>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-950 text-white text-sm font-semibold rounded-sm hover:bg-navy-800 transition-colors self-start sm:self-auto flex-shrink-0"
          >
            Angebot anfragen
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="divide-y divide-steel-100">
          {leistungen.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={item.href}
                  className="group flex items-center gap-6 py-6 hover:bg-steel-50 -mx-4 px-4 sm:-mx-6 sm:px-6 transition-colors"
                >
                  <span className="font-display text-sm font-black text-steel-300 w-8 flex-shrink-0 group-hover:text-ice-400 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="w-10 h-10 rounded-sm bg-steel-100 flex items-center justify-center flex-shrink-0 group-hover:bg-ice-500 transition-colors">
                    {Icon && (
                      <Icon size={18} className="text-steel-500 group-hover:text-white transition-colors" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-navy-900 group-hover:text-ice-600 transition-colors">
                      {item.titel}
                    </h3>
                    <p className="text-sm text-steel-500 leading-relaxed mt-0.5 line-clamp-1">
                      {item.kurz}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="text-steel-300 group-hover:text-ice-500 transition-all group-hover:translate-x-1 flex-shrink-0"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
