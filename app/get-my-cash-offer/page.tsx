"use client";
import SellForm from "./SellForm";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    label: "No repairs · No fees · No obligation",
    h1a: "GET MY",
    h1b: "OFFER.",
    sub: "Tell us about your property and what you're looking for. We'll reach out within 24 hours with your best option.",
    points: [
      { title: "Cash Offer", body: "Close in as little as 7 days. No repairs, no showings, no agent fees. We buy as-is." },
      { title: "Flex Equity Program", body: "We repair, stage, and list your home — you keep the upside without the hassle." },
      { title: "You decide, no pressure", body: "Tell us your situation and we'll walk through which path makes the most sense for you." },
    ],
    trustItems: ["Offer in 24 hours", "Close in 7 days", "$0 commissions", "Any condition"],
  },
  es: {
    label: "Sin reparaciones · Sin comisiones · Sin compromiso",
    h1a: "OBTENER MI",
    h1b: "OFERTA.",
    sub: "Cuéntanos sobre tu propiedad y lo que buscas. Nos comunicamos en 24 horas con tu mejor opción.",
    points: [
      { title: "Oferta en Efectivo", body: "Cierra en tan solo 7 días. Sin reparaciones, sin visitas, sin comisiones." },
      { title: "Programa Flex Equity", body: "Reparamos, amoblamos y listamos tu casa — tú te quedas con las ganancias sin el estrés." },
      { title: "Tú decides, sin presión", body: "Cuéntanos tu situación y te explicamos cuál camino tiene más sentido para ti." },
    ],
    trustItems: ["Oferta en 24 horas", "Cierre en 7 días", "$0 comisiones", "Cualquier condición"],
  },
};

export default function GetMyOfferPage() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section style={{ background: "var(--off-white)", minHeight: "calc(100vh - 68px)", borderTop: "1px solid var(--border-light)" }}>
      <div className="section" style={{ paddingTop: "56px", paddingBottom: "72px" }}>
        <div className="form-with-sidebar">

          {/* ── LEFT: heading + trust points ── */}
          <div style={{ paddingTop: "8px" }}>
            <span className="section-label">{c.label}</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 5vw, 62px)", color: "var(--black)", letterSpacing: "2px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "18px" }}>
              {c.h1a}<br />
              <span style={{ color: "var(--blue)" }}>{c.h1b}</span>
            </h1>
            <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "32px" }}>{c.sub}</p>

            {/* Trust badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "36px" }}>
              {c.trustItems.map((item) => (
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
              {c.points.map((item) => (
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
          <SellForm />
        </div>
      </div>
    </section>
  );
}
