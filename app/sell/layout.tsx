import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Cash Offer on Your Home | No Repairs, No Fees | Highlander Buys Homes",
  description:
    "Submit your address and receive a no-obligation cash offer within 24 hours. We buy houses in any condition in Phoenix AZ and Dallas TX — close in as little as 7 days.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com/sell",
  },
  openGraph: {
    title: "Get Your Cash Offer | Highlander Buys Homes",
    description:
      "Fair cash offer in 24 hours. No repairs, no commissions. Close on your schedule in Phoenix AZ and Dallas TX.",
    url: "https://highlanderbuyshomes.com/sell",
    siteName: "Highlander Buys Homes",
    locale: "en_US",
    type: "website",
  },
};

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
