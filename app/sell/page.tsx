import type { Metadata } from "next";
import SellForm from "./SellForm";

export const metadata: Metadata = {
  title: "Get My Cash Offer | Highlander Buys Homes",
  description:
    "Start your cash offer request. Answer a few quick questions and we'll send you a competitive cash offer within 24 hours. No repairs, no fees, no obligation.",
};

export default function SellPage() {
  return (
    <section style={{ background: "var(--off-white)", minHeight: "calc(100vh - 68px)", borderTop: "1px solid var(--border-light)" }}>
      <div className="section" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "64px", alignItems: "start", maxWidth: "1000px", margin: "0 auto" }}>
          {/* Left — heading + trust points */}
          <div style={{ paddingTop: "8px" }}>
            <span className="section-label">No repairs · No fees · No obligation</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", color: "var(--black)", letterSpacing: "2px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "18px" }}>
              YOUR CASH OFFER<br />
              <span style={{ color: "var(--blue)" }}>STARTS HERE.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "36px" }}>
              Fill out the form and we{"'"}ll reach out within 24 hours with your competitive, no-obligation cash offer.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {[
                { title: "Free & no obligation", body: "Getting an offer costs nothing and you're never required to accept." },
                { title: "Any condition, any situation", body: "We buy as-is. No repairs, no cleaning, no staging required." },
                { title: "Close when you're ready", body: "14 days or 90 — you set the date. We work around your schedule." },
              ].map((item) => (
                <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0, marginTop: "6px" }} />
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--black)", marginBottom: "2px" }}>{item.title}</div>
                    <div style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.65 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <SellForm />
        </div>
      </div>
    </section>
  );
}
