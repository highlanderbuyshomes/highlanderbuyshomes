"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

const t = {
  en: {
    label: "Who We Are",
    h1a: "ABOUT",
    h1b: "HIGHLANDER",
    sub: "A real estate investment operation built on execution, transparency, and fair dealing. We buy homes directly — no listings, no agents, no waiting.",
    storyLabel: "Our Story",
    storyH2a: "Built to Buy.",
    storyH2b: "Built for You.",
    storyP: [
      "Highlander REI was founded on a straightforward premise: homeowners deserve a direct, honest option when they need to sell. No listing process, no repairs, no months of uncertainty.",
      "Over the last six years we've built direct relationships with homeowners, agents, and wholesalers across Phoenix, AZ and Dallas, TX — two of the strongest residential real estate markets in the country.",
      "We're a small, focused team. We buy good properties, treat sellers fairly, and close when we say we will.",
    ],
    stats: [
      { val: "6+", label: "Years Buying Homes", sub: "Direct acquisitions in Phoenix & Dallas since 2019" },
      { val: "PHX + DFW", label: "Active Markets", sub: "Two of the fastest-moving residential markets in the U.S." },
      { val: "14 days", label: "Minimum Close Time", sub: "Fast, certain, all-cash closings on your schedule" },
      { val: "As-Is", label: "We Buy Any Condition", sub: "No repairs, no cleaning, no staging — ever" },
    ],
    valuesLabel: "How We Operate",
    valuesH2: "Our Principles",
    values: [
      { title: "We're Direct", body: "No runaround, no mystery offers. We tell you how we calculated your offer and answer every question honestly." },
      { title: "We Close What We Open", body: "If we make you an offer and you accept, we close. No last-minute price drops, no financing falling through." },
      { title: "We Buy As-Is", body: "Your home's condition is priced into our offer. You never need to make a single repair before we close." },
      { title: "You Choose the Timeline", body: "Fast or slow — your call. We can move in 14 days or give you 90 days to get organized." },
    ],
    ctaH2: "Let's Talk.",
    ctaSub: "Whether you're ready to sell or just exploring your options, we're happy to have that conversation — no pressure, no obligation.",
    ctaBtn: "Get My Cash Offer",
  },
  es: {
    label: "Quiénes Somos",
    h1a: "SOBRE",
    h1b: "HIGHLANDER",
    sub: "Una operación de inversión inmobiliaria construida sobre la ejecución, la transparencia y el trato justo. Compramos casas directamente — sin listados, sin agentes, sin esperas.",
    storyLabel: "Nuestra Historia",
    storyH2a: "Construidos Para Comprar.",
    storyH2b: "Construidos Para Ti.",
    storyP: [
      "Highlander REI fue fundada con una premisa clara: los propietarios merecen una opción directa y honesta cuando necesitan vender. Sin proceso de listado, sin reparaciones, sin meses de incertidumbre.",
      "Durante los últimos seis años hemos construido relaciones directas con propietarios, agentes y mayoristas en Phoenix, AZ y Dallas, TX — dos de los mercados inmobiliarios residenciales más sólidos del país.",
      "Somos un equipo pequeño y enfocado. Compramos buenas propiedades, tratamos a los vendedores de manera justa y cerramos cuando decimos que lo haremos.",
    ],
    stats: [
      { val: "6+", label: "Años Comprando Casas", sub: "Adquisiciones directas en Phoenix y Dallas desde 2019" },
      { val: "PHX + DFW", label: "Mercados Activos", sub: "Dos de los mercados residenciales de mayor movimiento en EE. UU." },
      { val: "14 días", label: "Tiempo Mínimo de Cierre", sub: "Cierres rápidos, seguros y en efectivo según tu agenda" },
      { val: "Tal Como Está", label: "Compramos en Cualquier Condición", sub: "Sin reparaciones, sin limpieza, sin staging — nunca" },
    ],
    valuesLabel: "Cómo Operamos",
    valuesH2: "Nuestros Principios",
    values: [
      { title: "Somos Directos", body: "Sin rodeos, sin ofertas misteriosas. Te decimos cómo calculamos tu oferta y respondemos cada pregunta honestamente." },
      { title: "Cerramos Lo Que Abrimos", body: "Si te hacemos una oferta y la aceptas, cerramos. Sin bajas de precio de último momento, sin problemas de financiamiento." },
      { title: "Compramos Tal Como Está", body: "La condición de tu casa está incluida en nuestra oferta. Nunca necesitas hacer una sola reparación antes de cerrar." },
      { title: "Tú Eliges el Plazo", body: "Rápido o lento — tú decides. Podemos movernos en 14 días o darte 90 días para organizarte." },
    ],
    ctaH2: "Hablemos.",
    ctaSub: "Ya sea que estés listo para vender o solo explorando tus opciones, estamos felices de tener esa conversación — sin presión, sin compromiso.",
    ctaBtn: "Obtener Mi Oferta en Efectivo",
  },
};

export default function AboutPage() {
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
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.5)", maxWidth: "520px", lineHeight: 1.8, fontWeight: 300 }}>{c.sub}</p>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────── */}
      <section style={{ background: "var(--white)" }}>
        <div className="section">
          <div className="two-col">
            <div>
              <span className="section-label">{c.storyLabel}</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 48px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1.05, marginBottom: "22px" }}>
                {c.storyH2a}<br />{c.storyH2b}
              </h2>
              {c.storyP.map((p, i) => (
                <p key={i} style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.8, marginBottom: i < 2 ? "16px" : 0 }}>{p}</p>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {c.stats.map((s) => (
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
            <span className="section-label">{c.valuesLabel}</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 52px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1 }}>{c.valuesH2}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 56px", maxWidth: "900px", margin: "0 auto" }}>
            {c.values.map((v, i) => (
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
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 60px)", color: "var(--black)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "16px" }}>{c.ctaH2}</h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "400px", margin: "0 auto 32px", lineHeight: 1.75 }}>{c.ctaSub}</p>
          <Link href="/get-my-cash-offer" className="btn-blue btn-blue-lg">{c.ctaBtn}</Link>
        </div>
      </section>
    </>
  );
}
