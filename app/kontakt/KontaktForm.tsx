"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export default function KontaktForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    params.set("subject", `Anfrage von ${data.get("name")} – ISC Website`);
    params.set("body", `Name: ${data.get("name")}\nFirma: ${data.get("firma")}\nTel: ${data.get("tel")}\nNachricht:\n${data.get("nachricht")}`);
    window.location.href = `mailto:info@i-s-c-gmbh.de?${params}`;
    setSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-xl font-bold text-navy-950 mb-8">Direkt erreichbar</h2>
          <div className="space-y-5">
            <a href="tel:+493377202730" className="flex items-start gap-4 p-5 rounded-xl border border-steel-200 hover:border-ice-300 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0 group-hover:bg-ice-500 transition-colors">
                <Phone size={18} className="text-ice-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm text-steel-500 mb-0.5">Telefon</div>
                <div className="font-bold text-navy-900">(03377) 202730</div>
              </div>
            </a>

            <a href="mailto:info@i-s-c-gmbh.de" className="flex items-start gap-4 p-5 rounded-xl border border-steel-200 hover:border-ice-300 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0 group-hover:bg-ice-500 transition-colors">
                <Mail size={18} className="text-ice-500 group-hover:text-white transition-colors" />
              </div>
              <div>
                <div className="text-sm text-steel-500 mb-0.5">E-Mail</div>
                <div className="font-bold text-navy-900">info@i-s-c-gmbh.de</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-steel-200">
              <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} className="text-ice-500" />
              </div>
              <div>
                <div className="text-sm text-steel-500 mb-0.5">Adresse</div>
                <div className="font-bold text-navy-900">An den Wulzen 2–6</div>
                <div className="text-sm text-steel-600">15806 Zossen (bei Berlin)</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-steel-200">
              <div className="w-10 h-10 rounded-lg bg-ice-100 flex items-center justify-center flex-shrink-0">
                <Clock size={18} className="text-ice-500" />
              </div>
              <div>
                <div className="text-sm text-steel-500 mb-0.5">Erreichbarkeit</div>
                <div className="text-sm text-steel-700 space-y-0.5">
                  <div>Mo–Fr: 07:00 – 17:00 Uhr</div>
                  <div className="text-steel-400">Notfälle: Vereinbarung möglich</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 bg-steel-50 rounded-xl">
            <div className="text-sm font-semibold text-navy-900 mb-1">ISC Industrie-Service-Czech GmbH</div>
            <div className="text-xs text-steel-500 leading-relaxed">
              Geschäftsführer: Henry Czech<br />
              HRB 17870P · Amtsgericht Potsdam<br />
              USt-IdNr.: DE 286 285 024
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-navy-950 mb-8">Angebot anfordern</h2>
          {sent ? (
            <div className="p-8 bg-ice-100 rounded-xl text-center">
              <div className="text-2xl mb-2">✓</div>
              <div className="font-bold text-navy-900 mb-1">Nachricht vorbereitet</div>
              <p className="text-sm text-steel-600">
                Ihr E-Mail-Programm hat sich geöffnet. Bitte senden Sie die vorbereitete Nachricht ab.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1.5">Name *</label>
                  <input name="name" required placeholder="Max Mustermann" className="w-full px-4 py-2.5 border border-steel-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-ice-400 transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-navy-900 mb-1.5">Firma</label>
                  <input name="firma" placeholder="Musterfirma GmbH" className="w-full px-4 py-2.5 border border-steel-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-ice-400 transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1.5">Telefon</label>
                <input name="tel" type="tel" placeholder="+49 30 123456" className="w-full px-4 py-2.5 border border-steel-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-ice-400 transition-colors" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-navy-900 mb-1.5">Ihre Anfrage *</label>
                <textarea name="nachricht" required rows={5} placeholder="Was soll gereinigt werden, welche Fläche, welcher Zeitraum?" className="w-full px-4 py-2.5 border border-steel-200 rounded-lg text-base sm:text-sm focus:outline-none focus:border-ice-400 transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-red text-white font-bold rounded-md hover:bg-brand-red-hover transition-colors text-sm">
                Anfrage absenden
                <ArrowRight size={15} />
              </button>
              <p className="text-xs text-steel-400 text-center">
                Ihre Daten werden nur zur Bearbeitung Ihrer Anfrage verwendet.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
