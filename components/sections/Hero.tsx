"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { wert: "−79 °C", label: "CO₂-Temperatur" },
  { wert: "0", label: "Chemikalien" },
  { wert: "ISO 9001", label: "Zertifiziert" },
];

const ease = [0.22, 1, 0.36, 1] as const;

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-void overflow-hidden pt-16">

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, oklch(85% 0.012 228) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ice glow — top right */}
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-ice-500/8 blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">

            {/* Left — copy */}
            <div className="max-w-2xl">
              <motion.div {...fade(0)}>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-ice-400 uppercase tracking-widest mb-8">
                  <span className="w-4 h-px bg-ice-500" />
                  ISC Industrie-Service-Czech GmbH · Zossen bei Berlin
                </span>
              </motion.div>

              <motion.h1
                {...fade(0.1)}
                className="font-display text-[clamp(3rem,7vw,5.5rem)] font-black text-white leading-[0.92] tracking-tighter mb-8"
              >
                Maschinen
                <br />
                <span className="text-ice-400">laufen weiter.</span>
                <br />
                Anlagen sauber.
              </motion.h1>

              <motion.p {...fade(0.2)} className="text-lg text-steel-300 leading-relaxed mb-10 max-w-lg">
                Trockeneisreinigung, Sandstrahlen und Sponge-Jet für Industrie und Gewerbe.
                Rückstandsfrei. Ohne Demontage. Bundesweit.
              </motion.p>

              <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-ice-500 text-white font-bold rounded-sm hover:bg-ice-400 transition-colors text-sm tracking-wide"
                >
                  Kostenloses Angebot
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="tel:+493377202730"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/12 text-white/80 font-medium rounded-sm hover:border-white/30 hover:text-white transition-colors text-sm"
                >
                  <Phone size={14} />
                  03377 202730
                </a>
              </motion.div>
            </div>

            {/* Right — temperature graphic (desktop only) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex flex-col items-center gap-2"
            >
              <div className="relative w-48 h-48 flex items-center justify-center">
                {/* Rings */}
                <div className="absolute inset-0 rounded-full border border-ice-500/15" />
                <div className="absolute inset-6 rounded-full border border-ice-500/20" />
                <div className="absolute inset-12 rounded-full border border-ice-500/30" />
                {/* Center value */}
                <div className="text-center relative z-10">
                  <div className="font-display text-4xl font-black text-ice-400 leading-none">−79</div>
                  <div className="text-ice-300/70 text-sm font-medium mt-1">°C CO₂</div>
                </div>
              </div>
              <p className="text-xs text-steel-500 text-center max-w-[10rem] leading-snug">
                Trockeneis sublimiert rückstandsfrei
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="relative border-t border-white/6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3">
            {stats.map(({ wert, label }, i) => (
              <div
                key={label}
                className={`py-6 flex flex-col items-center text-center ${
                  i < 2 ? "border-r border-white/6" : ""
                }`}
              >
                <span className="font-display text-xl sm:text-2xl font-black text-white">{wert}</span>
                <span className="text-xs text-steel-500 mt-1 uppercase tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
