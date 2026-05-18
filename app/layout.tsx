import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/lib/LanguageContext";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Highlander Buys Homes — Cash Offers in Phoenix & Dallas",
  description:
    "Get a competitive cash offer on your home in Phoenix, AZ or Dallas, TX. No repairs, no showings, no agent fees. We close in as little as 14 days.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com",
    languages: {
      "en-US": "https://highlanderbuyshomes.com",
      "es-US": "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
      "x-default": "https://highlanderbuyshomes.com",
    },
  },
  openGraph: {
    title: "Highlander Buys Homes",
    description:
      "Cash offers on homes in Phoenix & Dallas. No repairs, no fees, close on your timeline.",
    url: "https://highlanderbuyshomes.com",
    siteName: "Highlander Buys Homes",
    locale: "en_US",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Highlander Buys Homes",
  "url": "https://highlanderbuyshomes.com",
  "logo": "https://highlanderbuyshomes.com/logo.png",
  "description": "We buy homes directly from homeowners in Phoenix, AZ and Dallas, TX. Fast closings, fair cash offers, no repairs or agent fees.",
  "areaServed": [
    { "@type": "City", "name": "Phoenix", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Scottsdale", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Mesa", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Chandler", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Gilbert", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Tempe", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Dallas", "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Fort Worth", "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Plano", "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Frisco", "containedIn": { "@type": "State", "name": "Texas" } },
  ],
  "sameAs": [
    "https://highlanderrei.com",
    "https://flipwithhighlander.com",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <LanguageProvider>
          <Nav />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
