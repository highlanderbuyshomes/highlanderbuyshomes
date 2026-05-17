import type { Metadata } from "next";
import Link from "next/link";
import OfferForm from "@/components/OfferForm";

export const metadata: Metadata = {
  title: "How It Works | Highlander Buys Homes",
  description:
    "Get a fair all-cash offer on your home in Phoenix, AZ or Dallas, TX within 24 hours. Close in as little as 7 days. No repairs, no showings, no agent fees. We buy houses as-is — any condition, any situation.",
};

const steps = [
  {
    n: "01",
    title: "Tell Us About Your Home",
    body: "Enter your property address and answer a few quick questions about your home's condition and your timeline. No commitment required — it takes less than 3 minutes.",
    details: [
      "Any condition is fine — no repairs needed beforehand",
      "Your reason for selling helps us tailor the offer",
      "Tell us your preferred closing timeline",
    ],
  },
  {
    n: "02",
    title: "Receive Your Cash Offer",
    body: "Our team reviews your property details and local market data to put together a fair, all-cash offer. We follow up within 24 hours with a clear, no-obligation number — no lowball tactics.",
    details: [
      "Fair offer based on real comparable sales",
      "Transparent — we explain how we got there",
      "Zero obligation to accept",
    ],
  },
  {
    n: "03",
    title: "Close on Your Timeline",
    body: "You choose the closing date. We can close in as little as 7 days — most transactions close in 14–21 days. We handle all the paperwork; you just show up.",
    details: [
      "Close in as little as 7 days",
      "Most transactions close in 14–21 days",
      "We cover all standard closing costs",
    ],
  },
];

const situations = [
  { title: "Inherited Property", body: "Inherited a home you don't want to manage, repair, or list? We close fast with minimal paperwork and handle the details so you don't have to." },
  { title: "Facing Foreclosure", body: "Behind on payments or facing foreclosure? A cash sale can close before the bank acts — protecting your credit and putting cash in your pocket." },
  { title: "Divorce or Separation", body: "Need to liquidate a jointly-owned property quickly and cleanly? We make the process straightforward, fast, and conflict-free." },
  { title: "Relocation", body: "Moving for a job or life change and need to sell without the dragged-out listing process? We close on your schedule — not the market's." },
  { title: "Major Repairs Needed", body: "Foundation issues, roof damage, outdated systems — we buy as-is. No repairs, no inspections from buyers, no re-negotiations after inspections." },
  { title: "Vacant or Rental Property", body: "Tired of managing a vacant property or dealing with tenants? We buy occupied and vacant homes alike — hassle-free." },
];

const faqs = [
  {
    q: "How do you determine my cash offer?",
    a: "We analyze recent comparable sales in your area, current market conditions, and your property's condition to arrive at a fair offer. Our goal is to give you a real number — one that reflects the value of your home without the cost and time of repairs and listing.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "No. There are no agent commissions and no hidden fees. We cover standard closing costs. The number we offer is the number you receive.",
  },
  {
    q: "Do I need to make repairs first?",
    a: "Never. We buy homes as-is — including homes with foundation issues, roof damage, outdated electrical, fire or water damage, and more. The condition of your home doesn't affect our ability to close.",
  },
  {
    q: "How fast can you actually close?",
    a: "In some cases we can close in 7 days. Most transactions close in 14–21 days. The timeline depends on clear title and your schedule — we work around what works for you.",
  },
  {
    q: "Do I need to clean out the house?",
    a: "No. Leave whatever you can't take. Furniture, personal items, old belongings — we handle the cleanout after closing. You take what you want and leave the rest.",
  },
  {
    q: "What if I'm not ready to sell right away?",
    a: "That's fine. Once you receive your offer there's no deadline to accept. If you'd like a longer closing window — 60, 90, even 120 days — we can accommodate that.",
  },
  {
    q: "Which areas do you buy in?",
    a: "We buy in the Phoenix, AZ metro (Scottsdale, Mesa, Tempe, Chandler, Gilbert, Glendale, and surrounding areas) and the Dallas–Fort Worth, TX metroplex.",
  },
  {
    q: "How is this different from listing with an agent?",
    a: "When you list, you're waiting for a buyer who may or may not get financing, may demand repairs, and may back out. With us, you get a guaranteed cash offer and choose exactly when to close — no uncertainty.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 59px,rgba(255,255,255,0.012) 59px,rgba(255,255,255,0.012) 60px),repeating-linear-gradient(90deg,transparent,transparent 59px,rgba(255,255,255,0.012) 59px,rgba(255,255,255,0.012) 60px)" }} />
        <div className="section" style={{ paddingBottom: "80px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>Simple &amp; Transparent</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "var(--white)", letterSpacing: "3px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "22px" }}>
            HOW IT<br />WORKS.
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "500px", lineHeight: 1.8, fontWeight: 300, marginBottom: "36px" }}>
            Three straightforward steps from offer to close. No surprises, no runaround — close in as little as 7 days.
          </p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {[
              { val: "24 hrs", label: "Offer timeline" },
              { val: "7 days", label: "Fastest close" },
              { val: "14–21", label: "Typical close" },
              { val: "$0", label: "Fees or repairs" },
            ].map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "10px", padding: "14px 20px", minWidth: "110px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--white)", letterSpacing: "1px" }}>{s.val}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "1px", marginTop: "2px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THREE STEPS ──────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          {steps.map((s, i) => (
            <div
              key={s.n}
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: "36px",
                alignItems: "start",
                padding: "48px 0",
                borderBottom: i < steps.length - 1 ? "1px solid var(--border-light)" : "none",
              }}
            >
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--blue-light)", border: "2px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "var(--blue)", letterSpacing: "1px" }}>{s.n}</span>
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3vw, 38px)", color: "var(--black)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "14px" }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, maxWidth: "600px", marginBottom: "22px" }}>{s.body}</p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.details.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "var(--mid)" }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="7.5" fill="var(--blue-light)" />
                        <path d="M5 8l2.2 2.2 3.8-3.8" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SITUATIONS ───────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="section-label">Any Situation</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
              We Buy in Every Situation
            </h2>
            <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "560px", margin: "16px auto 0", lineHeight: 1.8 }}>
              No matter what's going on — we've seen it. We buy houses as-is, any condition, from homeowners in every situation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {situations.map((item) => (
              <div key={item.title} style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "14px", padding: "28px 24px" }}>
                <div style={{ width: "3px", height: "24px", background: "var(--blue)", borderRadius: "2px", marginBottom: "14px" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--black)", letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.8 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE ──────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "44px" }}>
              <span className="section-label">Why Cash?</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
                Cash Offer vs. Traditional Listing
              </h2>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "14px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", background: "var(--off-white)", borderBottom: "1px solid var(--border-light)" }}>
                <div style={{ padding: "12px 22px" }} />
                <div style={{ padding: "12px 22px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--muted)", textAlign: "center" }}>Traditional</div>
                <div style={{ padding: "12px 22px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--blue)", textAlign: "center", background: "var(--blue-light)" }}>Highlander</div>
              </div>
              {[
                { label: "Offer timeline", trad: "Weeks to months", ours: "24 hours" },
                { label: "Repairs required", trad: "Usually yes", ours: "Never" },
                { label: "Showings", trad: "Many, over weeks", ours: "None" },
                { label: "Closing time", trad: "30–60 days", ours: "As fast as 7 days" },
                { label: "Agent commission", trad: "5–6%", ours: "$0" },
                { label: "Deal certainty", trad: "Can fall through", ours: "Guaranteed cash" },
                { label: "Sale price", trad: "Market — if it sells", ours: "Fair market value" },
              ].map((row, i) => (
                <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr 1fr", borderBottom: i < 6 ? "1px solid var(--border-light)" : "none", background: i % 2 === 0 ? "var(--white)" : "var(--warm-white)" }}>
                  <div style={{ padding: "15px 22px", fontSize: "13px", color: "var(--mid)", fontWeight: 500 }}>{row.label}</div>
                  <div style={{ padding: "15px 22px", fontSize: "13px", color: "var(--muted)", textAlign: "center" }}>{row.trad}</div>
                  <div style={{ padding: "15px 22px", fontSize: "13px", color: "var(--blue)", textAlign: "center", fontWeight: 600, background: "rgba(26,86,219,0.025)" }}>{row.ours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "52px" }}>
              <span className="section-label">Common Questions</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>
                FAQ
              </h2>
            </div>
            {faqs.map((item, i) => (
              <div key={item.q} style={{ paddingTop: "26px", paddingBottom: "26px", borderBottom: i < faqs.length - 1 ? "1px solid var(--border-light)" : "none" }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--black)", letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "10px" }}>{item.q}</h3>
                <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "16px" }}>
            Ready to See<br />Your Number?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "380px", margin: "0 auto 36px", lineHeight: 1.75 }}>
            Fair cash offer within 24 hours. No obligation, no pressure.
          </p>
          <OfferForm />
        </div>
      </section>
    </>
  );
}
