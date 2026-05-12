"use client";

import Link from "next/link";
import { ArrowRight, Snowflake, Wind, Sparkles, Layers, ShoppingCart, Package } from "lucide-react";
import { motion } from "framer-motion";
import { leistungen } from "@/lib/data/leistungen";

const iconMap: Record<string, React.ElementType> = {
  Snowflake,
  Wind,
  Sparkles,
  Layers,
  ShoppingCart,
  Package,
};

export default function Leistungen() {
  return (
    <section id="leistungen" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            Leistungen
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
            Alles aus einer Hand.
          </h2>
          <p className="mt-4 text-steel-600 leading-relaxed">
            Trockeneisreinigung, Sandstrahlen, Soda, Sponge-Jet, Maschinenverkauf und
            Vermietung. Das breiteste Strahlverfahren-Portfolio in der Region.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {leistungen.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link
                  href={item.href}
                  className={`group block p-6 rounded-xl border transition-all hover:shadow-md hover:-translate-y-0.5 ${
                    item.highlight
                      ? "border-ice-300 bg-gradient-to-br from-navy-950 to-navy-800 text-white"
                      : "border-steel-200 bg-white hover:border-ice-300"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      item.highlight
                        ? "bg-ice-500/20"
                        : "bg-steel-100 group-hover:bg-ice-100 transition-colors"
                    }`}
                  >
                    {Icon && (
                      <Icon
                        size={20}
                        className={item.highlight ? "text-ice-300" : "text-steel-600 group-hover:text-ice-500 transition-colors"}
                      />
                    )}
                  </div>
                  <h3
                    className={`font-bold mb-2 ${
                      item.highlight ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {item.titel}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      item.highlight ? "text-steel-300" : "text-steel-600"
                    }`}
                  >
                    {item.kurz}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold ${
                      item.highlight ? "text-ice-300" : "text-ice-500"
                    }`}
                  >
                    Mehr erfahren
                    <ArrowRight size={12} />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white font-semibold rounded-md hover:bg-navy-800 transition-colors text-sm"
          >
            Kostenloses Angebot anfragen
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
