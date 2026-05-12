"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/lib/data/faq";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-steel-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-black text-navy-950 leading-tight">
            Häufige Fragen.
          </h2>
          <p className="mt-4 text-steel-600 leading-relaxed">
            Alles Wichtige zum Trockeneisstrahlen – von der Technik bis zum Einsatz.
          </p>
        </div>

        <div className="max-w-3xl space-y-2">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-steel-200 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-navy-900 text-sm leading-snug">
                  {item.frage}
                </span>
                <ChevronDown
                  size={16}
                  className={`text-steel-400 flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-steel-600 leading-relaxed">{item.antwort}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
