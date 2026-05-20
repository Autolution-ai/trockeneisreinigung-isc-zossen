import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | ISC Industrie-Service-Czech GmbH",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white">Impressum</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-sm prose-steel max-w-none">
        <h2 className="text-lg font-bold text-navy-950 mt-0">Angaben gemäß § 5 TMG</h2>
        <p className="text-steel-700">
          ISC Industrie-Service-Czech GmbH<br />
          An den Wulzen 2–6<br />
          15806 Zossen
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Vertreten durch</h2>
        <p className="text-steel-700">Geschäftsführer: Henry Czech</p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Kontakt</h2>
        <p className="text-steel-700">
          Telefon: (03377) 202730<br />
          E-Mail: <a href="mailto:info@i-s-c-gmbh.de" className="text-ice-500 hover:text-ice-400">info@i-s-c-gmbh.de</a>
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Registereintrag</h2>
        <p className="text-steel-700">
          Eintragung im Handelsregister.<br />
          Registergericht: Amtsgericht Potsdam<br />
          Registernummer: HRB 17870P
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Umsatzsteuer</h2>
        <p className="text-steel-700">
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE 286 285 024
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
        <p className="text-steel-700">
          Henry Czech<br />
          An den Wulzen 2–6<br />
          15806 Zossen
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Streitschlichtung</h2>
        <p className="text-steel-700">
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-ice-500 hover:text-ice-400 break-words">
            https://ec.europa.eu/consumers/odr
          </a>.
          Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet,
          an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2 className="text-lg font-bold text-navy-950 mt-8">Haftung für Inhalte</h2>
        <p className="text-steel-700">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </div>
    </div>
  );
}
