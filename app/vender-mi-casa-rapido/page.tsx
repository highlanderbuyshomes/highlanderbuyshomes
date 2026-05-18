import type { Metadata } from "next";
import Link from "next/link";
import OfferFormEs from "@/components/OfferFormEs";

// TODO: replace with your real business phone number
const PHONE = "(XXX) XXX-XXXX";
const PHONE_HREF = "tel:+1XXXXXXXXXX";

export const metadata: Metadata = {
  title: "Vender Mi Casa Rápido Phoenix Arizona | Compramos Casas Phoenix AZ y Dallas TX",
  description:
    "¿Quieres vender tu casa rápido en Phoenix AZ o Dallas TX? Recibe una oferta en efectivo en 24 horas. Sin reparaciones, sin comisiones, sin agentes. Cerramos en 7 días. Llámanos hoy.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    languages: {
      "en-US": "https://highlanderbuyshomes.com/cash-offer",
      "es-US": "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    },
  },
  openGraph: {
    title: "Vender Mi Casa Rápido Phoenix Arizona — Compramos Casas en Efectivo",
    description:
      "Oferta en efectivo en 24 horas. Sin reparaciones, sin comisiones. Cerramos en 7 días en Phoenix AZ y Dallas TX.",
    url: "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    siteName: "Highlander Buys Homes",
    locale: "es_US",
    type: "website",
  },
};

const faqItems = [
  {
    q: "¿Cómo sé que la oferta es justa?",
    a: "Nuestras ofertas se basan en el valor real del mercado en tu área, el estado de la propiedad y ventas recientes comparables. No hacemos ofertas ridículas — queremos que tengas una experiencia positiva y que nos recomiendes.",
  },
  {
    q: "¿Necesito limpiar o reparar la casa antes de vender?",
    a: "No. Compramos la propiedad exactamente como está. Puedes dejar lo que no quieras — nosotros nos encargamos de todo después del cierre. Sin inspecciones, sin reparaciones, sin limpieza.",
  },
  {
    q: "¿Cuánto tiempo toma el proceso para vender mi casa rápido?",
    a: "Desde que ingresas tu dirección hasta que tienes el dinero en tu cuenta, el proceso puede tomar tan solo 7 días. El tiempo promedio es de 14 a 21 días según tu situación y la fecha de cierre que elijas.",
  },
  {
    q: "¿Hay algún costo por recibir la oferta en efectivo?",
    a: "Absolutamente ninguno. La oferta es gratis, sin compromiso y sin presión. No cobramos comisiones, no hay costos de cierre para ti, y si decides no vender, no hay ningún problema.",
  },
  {
    q: "¿Compran casas en mal estado o que necesitan muchas reparaciones?",
    a: "Sí. Compramos casas en cualquier condición — con daños por agua, fuego, moho, problemas de cimientos, o que simplemente necesiten una remodelación completa. No tienes que gastar un solo peso en reparaciones.",
  },
  {
    q: "¿Compran casas con deudas o problemas legales?",
    a: "Sí. Trabajamos con casas que tienen hipotecas pendientes, embargos, impuestos atrasados, problemas de herencia, o situaciones de ejecución hipotecaria. Nuestro equipo tiene experiencia resolviendo situaciones complicadas.",
  },
  {
    q: "¿En qué ciudades de Phoenix y Dallas compran casas?",
    a: "Compramos en toda el área metropolitana de Phoenix — incluyendo Scottsdale, Mesa, Chandler, Gilbert, Glendale, Tempe, Peoria, Avondale, Surprise y Goodyear. En Dallas cubrimos Fort Worth, Arlington, Garland, Irving, Plano, Frisco, McKinney y más.",
  },
  {
    q: "¿Qué diferencia hay entre vender con Highlander versus un agente inmobiliario?",
    a: "Con un agente tradicional pagas 5–6% en comisiones, esperas meses para cerrar, y tienes que hacer reparaciones antes de listar. Con Highlander no pagas comisiones, recibes efectivo en 24 horas y cierras cuando tú decides — sin reparaciones ni visitas.",
  },
];

const stats = [
  { val: "24 hrs", label: "Recibes tu oferta en efectivo" },
  { val: "7 días", label: "Tiempo mínimo para cerrar" },
  { val: "$0", label: "En comisiones o reparaciones" },
  { val: "100%", label: "Efectivo garantizado al cierre" },
];

const steps = [
  {
    num: "01",
    title: "Cuéntanos sobre tu propiedad",
    desc: "Ingresa tu dirección. No necesitas llenar formularios extensos ni esperar visitas de inspección. Respondemos el mismo día.",
    bullets: [
      "Sin inspecciones complicadas",
      "Sin formularios extensos",
      "Respuesta el mismo día hábil",
    ],
  },
  {
    num: "02",
    title: "Recibe tu oferta en efectivo",
    desc: "En menos de 24 horas tendrás una oferta justa basada en el mercado real — sin condiciones, sin sorpresas, sin presión para aceptar.",
    bullets: [
      "Precio justo basado en el mercado",
      "Sin deducciones ocultas",
      "Sin obligación de aceptar",
    ],
  },
  {
    num: "03",
    title: "Tú eliges la fecha de cierre",
    desc: "Podemos cerrar en tan solo 7 días, o esperar hasta que estés listo. El dinero llega directo a ti — sin sorpresas en el último momento.",
    bullets: [
      "Cierre desde 7 días hábiles",
      "Fecha flexible según tus necesidades",
      "Dinero efectivo garantizado al cierre",
    ],
  },
];

const situations = [
  {
    title: "Casa heredada",
    desc: "¿Heredaste una propiedad que no puedes o no quieres mantener? Manejamos situaciones de herencia complicadas — con o sin testamento — y compramos rápido para que no sigas cargando con ese peso.",
  },
  {
    title: "Riesgo de ejecución hipotecaria",
    desc: "Si estás atrasado en los pagos de la hipoteca, actuar rápido puede proteger tu crédito y tu historial. Te ayudamos a salir de la situación con dignidad antes de que el banco tome acción.",
  },
  {
    title: "Divorcio o separación",
    desc: "Cuando una pareja se separa, la casa suele ser el mayor obstáculo para seguir adelante. Compramos rápido, sin complicaciones, para que ambas partes puedan cerrar ese capítulo.",
  },
  {
    title: "Reubicación o mudanza urgente",
    desc: "¿Conseguiste trabajo en otra ciudad o necesitas moverte pronto? No tienes que esperar meses. Compramos tu casa para que puedas mudarte sin cargar con la propiedad desde lejos.",
  },
  {
    title: "Casa que necesita reparaciones",
    desc: "No tienes que invertir ni un peso en arreglos. Compramos casas con daños por agua, moho, fuego, problemas eléctricos o de plomería — en cualquier condición, tal como está.",
  },
  {
    title: "Inquilinos problemáticos o propiedad vacante",
    desc: "¿Cansado de lidiar con inquilinos que no pagan o de costear una propiedad vacía? Te compramos sin importar si la casa está ocupada, rentada o vacía.",
  },
];

const zeroCosts = [
  { label: "Comisión de agente", val: "$0", note: "Sin 5–6% de comisión" },
  { label: "Costos de cierre", val: "$0", note: "Los asumimos nosotros" },
  { label: "Reparaciones requeridas", val: "$0", note: "Compramos tal como está" },
  { label: "Visitas de inspección", val: "$0", note: "Sin interrupciones" },
];

const compareRows = [
  { label: "Oferta en efectivo", cash: "En menos de 24 horas", trad: "Semanas de espera" },
  { label: "Reparaciones", cash: "Ninguna — compramos así", trad: "Tú pagas antes de listar" },
  { label: "Comisión de agente", cash: "$0", trad: "5–6% del precio de venta" },
  { label: "Costos de cierre", cash: "$0 para ti", trad: "Miles de dólares" },
  { label: "Tiempo para cerrar", cash: "Desde 7 días", trad: "30–90 días en promedio" },
  { label: "Certeza del cierre", cash: "Garantizado — efectivo", trad: "El comprador puede echarse atrás" },
  { label: "Visitas a la casa", cash: "Sin showings ni open house", trad: "Múltiples visitas de extraños" },
];

const phoenixCities = [
  { name: "Scottsdale", slug: "scottsdale-arizona" },
  { name: "Mesa", slug: "mesa-arizona" },
  { name: "Chandler", slug: "chandler-arizona" },
  { name: "Gilbert", slug: "gilbert-arizona" },
  { name: "Glendale", slug: "glendale-arizona" },
  { name: "Tempe", slug: "tempe-arizona" },
  { name: "Peoria", slug: "peoria-arizona" },
  { name: "Avondale", slug: "avondale-arizona" },
  { name: "Surprise", slug: "surprise-arizona" },
  { name: "Goodyear", slug: "goodyear-arizona" },
];

const dallasCities = [
  { name: "Fort Worth", slug: "fort-worth-texas" },
  { name: "Arlington", slug: "arlington-texas" },
  { name: "Garland", slug: "garland-texas" },
  { name: "Irving", slug: "irving-texas" },
  { name: "Plano", slug: "plano-texas" },
  { name: "Frisco", slug: "frisco-texas" },
  { name: "McKinney", slug: "mckinney-texas" },
  { name: "Mesquite", slug: "mesquite-texas" },
  { name: "Denton", slug: "denton-texas" },
  { name: "Carrollton", slug: "carrollton-texas" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Highlander Buys Homes",
  alternateName: "Highlander REI LLC",
  url: "https://highlanderbuyshomes.com",
  description:
    "Compramos casas en efectivo en Phoenix Arizona y Dallas Texas. Oferta en 24 horas, cierre en 7 días. Sin reparaciones, sin comisiones.",
  areaServed: [
    { "@type": "City", name: "Phoenix", containedIn: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Scottsdale", containedIn: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Mesa", containedIn: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Chandler", containedIn: { "@type": "State", name: "Arizona" } },
    { "@type": "City", name: "Dallas", containedIn: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Fort Worth", containedIn: { "@type": "State", name: "Texas" } },
  ],
  knowsLanguage: ["en", "es"],
  serviceType: "Cash Home Buyer",
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "Spanish"],
    email: "invest@highlanderrei.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function VenderMiCasaRapidoPage() {
  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "72px 48px 64px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "5px 14px", marginBottom: "22px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0, display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.8px", fontWeight: 500 }}>Phoenix, AZ · Dallas, TX · Hablamos Español</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 6.5vw, 82px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 0.95, marginBottom: "18px" }}>
          VENDER MI CASA<br />RÁPIDO EN PHOENIX<br />ARIZONA Y DALLAS TX.
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "540px", margin: "0 auto 8px", lineHeight: 1.75 }}>
          Compramos casas en efectivo — oferta en 24 horas, cierre en tan solo 7 días. Sin reparaciones, sin agentes, sin comisiones.
        </p>
        <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.28)", marginBottom: "32px" }}>
          Sin costo · Sin obligación · Respuesta el mismo día
        </p>

        <OfferFormEs />

        {/* Phone CTA */}
        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>¿Prefieres hablar con alguien?</span>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: 700, color: "var(--white)", textDecoration: "none", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "8px", padding: "8px 16px" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 2.5C2 2.5 3 4.5 4.5 6S7.5 9 9.5 10c0 0 .5-.5 1-1s1.5-.5 1.5-.5.5 1 .5 1.5-1 1.5-2 1.5C6 11.5 2.5 8 2.5 4c0-1 .5-2 1.5-2 .5 0 1 .5 1 .5" stroke="var(--blue)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            {PHONE}
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden", maxWidth: "720px", margin: "48px auto 0" }}>
          {stats.map((s) => (
            <div key={s.val} style={{ background: "rgba(255,255,255,0.04)", padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.38)", marginTop: "5px", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── $0 COSTOS ────────────────────────────────────────── */}
      <section style={{ background: "var(--blue)", padding: "56px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
            $0 DE COSTOS PARA TI.
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.75)", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
            Sin comisiones. Sin costos de cierre. Sin reparaciones. Todo lo que recibes es tu dinero.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {zeroCosts.map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "24px 16px", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1, marginBottom: "6px" }}>{item.val}</div>
                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────────── */}
      <section className="section">
        <span className="section-label">Proceso simple</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
          ¿CÓMO PUEDO VENDER MI CASA<br />RÁPIDO EN PHOENIX?
        </h2>
        <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "540px", lineHeight: 1.7, marginBottom: "48px" }}>
          Tres pasos. Sin complicaciones. Sin sorpresas.
        </p>
        <div className="three-col">
          {steps.map((step) => (
            <div key={step.num} style={{ background: "var(--off-white)", borderRadius: "var(--radius)", padding: "32px 28px", border: "1px solid var(--border-light)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--border-mid)", letterSpacing: "1px", lineHeight: 1, marginBottom: "16px" }}>{step.num}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "10px" }}>{step.title}</div>
              <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.7, marginBottom: "16px" }}>{step.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                {step.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "var(--mid)" }}>
                    <span style={{ color: "var(--blue)", flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── COMPRAMOS TAL COMO ESTÁ ───────────────────────────── */}
      <section style={{ background: "var(--near-black)", padding: "72px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
            <div>
              <span style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(100,150,255,0.7)", marginBottom: "12px" }}>Sin reparaciones</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "20px" }}>
                COMPRAMOS TU CASA<br />TAL COMO ESTÁ.
              </h2>
              <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: "28px" }}>
                No importa el estado de tu propiedad. No importa si tiene daños, deudas, o problemas legales. Compramos casas que otros no quieren — y lo hacemos rápido.
              </p>
              <a href={PHONE_HREF} className="btn-blue" style={{ fontSize: "13px", padding: "11px 22px" }}>
                Llámanos Hoy — {PHONE}
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Daños por agua o inundación",
                "Daños por fuego o humo",
                "Problemas de moho o cimientos",
                "Código de construcción violado",
                "Impuestos atrasados o embargos",
                "Casa en proceso de herencia",
                "Inquilinos que no se quieren ir",
                "Casa que nunca fue remodelada",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", color: "rgba(255,255,255,0.65)" }}>
                  <span style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(26,86,219,0.3)", border: "1px solid rgba(26,86,219,0.5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "11px", color: "var(--blue)" }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SITUACIONES ──────────────────────────────────────── */}
      <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">¿En qué situación estás?</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
            ¿EN QUÉ SITUACIONES<br />COMPRAMOS CASAS?
          </h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "48px" }}>
            No importa tu situación — hemos visto de todo. Si necesitas vender, tenemos una solución para ti.
          </p>
          <div className="three-col">
            {situations.map((s) => (
              <div key={s.title} style={{ background: "var(--white)", borderRadius: "var(--radius)", padding: "28px 24px", border: "1px solid var(--border-light)" }}>
                <div style={{ width: "32px", height: "3px", background: "var(--blue)", borderRadius: "2px", marginBottom: "16px" }} />
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARACIÓN ──────────────────────────────────────── */}
      <section className="section">
        <span className="section-label">Compara tus opciones</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
          ¿POR QUÉ ELEGIR HIGHLANDER<br />PARA VENDER TU CASA?
        </h2>
        <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "480px", lineHeight: 1.7, marginBottom: "40px" }}>
          Nosotros vs. el proceso tradicional con agente inmobiliario.
        </p>
        <div style={{ borderRadius: "var(--radius)", border: "1px solid var(--border-light)", overflow: "hidden", maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--black)", padding: "16px 24px" }}>
            <div />
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Highlander</div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Agente tradicional</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "15px 24px", background: i % 2 === 0 ? "var(--white)" : "var(--off-white)", borderTop: "1px solid var(--border-light)", alignItems: "center" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--near-black)" }}>{row.label}</div>
              <div style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600, textAlign: "center" }}>{row.cash}</div>
              <div style={{ fontSize: "13px", color: "var(--mid)", textAlign: "center" }}>{row.trad}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MERCADOS + SUBURB LINKS ───────────────────────────── */}
      <section style={{ background: "var(--black)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(100,150,255,0.7)", marginBottom: "12px" }}>Dónde compramos casas</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 46px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
            ¿DÓNDE COMPRAMOS CASAS<br />EN PHOENIX Y DALLAS?
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)", marginBottom: "48px", maxWidth: "520px", lineHeight: 1.7 }}>
            Compramos en toda el área metropolitana — incluyendo los suburbios y ciudades vecinas. Haz clic en tu ciudad para ver más información.
          </p>
          <div className="two-col">
            {[
              { city: "Phoenix, Arizona", cities: phoenixCities },
              { city: "Dallas, Texas", cities: dallasCities },
            ].map((market) => (
              <div key={market.city} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius)", padding: "28px 24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--white)", letterSpacing: "1.5px", marginBottom: "20px" }}>{market.city}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {market.cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/compramos-casas/${c.slug}`}
                      style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", padding: "4px 10px", textDecoration: "none", transition: "color 0.15s" }}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="section">
        <span className="section-label">Preguntas frecuentes</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.5vw, 42px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "48px" }}>
          RESOLVEMOS TUS DUDAS<br />SOBRE VENDER TU CASA.
        </h2>
        <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column" }}>
          {faqItems.map((faq, i) => (
            <div key={i} style={{ padding: "24px 0", borderBottom: i < faqItems.length - 1 ? "1px solid var(--border-light)" : "none" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{faq.q}</div>
              <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ background: "var(--blue)", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 1, marginBottom: "16px" }}>
          LISTO PARA VENDER<br />TU CASA RÁPIDO.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", marginBottom: "36px", maxWidth: "460px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          Ingresa tu dirección y recibe una oferta en efectivo hoy mismo — o llámanos directamente para hablar con alguien ahora.
        </p>
        <OfferFormEs />
        <div style={{ marginTop: "20px" }}>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: 700, color: "var(--white)", textDecoration: "none", opacity: 0.85 }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2.5 3C2.5 3 3.5 5.5 5.5 7.5S8.5 10.5 11 12c0 0 .6-.6 1.2-1.2s1.8-.6 1.8-.6.6 1.2.6 1.8-1.2 1.8-2.4 1.8C6 13.8 2.2 10 2.2 5c0-1.2.6-2.4 1.8-2.4.6 0 1.8.6 1.8.6" stroke="var(--white)" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            {PHONE} — Llámanos Hoy
          </a>
        </div>
      </section>
    </>
  );
}
