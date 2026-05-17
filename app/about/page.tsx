import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Highlander Buys Homes",
  description:
    "Learn about Highlander REI — who we are, how we buy homes, and why homeowners and agents choose to work with us in Phoenix, AZ and Dallas, TX.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ paddingBottom: "80px" }}>
          <span className="section-label" style={{ color: "var(--blue)" }}>Who We Are</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "var(--white)", letterSpacing: "3px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "22px" }}>
            ABOUT<br /><span style={{ color: "var(--blue)" }}>HIGHLANDER</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300 }}>
            A real estate investment operation built on execution, transparency, and fair dealing. We buy homes directly — no listings, no agents, no waiting.
          </p>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div className="two-col">
            <div>
              <span className="section-label">Our Story</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "22px" }}>
                Built to Buy.<br />Built for You.
              </h2>
              <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "16px" }}>
                Highlander REI was founded on a straightforward premise: homeowners deserve a direct, honest option when they need to sell. No listing process, no repairs, no months of uncertainty.
              </p>
              <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "16px" }}>
                Over the last six years we{"'"}ve built direct relationships with homeowners, agents, and wholesalers across Phoenix, AZ and Dallas, TX — two of the strongest residential real estate markets in the country.
              </p>
              <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8 }}>
                {"We're"} a small, focused team. We buy good properties, treat sellers fairly, and close when we say we will.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { val: "6+", label: "Years Buying Homes", sub: "Direct acquisitions in Phoenix & Dallas since 2019" },
                { val: "PHX + DFW", label: "Active Markets", sub: "Two of the fastest-moving residential markets in the U.S." },
                { val: "14 days", label: "Minimum Close Time", sub: "Fast, certain, all-cash closings on your schedule" },
                { val: "As-Is", label: "We Buy Any Condition", sub: "No repairs, no cleaning, no staging — ever" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", gap: "20px", alignItems: "flex-start", background: "var(--off-white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius-sm)", padding: "20px 22px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--blue)", letterSpacing: "1px", lineHeight: 1, flexShrink: 0, minWidth: "76px" }}>{s.val}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", color: "var(--black)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "3px" }}>{s.label}</div>
                    <div style={{ fontSize: "12.5px", color: "var(--mid)", lineHeight: 1.65 }}>{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="section-label">How We Operate</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
              Our Principles
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px", maxWidth: "900px", margin: "0 auto" }}>
            {[
              { title: "We're Direct", body: "No runaround, no mystery offers. We tell you how we calculated your offer and answer every question honestly." },
              { title: "We Close What We Open", body: "If we make you an offer and you accept, we close. No last-minute price drops, no financing falling through." },
              { title: "We Buy As-Is", body: "Your home's condition is priced into our offer. You never need to make a single repair before we close." },
              { title: "You Choose the Timeline", body: "Fast or slow — your call. We can move in 14 days or give you 90 days to get organized." },
            ].map((v, i) => (
              <div key={v.title} style={{ display: "flex", gap: "16px", paddingTop: "28px", paddingBottom: "28px", borderBottom: i < 3 ? "1px solid var(--border-light)" : "none" }}>
                <div style={{ width: "3px", background: "var(--blue)", borderRadius: "2px", flexShrink: 0, alignSelf: "stretch", minHeight: "40px" }} />
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--black)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "8px" }}>{v.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8 }}>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "16px" }}>
            {"Let's"} Talk.
          </h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "400px", margin: "0 auto 32px", lineHeight: 1.75 }}>
            Whether {"you're"} ready to sell or just exploring your options, {"we're"} happy to have that conversation — no pressure, no obligation.
          </p>
          <Link href="/sell" className="btn-blue btn-blue-lg">
            Get My Cash Offer
          </Link>
        </div>
      </section>
    </>
  );
}
