import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | ISC Industrie-Service-Czech GmbH",
};

export default function DatenschutzPage() {
  return (
    <div className="bg-white">
      <div className="bg-navy-950 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white">Datenschutzerklärung</h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-steel-700 text-sm leading-relaxed">
        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">1. Datenschutz auf einen Blick</h2>
          <h3 className="font-semibold text-navy-900 mb-2">Allgemeine Hinweise</h3>
          <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          <h3 className="font-semibold text-navy-900 mt-4 mb-2">Datenerfassung auf dieser Website</h3>
          <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">2. Hosting</h2>
          <p>Diese Website wird bei Vercel Inc., 340 Pine Street, Suite 700, San Francisco, California 94104, USA gehostet. Details entnehmen Sie der Datenschutzerklärung von Vercel: <a href="https://vercel.com/legal/privacy-policy" className="text-ice-500 hover:text-ice-400" target="_blank" rel="noopener noreferrer">https://vercel.com/legal/privacy-policy</a>.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3 className="font-semibold text-navy-900 mb-2">Datenschutz</h3>
          <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          <h3 className="font-semibold text-navy-900 mt-4 mb-2">Verantwortliche Stelle</h3>
          <p>ISC Industrie-Service-Czech GmbH<br />An den Wulzen 2–6<br />15806 Zossen<br />E-Mail: info@i-s-c-gmbh.de</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">4. Datenerfassung auf dieser Website</h2>
          <h3 className="font-semibold text-navy-900 mb-2">Server-Log-Dateien</h3>
          <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage, IP-Adresse.</p>
          <p className="mt-2">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
          <h3 className="font-semibold text-navy-900 mt-4 mb-2">Kontaktformular</h3>
          <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
        </div>

        <div>
          <h2 className="text-lg font-bold text-navy-950 mb-3">5. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Sie haben außerdem ein Recht auf Berichtigung oder Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit für die Zukunft widerrufen. Wenden Sie sich dazu an: info@i-s-c-gmbh.de.</p>
        </div>
      </div>
    </div>
  );
}
