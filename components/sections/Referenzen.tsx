"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { referenzen } from "@/lib/data/referenzen";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Referenzen
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-navy-950 leading-[0.95] tracking-tight">
              Ergebnisse,
              <br />
              die überzeugen.
            </h2>
          </div>
          <p className="text-steel-500 text-sm max-w-xs sm:text-right leading-relaxed">
            Schieben Sie den Regler und sehen Sie den Unterschied.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {referenzen.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-sm border border-steel-150"
            >
              <BeforeAfterSlider
                vorher={item.vorher}
                nachher={item.nachher}
                alt={item.titel}
              />
              <div className="p-4 border-t border-steel-100">
                <span className="text-[10px] font-bold text-ice-500 uppercase tracking-widest">
                  {item.branche}
                </span>
                <h3 className="font-bold text-navy-900 mt-1 text-sm">{item.titel}</h3>
                <p className="text-xs text-steel-500 leading-relaxed mt-0.5">{item.beschreibung}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/referenzen"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ice-500 hover:text-ice-400 transition-colors"
          >
            Alle Referenzen ansehen
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
