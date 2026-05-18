import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Cash Home Buyers Since 2019 | Highlander Buys Homes",
  description:
    "Highlander REI has been buying homes directly from homeowners in Phoenix AZ and Dallas TX since 2019. Learn about our process, our commitment to fair deals, and why sellers choose us.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com/about",
  },
  openGraph: {
    title: "About Highlander Buys Homes",
    description:
      "Six years of buying homes directly in Phoenix AZ and Dallas TX. Fair offers, fast closings, no agent fees.",
    url: "https://highlanderbuyshomes.com/about",
    siteName: "Highlander Buys Homes",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
