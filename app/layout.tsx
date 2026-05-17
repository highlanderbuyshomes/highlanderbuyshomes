import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
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
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Nav />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
