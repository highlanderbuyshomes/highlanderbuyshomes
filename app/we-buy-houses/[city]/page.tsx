import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import OfferForm from "@/components/OfferForm";

type CityData = {
  name: string;
  state: string;
  stateAbbr: string;
  metro: string;
  county: string;
  spanishSlug: string | null;
  nearCities: { name: string; slug: string }[];
};

const cities: Record<string, CityData> = {
  "phoenix-az": {
    name: "Phoenix", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: null,
    nearCities: [
      { name: "Scottsdale", slug: "scottsdale-az" }, { name: "Mesa", slug: "mesa-az" },
      { name: "Chandler", slug: "chandler-az" }, { name: "Tempe", slug: "tempe-az" },
      { name: "Glendale", slug: "glendale-az" }, { name: "Peoria", slug: "peoria-az" },
    ],
  },
  "scottsdale-az": {
    name: "Scottsdale", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "scottsdale-arizona",
    nearCities: [
      { name: "Phoenix", slug: "phoenix-az" }, { name: "Tempe", slug: "tempe-az" },
      { name: "Mesa", slug: "mesa-az" }, { name: "Chandler", slug: "chandler-az" },
    ],
  },
  "mesa-az": {
    name: "Mesa", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "mesa-arizona",
    nearCities: [
      { name: "Phoenix", slug: "phoenix-az" }, { name: "Chandler", slug: "chandler-az" },
      { name: "Gilbert", slug: "gilbert-az" }, { name: "Tempe", slug: "tempe-az" },
    ],
  },
  "chandler-az": {
    name: "Chandler", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "chandler-arizona",
    nearCities: [
      { name: "Mesa", slug: "mesa-az" }, { name: "Gilbert", slug: "gilbert-az" },
      { name: "Tempe", slug: "tempe-az" }, { name: "Phoenix", slug: "phoenix-az" },
    ],
  },
  "gilbert-az": {
    name: "Gilbert", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "gilbert-arizona",
    nearCities: [
      { name: "Chandler", slug: "chandler-az" }, { name: "Mesa", slug: "mesa-az" },
      { name: "Tempe", slug: "tempe-az" }, { name: "Scottsdale", slug: "scottsdale-az" },
    ],
  },
  "glendale-az": {
    name: "Glendale", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "glendale-arizona",
    nearCities: [
      { name: "Phoenix", slug: "phoenix-az" }, { name: "Peoria", slug: "peoria-az" },
      { name: "Surprise", slug: "surprise-az" }, { name: "Avondale", slug: "avondale-az" },
    ],
  },
  "tempe-az": {
    name: "Tempe", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "tempe-arizona",
    nearCities: [
      { name: "Phoenix", slug: "phoenix-az" }, { name: "Mesa", slug: "mesa-az" },
      { name: "Chandler", slug: "chandler-az" }, { name: "Scottsdale", slug: "scottsdale-az" },
    ],
  },
  "peoria-az": {
    name: "Peoria", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "peoria-arizona",
    nearCities: [
      { name: "Glendale", slug: "glendale-az" }, { name: "Phoenix", slug: "phoenix-az" },
      { name: "Surprise", slug: "surprise-az" }, { name: "Avondale", slug: "avondale-az" },
    ],
  },
  "avondale-az": {
    name: "Avondale", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "avondale-arizona",
    nearCities: [
      { name: "Glendale", slug: "glendale-az" }, { name: "Peoria", slug: "peoria-az" },
      { name: "Goodyear", slug: "goodyear-az" }, { name: "Phoenix", slug: "phoenix-az" },
    ],
  },
  "surprise-az": {
    name: "Surprise", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "surprise-arizona",
    nearCities: [
      { name: "Peoria", slug: "peoria-az" }, { name: "Glendale", slug: "glendale-az" },
      { name: "Goodyear", slug: "goodyear-az" }, { name: "Phoenix", slug: "phoenix-az" },
    ],
  },
  "goodyear-az": {
    name: "Goodyear", state: "Arizona", stateAbbr: "AZ", metro: "Phoenix", county: "Maricopa",
    spanishSlug: "goodyear-arizona",
    nearCities: [
      { name: "Avondale", slug: "avondale-az" }, { name: "Surprise", slug: "surprise-az" },
      { name: "Peoria", slug: "peoria-az" }, { name: "Phoenix", slug: "phoenix-az" },
    ],
  },
  "dallas-tx": {
    name: "Dallas", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Dallas",
    spanishSlug: null,
    nearCities: [
      { name: "Fort Worth", slug: "fort-worth-tx" }, { name: "Plano", slug: "plano-tx" },
      { name: "Irving", slug: "irving-tx" }, { name: "Garland", slug: "garland-tx" },
      { name: "Arlington", slug: "arlington-tx" }, { name: "Frisco", slug: "frisco-tx" },
    ],
  },
  "fort-worth-tx": {
    name: "Fort Worth", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Tarrant",
    spanishSlug: "fort-worth-texas",
    nearCities: [
      { name: "Dallas", slug: "dallas-tx" }, { name: "Arlington", slug: "arlington-tx" },
      { name: "Irving", slug: "irving-tx" }, { name: "Denton", slug: "denton-tx" },
    ],
  },
  "arlington-tx": {
    name: "Arlington", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Tarrant",
    spanishSlug: "arlington-texas",
    nearCities: [
      { name: "Fort Worth", slug: "fort-worth-tx" }, { name: "Irving", slug: "irving-tx" },
      { name: "Garland", slug: "garland-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "garland-tx": {
    name: "Garland", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Dallas",
    spanishSlug: "garland-texas",
    nearCities: [
      { name: "Plano", slug: "plano-tx" }, { name: "Mesquite", slug: "mesquite-tx" },
      { name: "Irving", slug: "irving-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "irving-tx": {
    name: "Irving", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Dallas",
    spanishSlug: "irving-texas",
    nearCities: [
      { name: "Arlington", slug: "arlington-tx" }, { name: "Fort Worth", slug: "fort-worth-tx" },
      { name: "Carrollton", slug: "carrollton-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "plano-tx": {
    name: "Plano", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Collin",
    spanishSlug: "plano-texas",
    nearCities: [
      { name: "Frisco", slug: "frisco-tx" }, { name: "McKinney", slug: "mckinney-tx" },
      { name: "Garland", slug: "garland-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "frisco-tx": {
    name: "Frisco", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Collin",
    spanishSlug: "frisco-texas",
    nearCities: [
      { name: "Plano", slug: "plano-tx" }, { name: "McKinney", slug: "mckinney-tx" },
      { name: "Carrollton", slug: "carrollton-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "mckinney-tx": {
    name: "McKinney", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Collin",
    spanishSlug: "mckinney-texas",
    nearCities: [
      { name: "Frisco", slug: "frisco-tx" }, { name: "Plano", slug: "plano-tx" },
      { name: "Denton", slug: "denton-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "mesquite-tx": {
    name: "Mesquite", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Dallas",
    spanishSlug: "mesquite-texas",
    nearCities: [
      { name: "Garland", slug: "garland-tx" }, { name: "Irving", slug: "irving-tx" },
      { name: "Arlington", slug: "arlington-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "denton-tx": {
    name: "Denton", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Denton",
    spanishSlug: "denton-texas",
    nearCities: [
      { name: "Fort Worth", slug: "fort-worth-tx" }, { name: "McKinney", slug: "mckinney-tx" },
      { name: "Frisco", slug: "frisco-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
  "carrollton-tx": {
    name: "Carrollton", state: "Texas", stateAbbr: "TX", metro: "Dallas", county: "Dallas",
    spanishSlug: "carrollton-texas",
    nearCities: [
      { name: "Irving", slug: "irving-tx" }, { name: "Frisco", slug: "frisco-tx" },
      { name: "Plano", slug: "plano-tx" }, { name: "Dallas", slug: "dallas-tx" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities[slug];
  if (!city) return {};

  return {
    title: `Sell My House Fast ${city.name}, ${city.stateAbbr} | Cash Home Buyers | Highlander`,
    description: `Get a fair cash offer for your ${city.name}, ${city.state} home in 24 hours. No repairs, no agent commissions. We close in as little as 7 days. Serving all of ${city.county} County.`,
    alternates: {
      canonical: `https://highlanderbuyshomes.com/we-buy-houses/${slug}`,
      languages: city.spanishSlug
        ? {
            "es-US": `https://highlanderbuyshomes.com/compramos-casas/${city.spanishSlug}`,
            "x-default": `https://highlanderbuyshomes.com/we-buy-houses/${slug}`,
          }
        : undefined,
    },
    openGraph: {
      title: `Sell My House Fast ${city.name} ${city.stateAbbr} | Cash Offer in 24 Hours`,
      description: `Cash home buyers in ${city.name}, ${city.state}. No repairs, no commissions. Close in 7 days.`,
      url: `https://highlanderbuyshomes.com/we-buy-houses/${slug}`,
      siteName: "Highlander Buys Homes",
      locale: "en_US",
      type: "website",
    },
  };
}

const situations = [
  { title: "Inherited Property", body: "Don't want to manage, repair, or list a home you inherited? We close fast with minimal paperwork — so you can move on without the headache." },
  { title: "Facing Foreclosure", body: "Behind on payments or facing foreclosure? A fast cash sale can close before the bank acts, protecting your credit and putting money in your pocket." },
  { title: "Divorce or Separation", body: "Need to liquidate a jointly-owned property quickly? We make the process straightforward, fast, and conflict-free." },
  { title: "Relocating", body: "Moving for work or life and need to sell without a drawn-out listing? We close on your schedule — not the market's." },
  { title: "Major Repairs Needed", body: "Foundation issues, roof damage, outdated systems — we buy as-is. No repairs, no inspection renegotiations, no fall-through risk." },
  { title: "Vacant or Problem Tenants", body: "Tired of managing a vacant property or dealing with non-paying tenants? We buy occupied and vacant homes alike." },
];

const compareRows = [
  { label: "Time to get an offer",      ours: "24 hours",          trad: "Weeks to months" },
  { label: "Repairs required",          ours: "Never",             trad: "Usually yes" },
  { label: "Agent commission",          ours: "$0",                trad: "5–6% of sale price" },
  { label: "Closing costs",             ours: "$0 to you",         trad: "Thousands of dollars" },
  { label: "Time to close",             ours: "As fast as 7 days", trad: "30–90 days average" },
  { label: "Deal certainty",            ours: "Guaranteed cash",   trad: "Buyer can back out" },
  { label: "Showings & open houses",    ours: "None",              trad: "Many, over weeks" },
];

export default async function WeBuyHousesCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities[slug];
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Highlander Buys Homes",
    url: "https://highlanderbuyshomes.com",
    description: `We buy houses fast for cash in ${city.name}, ${city.state}. Fair offer in 24 hours, close in as little as 7 days. No repairs, no commissions.`,
    areaServed: [
      { "@type": "City", name: city.name, containedIn: { "@type": "State", name: city.state } },
      { "@type": "City", name: city.metro },
    ],
    knowsLanguage: ["en", "es"],
    serviceType: "Cash Home Buyer",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
      email: "invest@highlanderrei.com",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://highlanderbuyshomes.com" },
      { "@type": "ListItem", position: 2, name: "We Buy Houses", item: "https://highlanderbuyshomes.com/cash-offer" },
      { "@type": "ListItem", position: 3, name: `${city.name}, ${city.stateAbbr}`, item: `https://highlanderbuyshomes.com/we-buy-houses/${slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How fast can you buy my house in ${city.name}, ${city.stateAbbr}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We can close in as little as 7 days in ${city.name}. Most transactions close in 14–21 days. You receive a cash offer within 24 hours of contacting us.`,
        },
      },
      {
        "@type": "Question",
        name: `Do I need to repair my house before selling in ${city.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. We buy houses in ${city.name} in any condition — foundation issues, fire or water damage, outdated systems, you name it. We buy as-is, so you never pay for repairs.`,
        },
      },
      {
        "@type": "Question",
        name: `Are there any fees or commissions when selling to Highlander in ${city.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `None. We charge no commissions and cover standard closing costs. The number in your offer is the number you receive at closing.`,
        },
      },
      {
        "@type": "Question",
        name: `How do you determine the cash offer for my ${city.name} home?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We analyze recent comparable sales in ${city.name} and ${city.county} County, current market conditions, and your property's condition. Our offers are fair and transparent — we explain how we arrived at the number.`,
        },
      },
      {
        "@type": "Question",
        name: `What neighborhoods in ${city.name} do you buy in?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `We buy throughout all of ${city.name} and ${city.county} County, including every zip code and neighborhood. We also buy in surrounding cities across the ${city.metro} metro area.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "72px 48px 64px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "5px 14px", marginBottom: "22px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.8px", fontWeight: 500 }}>
            {city.name}, {city.stateAbbr} · {city.county} County
          </span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 6vw, 80px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 0.95, marginBottom: "18px" }}>
          SELL MY HOUSE FAST<br />IN {city.name.toUpperCase()},<br />
          <span style={{ color: "var(--blue)" }}>{city.stateAbbr}.</span>
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto 8px", lineHeight: 1.75 }}>
          We buy houses in {city.name} for cash — fair offer in 24 hours, close in as little as 7 days. No repairs. No agent fees. No waiting.
        </p>
        <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.28)", marginBottom: "32px" }}>
          Free offer · No obligation · Any condition
        </p>

        <OfferForm />

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden", maxWidth: "720px", margin: "44px auto 0" }}>
          {[
            { val: "24 hrs", label: "Cash offer turnaround" },
            { val: "7 days", label: "Fastest close time" },
            { val: "$0",     label: "Agent commissions" },
            { val: "$0",     label: "Repair costs" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.38)", marginTop: "5px", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="section">
        <span className="section-label">The Process</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
          HOW TO SELL YOUR HOUSE<br />FAST IN {city.name.toUpperCase()}.
        </h2>
        <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "48px" }}>
          Three steps. No complications. No surprises.
        </p>
        <div className="three-col">
          {[
            {
              num: "01",
              title: "Tell Us About Your Home",
              desc: `Enter your ${city.name} address and answer a few quick questions. No commitment — takes less than 3 minutes.`,
              bullets: ["No lengthy inspections", "No complicated forms", "Response the same business day"],
            },
            {
              num: "02",
              title: "Receive Your Cash Offer",
              desc: `In less than 24 hours, you'll have a fair cash offer based on real ${city.name} market data — no pressure to accept.`,
              bullets: ["Fair offer based on local comps", "No hidden deductions", "Zero obligation to proceed"],
            },
            {
              num: "03",
              title: "Close on Your Timeline",
              desc: `Close in as little as 7 days, or take the time you need. We cover closing costs and handle all the paperwork.`,
              bullets: ["Close in as little as 7 days", "You choose the closing date", "We cover all standard closing costs"],
            },
          ].map((step) => (
            <div key={step.num} style={{ background: "var(--off-white)", borderRadius: "var(--radius)", padding: "32px 28px", border: "1px solid var(--border-light)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--border-mid)", letterSpacing: "1px", lineHeight: 1, marginBottom: "16px" }}>{step.num}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "10px" }}>{step.title}</div>
              <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.7, marginBottom: "16px" }}>{step.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                {step.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "var(--mid)" }}>
                    <span style={{ color: "var(--blue)", flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── $0 COSTS ─────────────────────────────────────────── */}
      <section style={{ background: "var(--blue)", padding: "56px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
            $0 IN COSTS TO YOU IN {city.name.toUpperCase()}.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
            No commissions. No closing costs. No repairs. Every dollar in your offer goes to you.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { val: "$0", label: "Agent Commission", note: "No 5–6% fee" },
              { val: "$0", label: "Closing Costs", note: "We cover them" },
              { val: "$0", label: "Repairs Required", note: "We buy as-is" },
              { val: "$0", label: "Showings or Fees", note: "Zero hassle" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "24px 16px", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1, marginBottom: "6px" }}>{item.val}</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SITUATIONS ───────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">Any Situation</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
            WE BUY HOUSES IN<br />{city.name.toUpperCase()} IN EVERY SITUATION.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "48px" }}>
            No matter what's going on — we've seen it. We buy as-is, any condition, from homeowners in every situation.
          </p>
          <div className="three-col">
            {situations.map((s) => (
              <div key={s.title} style={{ background: "var(--white)", borderRadius: "var(--radius)", padding: "28px 24px", border: "1px solid var(--border-light)" }}>
                <div style={{ width: "32px", height: "3px", background: "var(--blue)", borderRadius: "2px", marginBottom: "16px" }} />
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.75 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE ──────────────────────────────────────────── */}
      <section className="section">
        <span className="section-label">Cash vs. Traditional</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
          SELLING TO HIGHLANDER<br />VS. LISTING WITH AN AGENT.
        </h2>
        <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "40px" }}>
          See why more {city.name} homeowners choose a direct cash sale.
        </p>
        <div style={{ borderRadius: "var(--radius)", border: "1px solid var(--border-light)", overflow: "hidden", maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--black)", padding: "16px 24px" }}>
            <div />
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Highlander</div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Traditional Agent</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "15px 24px", background: i % 2 === 0 ? "var(--white)" : "var(--off-white)", borderTop: "1px solid var(--border-light)", alignItems: "center" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--near-black)" }}>{row.label}</div>
              <div style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600, textAlign: "center" }}>{row.ours}</div>
              <div style={{ fontSize: "13px", color: "var(--mid)", textAlign: "center" }}>{row.trad}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">Common Questions</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "48px" }}>
            FAQ — SELLING YOUR HOUSE<br />IN {city.name.toUpperCase()}, {city.stateAbbr}.
          </h2>
          <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column" }}>
            {[
              { q: `How fast can you buy my house in ${city.name}, ${city.stateAbbr}?`, a: `We can close in as little as 7 days in ${city.name}. Most transactions close in 14–21 days. You receive a cash offer within 24 hours of contacting us.` },
              { q: `Do I need to repair my house before selling in ${city.name}?`, a: `No. We buy houses in ${city.name} in any condition — foundation issues, fire or water damage, outdated systems. We buy as-is, so you never spend a dollar on repairs.` },
              { q: `Are there any fees or commissions?`, a: `None. We charge no agent commissions and cover standard closing costs. The number in your offer is exactly what you receive at closing.` },
              { q: `How do you calculate my cash offer?`, a: `We analyze recent comparable sales in ${city.name} and ${city.county} County, current market conditions, and your property's condition. Our offers are fair and transparent.` },
              { q: `What neighborhoods in ${city.name} do you buy in?`, a: `We buy throughout all of ${city.name}, ${city.county} County, and the greater ${city.metro} metro area — every zip code and neighborhood.` },
            ].map((faq, i, arr) => (
              <div key={i} style={{ padding: "24px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{faq.q}</div>
                <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEARBY CITIES ────────────────────────────────────── */}
      <section style={{ background: "var(--white)", padding: "56px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span className="section-label">Nearby Areas</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 36px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "28px" }}>
            WE BUY HOUSES NEAR {city.name.toUpperCase()} TOO.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "28px" }}>
            {city.nearCities.map((nearby) => (
              <Link
                key={nearby.slug}
                href={`/we-buy-houses/${nearby.slug}`}
                style={{ fontSize: "13px", fontWeight: 500, color: "var(--blue)", textDecoration: "none", background: "var(--blue-light)", border: "1px solid var(--blue-border)", borderRadius: "8px", padding: "8px 16px" }}
              >
                {nearby.name}, {city.stateAbbr}
              </Link>
            ))}
          </div>
          {city.spanishSlug && (
            <div style={{ marginTop: "16px", padding: "16px 20px", background: "var(--off-white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-sm)", display: "inline-flex", alignItems: "center", gap: "12px" }}>
              <span style={{ fontSize: "13px", color: "var(--mid)" }}>¿Prefieres español?</span>
              <Link
                href={`/compramos-casas/${city.spanishSlug}`}
                style={{ fontSize: "13px", fontWeight: 600, color: "var(--blue)", textDecoration: "none" }}
              >
                Ver página en español →
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 1, marginBottom: "16px" }}>
          SELL YOUR {city.name.toUpperCase()}<br />HOUSE TODAY.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", marginBottom: "36px", maxWidth: "440px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          Enter your address and get a fair cash offer within 24 hours — no obligation, no pressure.
        </p>
        <OfferForm />
        <div style={{ marginTop: "24px" }}>
          <Link href="/cash-offer" style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
            Learn how our process works →
          </Link>
        </div>
      </section>
    </>
  );
}
