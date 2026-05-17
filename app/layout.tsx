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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
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
