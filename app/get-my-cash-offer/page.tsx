"use client";
import SellForm from "./SellForm";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    label: "No repairs · No fees · No obligation",
    h1a: "GET MY",
    h1b: "CASH OFFER.",
    sub: "Fill out the form and we'll reach out within 24 hours with your competitive, no-obligation cash offer.",
    points: [
      { title: "Free & no obligation", body: "Getting an offer costs nothing and you're never required to accept." },
      { title: "Any condition, any situation", body: "We buy as-is. No repairs, no cleaning, no staging required." },
      { title: "Close when you're ready", body: "7 days or 90 — you set the date. We work around your schedule." },
    ],
    trustItems: ["Offer in 24 hours", "Close in 7 days", "$0 commissions", "Any condition"],
  },
  es: {
    label: "Sin reparaciones · Sin comisiones · Sin compromiso",
    h1a: "OBTENER MI",
    h1b: "OFERTA EN EFECTIVO.",
    sub: "Completa el formulario y nos comunicaremos dentro de 24 horas con tu oferta competitiva en efectivo, sin compromiso.",
    points: [
      { title: "Gratis y sin compromiso", body: "Obtener una oferta no cuesta nada y nunca estás obligado a aceptarla." },
      { title: "Cualquier condición, cualquier situación", body: "Compramos tal como está. Sin reparaciones, sin limpieza, sin staging." },
      { title: "Cierra cuando estés listo", body: "7 días o 90 — tú fijas la fecha. Nos adaptamos a tu agenda." },
    ],
    trustItems: ["Oferta en 24 horas", "Cierre en 7 días", "$0 comisiones", "Cualquier condición"],
  },
};

export default function GetMyCashOfferPage() {
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
