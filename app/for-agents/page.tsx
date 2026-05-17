import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Real Estate Agents | Highlander Buys Homes",
  description:
    "Partner with Highlander Buys Homes to close faster for your clients. Full commission, guaranteed cash closings in 14 days, repeat business.",
};

const benefits = [
  {
    n: "01",
    title: "Full Commission",
    body: "We never discount your commission. Bring us a deal and earn your full rate on every closing — no negotiation, no exceptions.",
  },
  {
    n: "02",
    title: "Certain Closings",
    body: "No financing contingencies. No appraisal risk. Cash means your deal actually closes — and your clients leave with a good experience.",
  },
  {
    n: "03",
    title: "Fast Turnaround",
    body: "Close in 14–21 days. Happy clients refer more clients — build a steady pipeline with a buyer you can count on every time.",
  },
  {
    n: "04",
    title: "Direct Communication",
    body: "Work directly with our acquisition team — not a call center. Quick responses, clear timelines, no runaround.",
  },
  {
    n: "05",
    title: "As-Is Purchases",
    body: "We buy in any condition. Distressed properties, tenant-occupied, probate, divorce — we handle situations most buyers won't touch.",
  },
  {
    n: "06",
    title: "Flexible Timelines",
    body: "Your client needs 60 days to find their next place? Fine. Need to close in 10? Done. We work around your client's schedule.",
  },
];

const agentSteps = [
  {
    n: "01",
    title: "Send Us the Property",
    body: "Share the address, listing details, or MLS info. A quick call works too. We'll tell you within a few hours if it fits our buy criteria.",
  },
  {
    n: "02",
    title: "Get Our Offer",
    body: "We analyze the property and present an all-cash offer — typically within 24–48 hours. No back-and-forth, no wasted time.",
  },
  {
    n: "03",
    title: "We Close, You Get Paid",
    body: "If your client accepts, we move straight to closing. Your commission is paid at the closing table, same as any traditional sale.",
  },
];

export default function ForAgentsPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ paddingBottom: "80px" }}>
          <span className="section-label" style={{ color: "var(--blue)" }}>Agent Partner Program</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "var(--white)", letterSpacing: "3px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "22px" }}>
            CLOSE MORE.<br /><span style={{ color: "var(--blue)" }}>EARN MORE.</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300, marginBottom: "36px" }}>
            Partner with Highlander as your preferred cash buyer. We pay full commission, move fast, and close when we say we will.
          </p>
          <Link href="/sell" className="btn-blue btn-blue-lg">
            Submit a Deal
          </Link>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="section-label">Why Partner With Us</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
              Built for Agents
            </h2>
          </div>

          <div className="three-col">
            {benefits.map((item) => (
              <div key={item.n} className="hover-lift" style={{ background: "var(--off-white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "28px 24px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "var(--blue)", letterSpacing: "2px", marginBottom: "14px" }}>{item.n}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--black)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>{item.title}</h3>
                <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW TO SUBMIT ────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span className="section-label">The Process</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
                How to Submit a Deal
              </h2>
            </div>

            {agentSteps.map((s, i) => (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "56px 1fr",
                  gap: "24px",
                  alignItems: "start",
                  paddingBottom: "36px",
                  marginBottom: "8px",
                  borderBottom: i < agentSteps.length - 1 ? "1px solid var(--border-light)" : "none",
                }}
              >
                <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "var(--blue-light)", border: "1px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "var(--blue)" }}>{s.n}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--black)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "10px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE BUY ──────────────────────────────────────── */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div className="two-col" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div>
              <span className="section-label">What We Buy</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "18px" }}>
                We Take On the<br />Hard Ones.
              </h2>
              <p style={{ fontSize: "14.5px", color: "var(--mid)", lineHeight: 1.8 }}>
                We specialize in properties other buyers pass on. Bring us your toughest listings and we{"'"}ll give you a straight answer fast.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Distressed or heavily deferred maintenance",
                "Tenant-occupied properties",
                "Estate sales and probate",
                "Divorce-related sales",
                "Pre-foreclosure or behind on payments",
                "Fire, flood, or other damage",
                "Inherited properties",
                "Homes that didn't sell on the MLS",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "var(--mid)" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7.5" fill="var(--blue-light)" />
                    <path d="M5 8l2.2 2.2 3.8-3.8" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>Ready to Work Together?</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "18px" }}>
            Submit Your<br />First Deal.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "400px", margin: "0 auto 32px", lineHeight: 1.75 }}>
            We{"'"}re actively buying in Phoenix and Dallas. Send us a property and we{"'"}ll follow up same day.
          </p>
          <Link href="/sell" className="btn-blue btn-blue-lg">
            Submit a Property →
          </Link>
        </div>
      </section>
    </>
  );
}
