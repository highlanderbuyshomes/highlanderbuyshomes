"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    label: "Agent Partner Program",
    h1a: "CLOSE MORE.",
    h1b: "EARN MORE.",
    sub: "Partner with Highlander as your preferred cash buyer. We pay full commission, move fast, and close when we say we will.",
    cta: "Submit a Deal",
    benefitsLabel: "Why Partner With Us",
    benefitsH2: "Built for Agents",
    benefits: [
      { n: "01", title: "Full Commission", body: "We never discount your commission. Bring us a deal and earn your full rate on every closing — no negotiation, no exceptions." },
      { n: "02", title: "Certain Closings", body: "No financing contingencies. No appraisal risk. Cash means your deal actually closes — and your clients leave with a good experience." },
      { n: "03", title: "Fast Turnaround", body: "Close in 14–21 days. Happy clients refer more clients — build a steady pipeline with a buyer you can count on every time." },
      { n: "04", title: "Direct Communication", body: "Work directly with our acquisition team — not a call center. Quick responses, clear timelines, no runaround." },
      { n: "05", title: "As-Is Purchases", body: "We buy in any condition. Distressed properties, tenant-occupied, probate, divorce — we handle situations most buyers won't touch." },
      { n: "06", title: "Flexible Timelines", body: "Your client needs 60 days to find their next place? Fine. Need to close in 10? Done. We work around your client's schedule." },
    ],
    processLabel: "The Process",
    processH2: "How to Submit a Deal",
    steps: [
      { n: "01", title: "Send Us the Property", body: "Share the address, listing details, or MLS info. A quick call works too. We'll tell you within a few hours if it fits our buy criteria." },
      { n: "02", title: "Get Our Offer", body: "We analyze the property and present an all-cash offer — typically within 24–48 hours. No back-and-forth, no wasted time." },
      { n: "03", title: "We Close, You Get Paid", body: "If your client accepts, we move straight to closing. Your commission is paid at the closing table, same as any traditional sale." },
    ],
    buyLabel: "What We Buy",
    buyH2a: "We Take On the",
    buyH2b: "Hard Ones.",
    buySub: "We specialize in properties other buyers pass on. Bring us your toughest listings and we'll give you a straight answer fast.",
    buyList: [
      "Distressed or heavily deferred maintenance",
      "Tenant-occupied properties",
      "Estate sales and probate",
      "Divorce-related sales",
      "Pre-foreclosure or behind on payments",
      "Fire, flood, or other damage",
      "Inherited properties",
      "Homes that didn't sell on the MLS",
    ],
    ctaLabel: "Ready to Work Together?",
    ctaH2a: "Submit Your",
    ctaH2b: "First Deal.",
    ctaSub: "We're actively buying in Phoenix and Dallas. Send us a property and we'll follow up same day.",
    ctaBtn: "Submit a Property →",
  },
  es: {
    label: "Programa de Socios para Agentes",
    h1a: "CIERRA MÁS.",
    h1b: "GANA MÁS.",
    sub: "Asóciate con Highlander como tu comprador en efectivo preferido. Pagamos comisión completa, actuamos rápido y cerramos cuando decimos que lo haremos.",
    cta: "Enviar un Trato",
    benefitsLabel: "Por Qué Asociarte Con Nosotros",
    benefitsH2: "Hecho Para Agentes",
    benefits: [
      { n: "01", title: "Comisión Completa", body: "Nunca descontamos tu comisión. Tráenos un trato y gana tu tarifa completa en cada cierre — sin negociación, sin excepciones." },
      { n: "02", title: "Cierres Seguros", body: "Sin contingencias de financiamiento. Sin riesgo de tasación. El efectivo significa que tu trato realmente cierra — y tus clientes se van con una buena experiencia." },
      { n: "03", title: "Respuesta Rápida", body: "Cierra en 14–21 días. Los clientes felices refieren más clientes — construye un flujo constante con un comprador en quien puedes confiar cada vez." },
      { n: "04", title: "Comunicación Directa", body: "Trabaja directamente con nuestro equipo de adquisiciones — no un call center. Respuestas rápidas, plazos claros, sin rodeos." },
      { n: "05", title: "Compras Tal Como Está", body: "Compramos en cualquier condición. Propiedades en dificultades, ocupadas por inquilinos, sucesiones, divorcios — manejamos situaciones que la mayoría de compradores no tocan." },
      { n: "06", title: "Plazos Flexibles", body: "¿Tu cliente necesita 60 días para encontrar su próxima casa? Bien. ¿Necesita cerrar en 10? Listo. Nos adaptamos al horario de tu cliente." },
    ],
    processLabel: "El Proceso",
    processH2: "Cómo Enviar un Trato",
    steps: [
      { n: "01", title: "Envíanos la Propiedad", body: "Comparte la dirección, detalles del listado o información del MLS. Una llamada rápida también funciona. Te diremos en pocas horas si cumple con nuestros criterios de compra." },
      { n: "02", title: "Recibe Nuestra Oferta", body: "Analizamos la propiedad y presentamos una oferta en efectivo — típicamente en 24–48 horas. Sin idas y vueltas, sin tiempo perdido." },
      { n: "03", title: "Cerramos, Tú Cobras", body: "Si tu cliente acepta, pasamos directamente al cierre. Tu comisión se paga en la mesa de cierre, igual que cualquier venta tradicional." },
    ],
    buyLabel: "Qué Compramos",
    buyH2a: "Nos Encargamos de",
    buyH2b: "los Más Difíciles.",
    buySub: "Nos especializamos en propiedades que otros compradores rechazan. Tráenos tus listados más difíciles y te daremos una respuesta directa rápidamente.",
    buyList: [
      "Propiedades en dificultades o con mantenimiento diferido",
      "Propiedades ocupadas por inquilinos",
      "Ventas de sucesiones y sucesorios",
      "Ventas relacionadas con divorcios",
      "Pre-ejecución hipotecaria o pagos atrasados",
      "Daño por incendio, inundación u otros",
      "Propiedades heredadas",
      "Casas que no se vendieron en el MLS",
    ],
    ctaLabel: "¿Listo Para Trabajar Juntos?",
    ctaH2a: "Envía Tu",
    ctaH2b: "Primer Trato.",
    ctaSub: "Estamos comprando activamente en Phoenix y Dallas. Envíanos una propiedad y te respondemos el mismo día.",
    ctaBtn: "Enviar una Propiedad →",
  },
};

export default function ForAgentsPage() {
  const { lang } = useLanguage();
  const c = t[lang];

  return (
    <>
      {/* ── HEADER ───────────────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        <div className="section" style={{ paddingBottom: "80px" }}>
          <span className="section-label" style={{ color: "var(--blue)" }}>{c.label}</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 80px)", color: "var(--white)", letterSpacing: "3px", lineHeight: 0.95, textTransform: "uppercase", marginBottom: "22px" }}>
            {c.h1a}<br /><span style={{ color: "var(--blue)" }}>{c.h1b}</span>
          </h1>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300, marginBottom: "36px" }}>{c.sub}</p>
          <Link href="/for-agents-and-wholesalers" className="btn-blue btn-blue-lg">{c.cta}</Link>
        </div>
      </section>

      {/* ── BENEFITS ─────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <span className="section-label">{c.benefitsLabel}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.benefitsH2}</h2>
          </div>
          <div className="three-col">
            {c.benefits.map((item) => (
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
              <span className="section-label">{c.processLabel}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.processH2}</h2>
            </div>
            {c.steps.map((s, i) => (
              <div key={s.n} style={{ display: "grid", gridTemplateColumns: "56px 1fr", gap: "24px", alignItems: "start", paddingBottom: "36px", marginBottom: "8px", borderBottom: i < c.steps.length - 1 ? "1px solid var(--border-light)" : "none" }}>
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
              <span className="section-label">{c.buyLabel}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "18px" }}>
                {c.buyH2a}<br />{c.buyH2b}
              </h2>
              <p style={{ fontSize: "14.5px", color: "var(--mid)", lineHeight: 1.8 }}>{c.buySub}</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {c.buyList.map((item) => (
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
          <span className="section-label" style={{ color: "rgba(255,255,255,0.35)" }}>{c.ctaLabel}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "18px" }}>
            {c.ctaH2a}<br />{c.ctaH2b}
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", maxWidth: "400px", margin: "0 auto 32px", lineHeight: 1.75 }}>{c.ctaSub}</p>
          <Link href="/for-agents-and-wholesalers" className="btn-blue btn-blue-lg">{c.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
