"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Phone,
  Factory,
  Car,
  UtensilsCrossed,
  Printer,
  Building2,
  Flame,
  Zap,
  FlaskConical,
  Anchor,
  Trees,
  Thermometer,
  Boxes,
  Play,
  Pause,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { einsatzgebiete } from "@/lib/data/einsatzgebiete";

const iconMap: Record<string, React.ElementType> = {
  Factory, Car, UtensilsCrossed, Printer, Building2, Flame,
  Zap, FlaskConical, Anchor, Trees, Thermometer, Boxes,
};

// Image per branch — mix of official ISC photos and curated Unsplash
const branchImages: Record<string, string> = {
  "Industrie & Produktion":
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&q=85",
  "KFZ & Oldtimer": "/leistungen/motor.jpg",
  "Lebensmittelindustrie":
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=85",
  "Druckereien":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85",
  "Fassaden & Denkmalschutz": "/leistungen/mauerwerk.jpg",
  "Brandschadensanierung":
    "https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?w=1600&q=85",
  "Elektromechanik":
    "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1600&q=85",
  "Pharmaindustrie":
    "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1600&q=85",
  "Boots- & Schiffsreinigung":
    "https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=1600&q=85",
  "Holz & Restaurierung": "/leistungen/restauration.jpg",
  "Kühlhäuser":
    "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1600&q=85",
  "Kunststoffindustrie": "/leistungen/kleber.jpg",
};

const ROTATE_MS = 5000;

export default function Einsatzgebiete() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => {
      setActive((a) => (a + 1) % einsatzgebiete.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused]);

  // Scroll active item into view on the list
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [active]);

  const current = einsatzgebiete[active];
  const CurrentIcon = iconMap[current.icon];

  return (
    <section id="einsatzgebiete" className="py-24 bg-navy-950 overflow-hidden relative">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold text-ice-400 uppercase tracking-widest">
              Einsatzgebiete
            </span>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl font-black text-white leading-[0.95] tracking-tight">
              Zwölf Branchen.<br />
              <span className="text-brand-red">Ein Verfahren.</span>
            </h2>
            <p className="mt-5 text-steel-400 max-w-md leading-relaxed">
              Klicken Sie eine Branche an – oder lassen Sie die Tour automatisch laufen.
            </p>
          </div>

          <button
            onClick={() => setPaused((p) => !p)}
            className="inline-flex items-center gap-2 px-4 py-2 border border-white/15 text-white text-xs font-semibold rounded-sm hover:border-white/40 transition-colors self-start sm:self-auto"
          >
            {paused ? <Play size={12} /> : <Pause size={12} />}
            {paused ? "Tour starten" : "Tour pausieren"}
          </button>
        </div>

        {/* Split layout: Image + List */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-8">
          {/* Featured image panel */}
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative h-[440px] lg:h-[560px] rounded-2xl overflow-hidden bg-navy-900"
          >
            {/* Crossfading images */}
            {einsatzgebiete.map((b, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={b.titel}
                src={branchImages[b.titel] ?? "/leistungen/motor.jpg"}
                alt=""
                aria-hidden
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
              />
            ))}

            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-navy-950/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/40 via-transparent to-transparent" />

            {/* Progress bar (auto-rotation indicator) */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10">
              <div
                key={`${active}-${paused}`}
                className="h-full bg-brand-red"
                style={{
                  width: paused ? "0%" : "100%",
                  transition: paused ? "none" : `width ${ROTATE_MS}ms linear`,
                }}
              />
            </div>

            {/* Index badge */}
            <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="font-display text-xs font-black tracking-widest text-white">
                {String(active + 1).padStart(2, "0")} / {String(einsatzgebiete.length).padStart(2, "0")}
              </span>
            </div>

            {/* Content overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div
                key={active}
                className="motion-reduce:animate-none animate-[fadeUp_500ms_ease-out]"
                style={{ animation: "fadeUp 500ms cubic-bezier(0.22, 1, 0.36, 1)" }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-brand-red flex items-center justify-center">
                    {CurrentIcon && <CurrentIcon size={17} className="text-white" />}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ice-300">
                    Branche
                  </span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.05]">
                  {current.titel}
                </h3>
                <p className="mt-4 text-steel-300 leading-relaxed max-w-xl">
                  {current.beschreibung}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-red text-white font-semibold rounded-sm hover:bg-brand-red-hover transition-colors text-sm"
                  >
                    Diese Branche anfragen
                    <ArrowUpRight size={14} />
                  </Link>
                  <a
                    href="tel:+493377202730"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white font-semibold rounded-sm hover:bg-white/10 transition-colors text-sm"
                  >
                    <Phone size={13} />
                    03377 202730
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive list */}
          <div
            ref={listRef}
            className="lg:max-h-[560px] lg:overflow-y-auto pr-1 -mr-1 scrollbar-thin"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="space-y-1.5">
              {einsatzgebiete.map((b, i) => {
                const Icon = iconMap[b.icon];
                const isActive = i === active;
                return (
                  <button
                    key={b.titel}
                    data-idx={i}
                    onClick={() => setActive(i)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-lg border transition-all duration-200 ${
                      isActive
                        ? "bg-white border-white text-navy-950 shadow-lg"
                        : "bg-white/[0.03] border-white/10 text-white hover:bg-white/8 hover:border-white/20"
                    }`}
                  >
                    <span
                      className={`font-display text-[10px] font-black tracking-widest flex-shrink-0 w-6 ${
                        isActive ? "text-brand-red" : "text-steel-500"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                        isActive ? "bg-brand-red text-white" : "bg-white/10 text-ice-400"
                      }`}
                    >
                      {Icon && <Icon size={15} />}
                    </div>
                    <span
                      className={`flex-1 text-sm font-semibold leading-tight ${
                        isActive ? "text-navy-950" : "text-white"
                      }`}
                    >
                      {b.titel}
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`flex-shrink-0 transition-all ${
                        isActive
                          ? "text-brand-red translate-x-0"
                          : "text-steel-500 -translate-x-1 opacity-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile dot navigation */}
        <div className="mt-6 lg:hidden flex items-center justify-center gap-2">
          {einsatzgebiete.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Branche ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-brand-red" : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 border border-white/10 rounded-xl bg-white/[0.03]">
          <p className="text-steel-300 text-sm leading-relaxed">
            <span className="text-white font-semibold">Branche nicht dabei?</span> Trockeneisstrahlen
            funktioniert fast überall – sprechen Sie uns an.
          </p>
          <Link
            href="/einsatzgebiete"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-950 text-sm font-semibold rounded-sm hover:bg-steel-100 transition-colors flex-shrink-0"
          >
            Alle Branchen ansehen
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
