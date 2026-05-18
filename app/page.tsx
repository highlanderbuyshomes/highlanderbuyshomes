"use client";
import Link from "next/link";
import OfferForm from "@/components/OfferForm";
import OfferFormEs from "@/components/OfferFormEs";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    badge: "Phoenix, AZ · Dallas, TX · Active Markets",
    h1a: "GET A CASH",
    h1b: "OFFER ON",
    h1c: "YOUR HOME.",
    sub: "No repairs. No showings. No agent fees. Close in as little as 14 days — entirely on your schedule.",
    checks: ["Free offer", "No obligation", "Offer in 24 hours", "All-cash closing"],
    stats: [
      { val: "24 hrs", label: "Offer turnaround" },
      { val: "14 days", label: "Minimum close time" },
      { val: "PHX + DFW", label: "Active markets" },
      { val: "$0", label: "Agent commissions" },
    ],
    processLabel: "The Process",
    processH2: "Three Steps to Sold",
    steps: [
      { n: "01", title: "Tell Us About Your Home", body: "Enter your address and answer a few quick questions about your property. No commitment, no pressure — takes less than 3 minutes." },
      { n: "02", title: "Receive Your Cash Offer", body: "We review your property and send a competitive, all-cash, no-obligation offer within 24 hours." },
      { n: "03", title: "Close on Your Timeline", body: "You pick the closing date. We can close in as little as 14 days, or give you 60+ days if you need more time." },
    ],
    fullProcess: "See the full process →",
    whyLabel: "Why Choose Us",
    whyH2: "Traditional Sale vs. Highlander",
    tradHeader: "Traditional Sale",
    compareRows: [
      { label: "Time to get an offer", traditional: "Weeks", highlander: "Within 24 hours" },
      { label: "Repairs required", traditional: "Usually yes", highlander: "Never" },
      { label: "Showings & open houses", traditional: "Many", highlander: "None" },
      { label: "Closing timeline", traditional: "30–60 days", highlander: "As fast as 14 days" },
      { label: "Deal fall-through risk", traditional: "Common", highlander: "Guaranteed cash" },
      { label: "Agent commissions", traditional: "5–6%", highlander: "$0" },
    ],
    getCta: "Get My Cash Offer",
    agentLabel: "Agent Program",
    agentH2: ["Are You an Agent", "or Wholesaler?"],
    agentBody: "We work directly with real estate agents and wholesalers. Full commission paid, reliable all-cash closings in as little as 14 days.",
    agentCta: "Learn About Our Agent Program",
    agentItems: [
      { n: "01", title: "Full Commission", body: "We never cut your commission. You bring the deal, we handle everything else." },
      { n: "02", title: "Certain Closings", body: "No financing contingencies, no appraisal risk. Cash means your deal actually closes." },
      { n: "03", title: "Fast Turnaround", body: "Close in 14–21 days. Happy clients refer more clients — it compounds." },
    ],
    marketsLabel: "Where We Buy",
    marketsH2: "Our Markets",
    markets: [
      { city: "Phoenix", state: "AZ", sub: "Maricopa County & surrounding areas", body: "We actively buy across the Phoenix metro including Scottsdale, Tempe, Mesa, Chandler, Gilbert, and Glendale.", cta: "Get an offer in Phoenix →" },
      { city: "Dallas", state: "TX", sub: "DFW Metroplex", body: "We purchase throughout Dallas–Fort Worth including Irving, Garland, Plano, Arlington, and surrounding suburbs.", cta: "Get an offer in Dallas →" },
    ],
    ctaLabel: "Ready to Sell?",
    ctaH2: ["See What Your", "Home Is Worth."],
    ctaBody: "Free, no-obligation cash offer in 24 hours. No repairs. No fees.",
  },
  es: {
    badge: "Phoenix, AZ · Dallas, TX · Mercados Activos",
    h1a: "OBTÉN UNA",
    h1b: "OFERTA EN",
    h1c: "EFECTIVO.",
    sub: "Sin reparaciones. Sin visitas. Sin comisiones. Cierra en tan solo 14 días — a tu ritmo.",
    checks: ["Oferta gratis", "Sin obligación", "Oferta en 24 horas", "Cierre garantizado"],
    stats: [
      { val: "24 hrs", label: "Tiempo de respuesta" },
      { val: "14 días", label: "Tiempo mínimo de cierre" },
      { val: "PHX + DFW", label: "Mercados activos" },
      { val: "$0", label: "Comisiones de agente" },
    ],
    processLabel: "El Proceso",
    processH2: "Tres Pasos Para Vender",
    steps: [
      { n: "01", title: "Cuéntanos Sobre Tu Casa", body: "Ingresa tu dirección y responde unas preguntas básicas. Sin compromiso, sin presión — toma menos de 3 minutos." },
      { n: "02", title: "Recibe Tu Oferta en Efectivo", body: "Revisamos tu propiedad y enviamos una oferta competitiva en efectivo, sin condiciones, en menos de 24 horas." },
      { n: "03", title: "Cierra en Tu Fecha", body: "Tú eliges la fecha de cierre. Podemos cerrar en tan solo 14 días o esperar más de 60 días si lo necesitas." },
    ],
    fullProcess: "Ver el proceso completo →",
    whyLabel: "¿Por Qué Elegirnos?",
    whyH2: "Venta Tradicional vs. Highlander",
    tradHeader: "Venta Tradicional",
    compareRows: [
      { label: "Tiempo para recibir oferta", traditional: "Semanas", highlander: "En 24 horas" },
      { label: "Reparaciones requeridas", traditional: "Generalmente sí", highlander: "Nunca" },
      { label: "Visitas y open houses", traditional: "Muchas", highlander: "Ninguna" },
      { label: "Tiempo de cierre", traditional: "30–60 días", highlander: "Tan rápido como 14 días" },
      { label: "Riesgo de cancelación", traditional: "Común", highlander: "Efectivo garantizado" },
      { label: "Comisión de agente", traditional: "5–6%", highlander: "$0" },
    ],
    getCta: "Obtener Mi Oferta",
    agentLabel: "Programa para Agentes",
    agentH2: ["¿Eres Agente", "o Mayorista?"],
    agentBody: "Trabajamos directamente con agentes inmobiliarios y mayoristas. Comisión completa pagada, cierres garantizados en efectivo en tan solo 14 días.",
    agentCta: "Conoce Nuestro Programa para Agentes",
    agentItems: [
      { n: "01", title: "Comisión Completa", body: "Nunca reducimos tu comisión. Tú traes el trato, nosotros manejamos el resto." },
      { n: "02", title: "Cierres Garantizados", body: "Sin contingencias de financiamiento. El efectivo garantiza que el trato se cierra." },
      { n: "03", title: "Cierre Rápido", body: "Cerramos en 14–21 días. Clientes satisfechos refieren más clientes — se multiplica." },
    ],
    marketsLabel: "Dónde Compramos",
    marketsH2: "Nuestros Mercados",
    markets: [
      { city: "Phoenix", state: "AZ", sub: "Condado Maricopa y áreas vecinas", body: "Compramos activamente en toda el área de Phoenix incluyendo Scottsdale, Tempe, Mesa, Chandler, Gilbert y Glendale.", cta: "Obtener oferta en Phoenix →" },
      { city: "Dallas", state: "TX", sub: "Área Metropolitana DFW", body: "Compramos en toda el área de Dallas–Fort Worth incluyendo Irving, Garland, Plano, Arlington y suburbios cercanos.", cta: "Obtener oferta en Dallas →" },
    ],
    ctaLabel: "¿Listo para Vender?",
    ctaH2: ["Descubre Cuánto", "Vale Tu Casa."],
    ctaBody: "Oferta en efectivo gratis, sin obligación en 24 horas. Sin reparaciones. Sin comisiones.",
  },
};

export default function HomePage() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--white)", paddingTop: "80px", paddingBottom: "88px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--blue-light)", border: "1px solid var(--blue-border)", borderRadius: "20px", padding: "5px 14px", marginBottom: "28px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: "11px", color: "var(--blue)", letterSpacing: "0.8px", fontWeight: 600 }}>{c.badge}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 9vw, 104px)", color: "var(--black)", letterSpacing: "2px", lineHeight: 0.92, marginBottom: "24px", textTransform: "uppercase" }}>
            {c.h1a}<br />
            <span style={{ color: "var(--blue)" }}>{lang === "en" ? "OFFER" : "OFERTA"}</span> {lang === "en" ? "ON" : "EN"}<br />
            {c.h1c}
          </h1>
          <p style={{ fontSize: "18px", color: "var(--mid)", maxWidth: "500px", margin: "0 auto 40px", lineHeight: 1.75, fontWeight: 300 }}>{c.sub}</p>
          {lang === "es" ? <OfferFormEs /> : <OfferForm />}
          <div style={{ display: "flex", justifyContent: "center", gap: "28px", marginTop: "20px", flexWrap: "wrap" }}>
            {c.checks.map((badge) => (
              <div key={badge} style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "12px", color: "var(--muted)" }}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="6" stroke="var(--blue)" strokeWidth="1" />
                  <path d="M4 6.5l1.8 1.8L9 4.5" stroke="var(--blue)" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)", borderBottom: "1px solid var(--border-light)" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "repeat(4, 1fr)" }}>
          {c.stats.map((s, i, arr) => (
            <div key={s.label} style={{ padding: "28px 16px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid var(--border-light)" : "none" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--black)", letterSpacing: "1px", lineHeight: 1, marginBottom: "5px" }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.8px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <span className="section-label">{c.processLabel}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.processH2}</h2>
          </div>
          <div className="three-col">
            {c.steps.map((s) => (
              <div key={s.n} className="hover-lift" style={{ background: "var(--off-white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "36px 28px", position: "relative", overflow: "hidden" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "88px", color: "rgba(26,86,219,0.05)", position: "absolute", top: "4px", right: "14px", lineHeight: 1, userSelect: "none" }}>{s.n}</div>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "var(--blue-light)", border: "1px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "14px", color: "var(--blue)", letterSpacing: "1px" }}>{s.n}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--black)", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "12px", lineHeight: 1.1 }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8 }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/cash-offer" style={{ fontSize: "14px", color: "var(--blue)", textDecoration: "none", fontWeight: 500 }}>{c.fullProcess}</Link>
          </div>
        </div>
      </section>

      {/* ── COMPARE ──────────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-label">{c.whyLabel}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.whyH2}</h2>
          </div>
          <div style={{ maxWidth: "820px", margin: "0 auto", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", overflow: "hidden" }}>
            <div className="compare-row" style={{ background: "var(--off-white)" }}>
              <div style={{ padding: "14px 24px" }} />
              <div style={{ padding: "14px 24px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--muted)", textAlign: "center" }}>{c.tradHeader}</div>
              <div style={{ padding: "14px 24px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.8px", color: "var(--blue)", textAlign: "center", background: "var(--blue-light)" }}>Highlander</div>
            </div>
            {c.compareRows.map((row, i) => (
              <div key={row.label} className="compare-row" style={{ background: i % 2 === 0 ? "var(--white)" : "var(--warm-white)" }}>
                <div style={{ padding: "16px 24px", fontSize: "13.5px", color: "var(--mid)", fontWeight: 500 }}>{row.label}</div>
                <div style={{ padding: "16px 24px", fontSize: "13px", color: "var(--muted)", textAlign: "center" }}>{row.traditional}</div>
                <div style={{ padding: "16px 24px", fontSize: "13px", color: "var(--blue)", textAlign: "center", fontWeight: 600, background: "rgba(26,86,219,0.025)" }}>{row.highlander}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/sell" className="btn-blue btn-blue-lg">{c.getCta}</Link>
          </div>
        </div>
      </section>

      {/* ── FOR AGENTS ───────────────────────────────────────── */}
      <section style={{ background: "var(--near-black)" }}>
        <div className="section">
          <div className="two-col">
            <div>
              <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>{c.agentLabel}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 4vw, 56px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "20px" }}>
                {c.agentH2[0]}<br />{c.agentH2[1]}
              </h2>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: "440px", marginBottom: "28px" }}>{c.agentBody}</p>
              <Link href="/for-agents" className="btn-blue btn-blue-lg">{c.agentCta}</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {c.agentItems.map((item) => (
                <div key={item.n} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius-sm)", padding: "20px 22px", display: "flex", gap: "16px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "var(--blue)", letterSpacing: "1px", flexShrink: 0, marginTop: "2px" }}>{item.n}</span>
                  <div>
                    <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--white)", marginBottom: "4px" }}>{item.title}</div>
                    <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>{item.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── MARKETS ──────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <span className="section-label">{c.marketsLabel}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.marketsH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", maxWidth: "840px", margin: "0 auto" }}>
            {c.markets.map((m) => (
              <div key={m.city} className="hover-lift" style={{ background: "var(--off-white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "52px", color: "var(--black)", letterSpacing: "2px", lineHeight: 1 }}>{m.city}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--blue)", letterSpacing: "2px", lineHeight: 1.35 }}>{m.state}</span>
                </div>
                <p style={{ fontSize: "11px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "16px" }}>{m.sub}</p>
                <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "20px" }}>{m.body}</p>
                <Link href="/sell" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "var(--blue)", textDecoration: "none", fontWeight: 600 }}>{m.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ textAlign: "center" }}>
          <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>{c.ctaLabel}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6vw, 72px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "18px" }}>
            {c.ctaH2[0]}<br />{c.ctaH2[1]}
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.45)", maxWidth: "400px", margin: "0 auto 40px", lineHeight: 1.75, fontWeight: 300 }}>{c.ctaBody}</p>
          {lang === "es" ? <OfferFormEs /> : <OfferForm />}
        </div>
      </section>
    </>
  );
}
