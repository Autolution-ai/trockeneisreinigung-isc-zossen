import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB | ISC Industrie-Service-Czech GmbH",
};

export default function AGBPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white">Allgemeine Geschäftsbedingungen</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-steel-700 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 1 Geltungsbereich</h2>
          <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der ISC Industrie-Service-Czech GmbH (nachfolgend „ISC") und ihren Kunden über Dienstleistungen, Warenlieferungen und Maschinenvermietung, soweit nicht ausdrücklich etwas anderes vereinbart wird.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 2 Vertragsschluss</h2>
          <p>Angebote der ISC sind freibleibend. Ein Vertrag kommt erst durch schriftliche Auftragsbestätigung oder Ausführung des Auftrags zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 3 Preise und Zahlung</h2>
          <p>Es gelten die zum Zeitpunkt des Vertragsschlusses gültigen Preise. Alle Preise verstehen sich zzgl. der gesetzlichen Umsatzsteuer. Rechnungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu zahlen.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 4 Leistungserbringung</h2>
          <p>ISC erbringt Reinigungsdienstleistungen nach bestem Fachwissen und nach Stand der Technik. Der Kunde stellt alle notwendigen Voraussetzungen für die Durchführung bereit (Zugang, Sicherheitseinrichtungen, Abschaltung von Anlagen sofern erforderlich).</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 5 Maschinenvermietung</h2>
          <p>Mietgeräte werden in einwandfreiem, gereinigtem Zustand übergeben. Der Mieter ist verpflichtet, die Geräte pfleglich zu behandeln und nach Mietende gereinigt zurückzugeben. Bei Verlust oder schuldhafter Beschädigung haftet der Mieter für den Wiederbeschaffungswert.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 6 Haftung</h2>
          <p>ISC haftet unbegrenzt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit sowie bei Vorsatz oder grober Fahrlässigkeit. Im Übrigen ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">§ 7 Gerichtsstand und anzuwendendes Recht</h2>
          <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist, soweit gesetzlich zulässig, Potsdam.</p>
        </div>

        <p className="text-xs text-steel-400 pt-4 border-t border-steel-100">
          Stand: Januar 2024 · ISC Industrie-Service-Czech GmbH, An den Wulzen 2–6, 15806 Zossen
        </p>
      </div>
    </div>
  );
}
