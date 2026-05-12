"use client";

import { motion } from "framer-motion";

const facts = [
  {
    nr: "01",
    titel: "ISO 9001 zertifiziert",
    text: "Unser Qualitätsmanagementsystem ist nach ISO 9001 zertifiziert. Reproduzierbar hohe Reinigungsqualität.",
  },
  {
    nr: "02",
    titel: "Eigenproduktion Trockeneis",
    text: "Wir produzieren Trockeneis selbst. 24/7 verfügbar, in allen gängigen Pelletgrößen.",
  },
  {
    nr: "03",
    titel: "IceTech & KAESER Partner",
    text: "Autorisierter Partner für Strahlanlagen und Kompressoren. Verkauf, Vermietung, Wartung.",
  },
  {
    nr: "04",
    titel: "Bundesweit einsatzbereit",
    text: "Von Zossen bei Berlin aus bedienen wir Kunden in ganz Deutschland. Schnell. Flexibel. Zuverlässig.",
  },
];

export default function UeberUns() {
  return (
    <section id="ueber-uns" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div className="relative">
            <span className="text-xs font-semibold text-ice-500 uppercase tracking-widest">
              Über uns
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="mt-2 font-display text-4xl sm:text-5xl font-black text-navy-950 leading-[0.95] tracking-tight"
            >
              Strahlverfahren.
              <br />
              <span className="text-steel-300">Aus einer Hand.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 text-steel-600 leading-relaxed max-w-sm"
            >
              ISC Industrie-Service-Czech GmbH mit Sitz in Zossen bei Berlin.
              Seit über zehn Jahren auf Trockeneisstrahlen und industrielle Strahlverfahren spezialisiert.
              Das breiteste Portfolio der Region: Reinigung, Verkauf, Vermietung, Eigenproduktion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 gap-px bg-steel-100 border border-steel-100 rounded-sm overflow-hidden"
            >
              {[
                { wert: "10+", label: "Jahre Erfahrung" },
                { wert: "4", label: "Strahlverfahren" },
                { wert: "ISO", label: "9001 zertifiziert" },
                { wert: "24/7", label: "Trockeneis-Produktion" },
              ].map(({ wert, label }) => (
                <div key={label} className="bg-white py-6 px-5">
                  <div className="font-display text-2xl font-black text-navy-950">{wert}</div>
                  <div className="text-xs text-steel-400 mt-1">{label}</div>
                </div>
              ))}
            </motion.div>

            <p className="mt-6 text-xs text-steel-400">
              GF: Henry Czech · An den Wulzen 2-6 · 15806 Zossen
            </p>
          </div>

          {/* Right — numbered facts */}
          <div className="space-y-0 divide-y divide-steel-100">
            {facts.map(({ nr, titel, text }, i) => (
              <motion.div
                key={nr}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex gap-5 py-6"
              >
                <span className="font-display text-xs font-black text-steel-200 mt-0.5 w-6 flex-shrink-0">
                  {nr}
                </span>
                <div>
                  <h3 className="font-bold text-navy-900 mb-1.5">{titel}</h3>
                  <p className="text-sm text-steel-500 leading-relaxed">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
