"use client";
import SellForm from "./SellForm";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    label: "No repairs · No fees · No obligation",
    h1a: "YOUR CASH OFFER",
    h1b: "STARTS HERE.",
    sub: "Fill out the form and we'll reach out within 24 hours with your competitive, no-obligation cash offer.",
    points: [
      { title: "Free & no obligation", body: "Getting an offer costs nothing and you're never required to accept." },
      { title: "Any condition, any situation", body: "We buy as-is. No repairs, no cleaning, no staging required." },
      { title: "Close when you're ready", body: "14 days or 90 — you set the date. We work around your schedule." },
    ],
  },
  es: {
    label: "Sin reparaciones · Sin comisiones · Sin compromiso",
    h1a: "TU OFERTA EN EFECTIVO",
    h1b: "COMIENZA AQUÍ.",
    sub: "Completa el formulario y nos comunicaremos dentro de 24 horas con tu oferta competitiva en efectivo, sin compromiso.",
    points: [
      { title: "Gratis y sin compromiso", body: "Obtener una oferta no cuesta nada y nunca estás obligado a aceptarla." },
      { title: "Cualquier condición, cualquier situación", body: "Compramos tal como está. Sin reparaciones, sin limpieza, sin staging." },
      { title: "Cierra cuando estés listo", body: "14 días o 90 — tú fijas la fecha. Nos adaptamos a tu agenda." },
    ],
  },
};

export default function SellPage() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <section style={{ background: "var(--off-white)", minHeight: "calc(100vh - 68px)", borderTop: "1px solid var(--border-light)" }}>
      <div className="section" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "64px", alignItems: "start", maxWidth: "1000px", margin: "0 auto" }}>
          {/* Left — heading + trust points */}
          <div style={{ paddingTop: "8px" }}>
            <span className="section-label">{c.label}</span>
            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 5vw, 64px)", color: "var(--black)", letterSpacing: "2px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "18px" }}>
              {c.h1a}<br />
              <span style={{ color: "var(--blue)" }}>{c.h1b}</span>
            </h1>
            <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "36px" }}>{c.sub}</p>
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

          {/* Right — form */}
          <SellForm />
        </div>
      </div>
    </section>
  );
}
