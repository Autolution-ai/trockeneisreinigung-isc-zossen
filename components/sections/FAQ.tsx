"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">

          {/* Left label */}
          <div className="lg:sticky lg:top-24">
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-2 font-display text-4xl font-black text-navy-950 leading-[0.95] tracking-tight">
              Häufige
              <br />
              Fragen.
            </h2>
            <p className="mt-4 text-sm text-steel-500 leading-relaxed max-w-xs">
              Alles zu Technik, Verfahren, Branchen und Ablauf.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-0 divide-y divide-steel-100">
            {faqItems.map((item, i) => (
              <div key={i}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className={`font-semibold text-sm leading-snug transition-colors ${
                    open === i ? "text-ice-600" : "text-navy-900 group-hover:text-navy-700"
                  }`}>
                    {item.frage}
                  </span>
                  <div className={`w-6 h-6 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                    open === i ? "bg-brand-red text-white" : "bg-steel-100 text-steel-400"
                  }`}>
                    {open === i ? <Minus size={13} /> : <Plus size={13} />}
                  </div>
                </button>

                {open === i && (
                  <div className="pb-5 pl-0">
                    <p className="text-sm text-steel-600 leading-relaxed border-l-2 border-ice-400 pl-4">
                      {item.antwort}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
