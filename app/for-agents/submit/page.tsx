import AgentSubmitForm from "./AgentSubmitForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit a Property — Highlander REI",
  description: "Agents and wholesalers — submit a property for a same-day cash offer. Full commission paid, fast close, any condition.",
};

const trustItems = [
  "Same-day review",
  "Offer in 24–48 hrs",
  "Full commission paid",
  "Any condition",
];

const points = [
  { title: "No Financing Contingencies", body: "We close with cash. No appraisal risk, no loan fall-through. Your deal actually closes." },
  { title: "Full Commission — Always", body: "We never negotiate your commission down. Submit a deal and earn your full rate at the closing table." },
  { title: "Fast & Transparent", body: "You'll work directly with our acquisition team — not a call center. Quick responses, clear timelines." },
];

export default function AgentSubmitPage() {
  return (
    <section style={{ background: "var(--off-white)", minHeight: "calc(100vh - 68px)", borderTop: "1px solid var(--border-light)" }}>
      <div className="section" style={{ paddingTop: "56px", paddingBottom: "72px" }}>
        <div className="form-with-sidebar">

          {/* ── LEFT: heading + trust ── */}
          <div style={{ paddingTop: "8px" }}>
            <span className="section-label">For Agents &amp; Wholesalers</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 5vw, 62px)", color: "var(--black)", letterSpacing: "2px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "18px" }}>
              SUBMIT A<br />
              <span style={{ color: "var(--blue)" }}>DEAL.</span>
            </h1>
            <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "32px" }}>
              Send us a property and we'll follow up same day with a number. No back-and-forth, no wasted time.
            </p>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
              {trustItems.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "6px", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "20px", padding: "5px 12px" }}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <circle cx="6" cy="6" r="5.5" fill="var(--blue-light)" />
                    <path d="M3.5 6l1.8 1.8 3-3" stroke="var(--blue)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: "11.5px", fontWeight: 600, color: "var(--mid)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Points */}
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              {points.map((item) => (
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

          {/* ── RIGHT: form ── */}
          <AgentSubmitForm />
        </div>
      </div>
    </section>
  );
}
