import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Sell Your House for Cash in Phoenix AZ & Dallas TX | Highlander Buys Homes",
  description:
    "Get a fair cash offer for your Phoenix AZ or Dallas TX home in 24 hours. No repairs, no commissions, close as fast as 7 days. See exactly how our cash buying process works.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com/cash-offer",
    languages: {
      "en-US": "https://highlanderbuyshomes.com/cash-offer",
      "es-US": "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
      "x-default": "https://highlanderbuyshomes.com/cash-offer",
    },
  },
  openGraph: {
    title: "Sell Your House for Cash | Highlander Buys Homes",
    description:
      "Cash offer in 24 hours. No repairs, no fees. Close as fast as 7 days in Phoenix AZ and Dallas TX.",
    url: "https://highlanderbuyshomes.com/cash-offer",
    siteName: "Highlander Buys Homes",
    locale: "en_US",
    type: "website",
  },
};

export default function CashOfferLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
