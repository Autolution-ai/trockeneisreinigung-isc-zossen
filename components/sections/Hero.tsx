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
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900/95 to-navy-800/80" />

      {/* Ice particle effect */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-ice-500/5 blur-3xl" />
      <div className="absolute bottom-1/3 right-1/3 w-64 h-64 rounded-full bg-ice-400/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ice-500/15 border border-ice-500/30 text-ice-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-ice-400 animate-pulse" />
              ISO 9001 zertifiziert · Zossen bei Berlin
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-steel-300 leading-relaxed mb-8 max-w-xl"
          >
            Die ISC Industrie-Service-Czech GmbH reinigt mit Trockeneis, Sand, Soda und
            Sponge-Jet — schonend, rückstandsfrei und bundesweit. Maschinen laufen weiter.
            Produktion steht nicht still.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-2 mb-10"
          >
            {bullets.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-steel-300">
                <CheckCircle size={15} className="text-ice-400 flex-shrink-0" />
                {b}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ice-500 text-white font-semibold rounded-md hover:bg-ice-400 transition-colors text-sm"
            >
              Kostenloses Angebot anfragen
              <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+493377202730"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-md hover:bg-white/10 transition-colors text-sm"
            >
              <Phone size={15} />
              03377 202730
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
