"use client";

import Link from "next/link";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DryIceFog from "./DryIceFog";

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

const VIDEO_SRC = "/dry-ice-fog.mp4";

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ramp = (v: number, a: number, b: number) =>
  clamp01((v - a) / (b - a));

export default function Hero() {
  const wrapperRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    let raf = 0;
    let lastProgress = -1;

    const update = () => {
      raf = 0;
      const section = wrapperRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      const progress = clamp01(-rect.top / Math.max(1, scrollable));
      if (Math.abs(progress - lastProgress) < 0.001) return;
      lastProgress = progress;

      // Video scrub
      const v = videoRef.current;
      if (v && v.readyState >= 2 && v.duration && !isNaN(v.duration)) {
        const t = Math.min(progress, 0.999) * v.duration;
        if (Math.abs(v.currentTime - t) > 0.03) v.currentTime = t;
      }

      // Content fade + lift
      const c = contentRef.current;
      if (c) {
        const op = 1 - ramp(progress, 0.55, 0.85);
        const y = lerp(0, -60, ramp(progress, 0, 0.85));
        c.style.opacity = String(op);
        c.style.transform = `translateY(${y}px)`;
      }

      // Overlay deepening
      const o = overlayRef.current;
      if (o) {
        const op = lerp(0.45, 0.75, progress);
        o.style.opacity = String(op);
      }

      // Hint fade
      const h = hintRef.current;
      if (h) {
        const op = 1 - ramp(progress, 0, 0.2);
        h.style.opacity = String(op);
      }
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={wrapperRef}
      className="relative bg-void"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-void">
        {!videoFailed && (
          <video
            ref={videoRef}
            src={VIDEO_SRC}
            muted
            playsInline
            preload="auto"
            onError={() => setVideoFailed(true)}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            aria-hidden
          />
        )}

        {videoFailed && <DryIceFog />}

        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(85% 0.012 228) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-ice-500/8 blur-[120px] pointer-events-none" />

        <div
          ref={overlayRef}
          className="absolute inset-0 bg-void pointer-events-none"
          style={{ opacity: 0.45 }}
        />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-void to-transparent pointer-events-none" />

        <div
          ref={contentRef}
          className="relative h-full flex flex-col pt-16"
          style={{ opacity: 1, transform: "translateY(0px)" }}
        >
          <div className="flex-1 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
              <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
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

                  <motion.p
                    {...fade(0.2)}
                    className="text-lg text-steel-300 leading-relaxed mb-10 max-w-lg"
                  >
                    Trockeneisreinigung, Sandstrahlen und Sponge-Jet für Industrie und Gewerbe.
                    Rückstandsfrei. Ohne Demontage. Bundesweit.
                  </motion.p>

                  <motion.div {...fade(0.3)} className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/kontakt"
                      className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-brand-red text-white font-bold rounded-sm hover:bg-brand-red-hover transition-colors text-sm tracking-wide"
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

                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, ease }}
                  className="hidden lg:flex flex-col items-center gap-2"
                >
                  <div className="relative w-48 h-48 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border border-ice-500/15" />
                    <div className="absolute inset-6 rounded-full border border-ice-500/20" />
                    <div className="absolute inset-12 rounded-full border border-ice-500/30" />
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="relative border-t border-white/6 bg-void/40 backdrop-blur-sm"
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
        </div>

        <div
          ref={hintRef}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ice-400/80 pointer-events-none"
          style={{ opacity: 1 }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={18} strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
