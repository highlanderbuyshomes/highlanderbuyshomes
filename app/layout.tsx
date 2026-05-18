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
  title: "Sell My House Fast Phoenix AZ & Dallas TX | Cash Offers in 24 Hours",
  description:
    "Get a fair cash offer for your Phoenix AZ or Dallas TX home in 24 hours. No repairs, no showings, no agent fees. We close in as little as 7 days — entirely on your schedule.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com",
    languages: {
      "en-US": "https://highlanderbuyshomes.com",
      "es-US": "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
      "x-default": "https://highlanderbuyshomes.com",
    },
  },
  openGraph: {
    title: "Sell My House Fast | Cash Offers in Phoenix & Dallas",
    description:
      "Cash offers on homes in Phoenix AZ & Dallas TX in 24 hours. No repairs, no fees, close on your timeline.",
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
  "alternateName": "Highlander REI",
  "url": "https://highlanderbuyshomes.com",
  "logo": "https://highlanderbuyshomes.com/logo.png",
  "description": "We buy homes directly from homeowners in Phoenix AZ and Dallas TX. Fair cash offers in 24 hours, close in as little as 7 days. No repairs, no commissions, no fees.",
  "knowsLanguage": ["en", "es"],
  "serviceType": "Cash Home Buyer",
  "priceRange": "$$",
  "openingHours": "Mo-Fr 08:00-18:00",
  "areaServed": [
    { "@type": "City", "name": "Phoenix",    "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Scottsdale", "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Mesa",       "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Chandler",   "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Gilbert",    "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Glendale",   "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Tempe",      "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Peoria",     "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Surprise",   "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Goodyear",   "containedIn": { "@type": "State", "name": "Arizona" } },
    { "@type": "City", "name": "Dallas",     "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Fort Worth", "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Plano",      "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Frisco",     "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Arlington",  "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Irving",     "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "McKinney",   "containedIn": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Garland",    "containedIn": { "@type": "State", "name": "Texas" } },
  ],
  "sameAs": [
    "https://highlanderrei.com",
    "https://flipwithhighlander.com",
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": ["English", "Spanish"],
    "email": "invest@highlanderrei.com",
  },
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
