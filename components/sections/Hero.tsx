"use client";

import Link from "next/link";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const bullets = [
  "Kein Wasser. Keine Chemie. Keine Rückstände.",
  "Eigenproduktion von Trockeneis",
  "ISO 9001 zertifiziert · Bundesweit tätig",
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-navy-950 overflow-hidden pt-16">

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(oklch(100% 0 0) 1px, transparent 1px),
                            linear-gradient(90deg, oklch(100% 0 0) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Diagonal accent line */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            oklch(100% 0 0),
            oklch(100% 0 0) 1px,
            transparent 1px,
            transparent 48px
          )`,
        }}
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/98 to-navy-800/70" />

      {/* Ice glow blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-ice-500/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-ice-400/4 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ice-500/15 border border-ice-500/25 text-ice-300 text-xs font-medium mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-400 animate-pulse" />
              ISO 9001 zertifiziert · Zossen bei Berlin
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-7"
          >
            Sauber.
            <br />
            <span className="text-ice-400">Ohne Chemie.</span>
            <br />
            Ohne Stillstand.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-base sm:text-lg text-steel-300 leading-relaxed mb-8 max-w-lg"
          >
            ISC reinigt Industrieanlagen mit Trockeneis, Sand, Soda und Sponge-Jet.
            Schonend, rückstandsfrei, bundesweit. Maschinen bleiben in Betrieb.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="space-y-2 mb-10"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-steel-300">
                <CheckCircle size={14} className="text-ice-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm"
            >
              Kostenloses Angebot anfragen
              <ArrowRight size={15} />
            </Link>
            <a
              href="tel:+493377202730"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/15 text-white/90 font-medium rounded-md hover:bg-white/8 transition-colors text-sm"
            >
              <Phone size={14} />
              03377 202730
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
