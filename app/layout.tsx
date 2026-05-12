import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trockeneisreinigung Berlin Brandenburg | ISC Industrie-Service-Czech GmbH",
  description:
    "Professionelle Trockeneisreinigung, Sandstrahlen & Soda-Strahlen in Zossen bei Berlin. ISO 9001 zertifiziert. Eigenproduktion. Bundesweit tätig. ☎ 03377 202730",
  keywords: [
    "Trockeneisreinigung Berlin",
    "Trockeneisstrahlen Brandenburg",
    "Trockeneisstrahlgerät mieten Berlin",
    "Sandstrahlen Berlin",
    "ISC Industrie Service Czech",
    "Zossen Reinigung",
  ],
  openGraph: {
    title: "Trockeneisreinigung Berlin Brandenburg | ISC GmbH",
    description:
      "Professionelle Trockeneisreinigung in Zossen bei Berlin. ISO 9001 zertifiziert. Eigenproduktion. Bundesweit.",
    locale: "de_DE",
    type: "website",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ISC Industrie-Service-Czech GmbH",
  description: "Professionelle Trockeneisreinigung, Sandstrahlen, Soda-Strahlen und Sponge-Jet. ISO 9001 zertifiziert. Eigenproduktion von Trockeneis. Bundesweit tätig.",
  url: "https://www.reinigung-mit-trockeneis.de",
  telephone: "+493377202730",
  email: "info@i-s-c-gmbh.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "An den Wulzen 2-6",
    addressLocality: "Zossen",
    postalCode: "15806",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.213,
    longitude: 13.453,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Strahlverfahren & Dienstleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Trockeneisreinigung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sandstrahlen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soda-Strahlen" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sponge-Jet" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
