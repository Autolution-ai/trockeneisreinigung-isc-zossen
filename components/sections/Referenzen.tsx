"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { referenzen } from "@/lib/data/referenzen";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";

export default function Referenzen() {
  return (
    <section id="referenzen" className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            Referenzen
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
            Ergebnisse, die überzeugen.
          </h2>
          <p className="mt-4 text-steel-600 leading-relaxed">
            Schieben Sie den Regler und sehen Sie den Unterschied.
            Echte Reinigungsergebnisse aus unseren Projekten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {referenzen.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden border border-steel-200"
            >
              <BeforeAfterSlider
                vorher={item.vorher}
                nachher={item.nachher}
                alt={item.titel}
              />
              <div className="p-4">
                <span className="text-xs font-semibold text-ice-500 uppercase tracking-wider">
                  {item.branche}
                </span>
                <h3 className="font-bold text-navy-900 mt-1 mb-1">{item.titel}</h3>
                <p className="text-xs text-steel-500 leading-relaxed">{item.beschreibung}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
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
