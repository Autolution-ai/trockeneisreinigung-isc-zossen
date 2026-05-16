"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  { label: "Referenzen", href: "/referenzen" },
  { label: "Verkauf", href: "/verkauf" },
  { label: "Vermietung", href: "/vermietung" },
  { label: "Service", href: "/service" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md border-b border-white/8"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-7 h-7 bg-ice-500 flex items-center justify-center rounded-sm">
              <span className="text-white text-[10px] font-black tracking-tight leading-none">ISC</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-white leading-none">
                ISC GmbH
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-steel-400 hover:text-white transition-colors rounded-sm hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+493377202730"
              className="flex items-center gap-1.5 text-sm font-medium text-steel-400 hover:text-white transition-colors"
            >
              <Phone size={13} />
              03377 202730
            </a>
            <Link
              href="/kontakt"
              className="px-4 py-2 bg-brand-red text-white text-sm font-semibold rounded-sm hover:bg-brand-red-hover transition-colors tracking-wide"
            >
              Anfragen
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-steel-300 hover:text-white transition-colors"
            aria-label="Menü öffnen"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/8 bg-navy-950/98 backdrop-blur-md">
          <div className="px-4 py-4 space-y-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-steel-300 hover:text-white hover:bg-white/5 rounded-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/8 flex flex-col gap-2 mt-2">
              <a
                href="tel:+493377202730"
                className="flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-steel-300"
              >
                <Phone size={14} />
                03377 202730
              </a>
              <Link
                href="/kontakt"
                onClick={() => setOpen(false)}
                className="block px-4 py-3 bg-brand-red text-white text-sm font-semibold rounded-sm text-center"
              >
                Kostenloses Angebot anfragen
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
