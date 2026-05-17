import type { Metadata } from "next";
import OfferFormEs from "@/components/OfferFormEs";

export const metadata: Metadata = {
  title: "Vender Mi Casa Rápido en Phoenix y Dallas | Highlander Buys Homes",
  description:
    "Recibe una oferta en efectivo por tu casa en menos de 24 horas. Sin reparaciones, sin agentes, sin comisiones. Cerramos en tan solo 7 días en Phoenix, AZ y Dallas, TX.",
  alternates: {
    canonical: "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    languages: {
      "en-US": "https://highlanderbuyshomes.com/how-it-works",
      "es-US": "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    },
  },
  openGraph: {
    title: "Vender Mi Casa Rápido — Oferta en Efectivo en Phoenix y Dallas",
    description:
      "Recibe una oferta en efectivo en menos de 24 horas. Sin reparaciones, sin comisiones. Cerramos en 7 días.",
    url: "https://highlanderbuyshomes.com/vender-mi-casa-rapido",
    siteName: "Highlander Buys Homes",
    locale: "es_US",
    type: "website",
  },
};

const stats = [
  { val: "24 hrs", label: "Para recibir tu oferta" },
  { val: "7 días", label: "Para cerrar la venta" },
  { val: "14–21 días", label: "Cierre típico" },
  { val: "$0", label: "En reparaciones o comisiones" },
];

const steps = [
  {
    num: "01",
    title: "Cuéntanos sobre tu propiedad",
    desc: "Ingresa tu dirección y comparte algunos detalles básicos. Sin compromiso, sin presión.",
    bullets: ["Sin visitas de inspección complicadas", "Sin formularios extensos", "Respondemos en el mismo día"],
  },
  {
    num: "02",
    title: "Recibe tu oferta en efectivo",
    desc: "En menos de 24 horas recibirás una oferta justa en efectivo — sin condiciones ni sorpresas.",
    bullets: ["Precio justo basado en el mercado", "Sin deducciones ocultas", "Sin obligación de aceptar"],
  },
  {
    num: "03",
    title: "Cierra en tu fecha elegida",
    desc: "Tú eliges la fecha de cierre. Podemos cerrar en tan solo 7 días o esperar hasta que estés listo.",
    bullets: ["Tan rápido como 7 días", "Fecha flexible según tus necesidades", "Recibe tu dinero al cierre"],
  },
];

const situations = [
  { title: "Herencia de propiedad", desc: "¿Heredaste una casa que no quieres mantener? Te compramos sin importar el estado o la situación legal." },
  { title: "Riesgo de ejecución hipotecaria", desc: "Si estás atrasado en pagos, actuar rápido puede proteger tu crédito. Te ayudamos a salir con dignidad." },
  { title: "Divorcio o separación", desc: "Necesitas cerrar este capítulo. Compramos rápido para que ambas partes puedan seguir adelante." },
  { title: "Reubicación o mudanza", desc: "¿Te cambias de ciudad o de estado? Nosotros compramos tu casa para que no cargues con ella desde lejos." },
  { title: "Casa que necesita reparaciones", desc: "No tienes que arreglar nada. Compramos en cualquier condición — desde pequeños daños hasta remodelaciones completas." },
  { title: "Casa vacante o rentada", desc: "¿Cansado de inquilinos o de pagar una propiedad vacía? Te compramos sin importar si está ocupada o no." },
];

const compareRows = [
  { label: "Oferta", cash: "En 24 horas", trad: "Semanas de espera" },
  { label: "Reparaciones", cash: "Ninguna — te compramos así", trad: "Tú pagas antes de listar" },
  { label: "Comisión de agente", cash: "$0", trad: "5–6% del precio de venta" },
  { label: "Cierre", cash: "Desde 7 días", trad: "30–60 días en promedio" },
  { label: "Incertidumbre", cash: "Ninguna — precio garantizado", trad: "El comprador puede echarse atrás" },
  { label: "Costos de cierre", cash: "Los cubrimos nosotros", trad: "Típicamente del comprador" },
];

const faqs = [
  {
    q: "¿Cómo sé que la oferta es justa?",
    a: "Nuestras ofertas se basan en el valor real del mercado en tu área, el estado de la propiedad y ventas recientes comparables. No hacemos ofertas ridículas — queremos que tengas una experiencia positiva y que nos recomiendes.",
  },
  {
    q: "¿Necesito limpiar o reparar la casa antes de vender?",
    a: "No. Compramos la propiedad exactamente como está. Deja lo que no quieras — nosotros nos encargamos de todo después del cierre.",
  },
  {
    q: "¿Cuánto tiempo toma el proceso?",
    a: "Desde que ingresas tu dirección hasta que tienes el dinero en tu cuenta, el proceso puede tomar tan solo 7 días. El tiempo promedio es de 14 a 21 días dependiendo de tu situación.",
  },
  {
    q: "¿Hay algún costo por recibir la oferta?",
    a: "Absolutamente ninguno. La oferta es gratis, sin compromiso y sin presión. Si decides no vender, no hay ningún problema.",
  },
  {
    q: "¿Compran propiedades en mal estado?",
    a: "Sí. Compramos casas en cualquier condición — con daños por agua, fuego, moho, o que simplemente necesiten una remodelación completa. No tienes que gastar un solo peso en reparaciones.",
  },
  {
    q: "¿Operan en mi ciudad?",
    a: "Compramos activamente en Phoenix, Arizona y Dallas, Texas — incluyendo todas las ciudades y suburbios del área metropolitana. Si no estás seguro, contáctanos y te lo decimos de inmediato.",
  },
];

export default function VenderMiCasaRapidoPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "80px 48px 72px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "5px 14px", marginBottom: "24px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", flexShrink: 0, display: "inline-block" }} />
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.8px", fontWeight: 500 }}>Phoenix, AZ · Dallas, TX</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 7vw, 88px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 0.95, marginBottom: "20px" }}>
          VENDE TU CASA<br />RÁPIDO Y SIN<br />COMPLICACIONES.
        </h1>
        <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto 16px", lineHeight: 1.75 }}>
          Oferta en efectivo en menos de 24 horas. Sin reparaciones, sin agentes, sin comisiones. Tú eliges cuándo cerrar.
        </p>
        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.3)", marginBottom: "36px" }}>
          Sin costo · Sin obligación · Respuesta el mismo día
        </p>
        <OfferFormEs />

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden", maxWidth: "720px", margin: "52px auto 0" }}>
          {stats.map((s) => (
            <div key={s.val} style={{ background: "rgba(255,255,255,0.04)", padding: "20px 16px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section">
        <span className="section-label">Proceso Simple</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 48px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "48px" }}>
          TRES PASOS PARA VENDER.
        </h2>
        <div className="three-col">
          {steps.map((step) => (
            <div key={step.num} style={{ background: "var(--off-white)", borderRadius: "var(--radius)", padding: "32px 28px", border: "1px solid var(--border-light)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--border-mid)", letterSpacing: "1px", lineHeight: 1, marginBottom: "16px" }}>{step.num}</div>
              <div style={{ fontSize: "16px", fontWeight: 700, color: "var(--near-black)", marginBottom: "10px" }}>{step.title}</div>
              <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.7, marginBottom: "16px" }}>{step.desc}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                {step.bullets.map((b) => (
                  <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "12.5px", color: "var(--mid)" }}>
                    <span style={{ color: "var(--blue)", marginTop: "1px", flexShrink: 0 }}>✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Compramos en cualquier situación */}
      <section style={{ background: "var(--off-white)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <span className="section-label">¿En qué situación estás?</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 48px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "48px" }}>
            COMPRAMOS EN CUALQUIER SITUACIÓN.
          </h2>
          <div className="three-col">
            {situations.map((s) => (
              <div key={s.title} style={{ background: "var(--white)", borderRadius: "var(--radius)", padding: "28px 24px", border: "1px solid var(--border-light)" }}>
                <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{s.title}</div>
                <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparación */}
      <section className="section">
        <span className="section-label">Compara tus opciones</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "40px" }}>
          NOSOTROS VS. AGENTE TRADICIONAL.
        </h2>
        <div style={{ borderRadius: "var(--radius)", border: "1px solid var(--border-light)", overflow: "hidden", maxWidth: "860px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "var(--black)", padding: "16px 24px" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px" }}></div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "var(--blue)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Highlander</div>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "1.5px", textAlign: "center" }}>Agente tradicional</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={row.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "16px 24px", background: i % 2 === 0 ? "var(--white)" : "var(--off-white)", borderTop: "1px solid var(--border-light)" }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--near-black)" }}>{row.label}</div>
              <div style={{ fontSize: "13px", color: "var(--blue)", fontWeight: 600, textAlign: "center" }}>{row.cash}</div>
              <div style={{ fontSize: "13px", color: "var(--mid)", textAlign: "center" }}>{row.trad}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mercados */}
      <section style={{ background: "var(--black)", padding: "80px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span style={{ display: "block", fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "rgba(100,150,255,0.7)", marginBottom: "12px" }}>Dónde compramos</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 4vw, 48px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "40px" }}>
            PHOENIX Y DALLAS.
          </h2>
          <div className="two-col">
            {[
              {
                city: "Phoenix, AZ",
                areas: ["Scottsdale", "Tempe", "Mesa", "Chandler", "Gilbert", "Glendale", "Peoria", "Avondale", "Surprise", "Goodyear"],
              },
              {
                city: "Dallas, TX",
                areas: ["Fort Worth", "Arlington", "Garland", "Irving", "Plano", "Frisco", "McKinney", "Mesquite", "Denton", "Carrollton"],
              },
            ].map((m) => (
              <div key={m.city} style={{ background: "rgba(255,255,255,0.04)", borderRadius: "var(--radius)", padding: "28px 24px", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", letterSpacing: "1.5px", marginBottom: "16px" }}>{m.city}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {m.areas.map((a) => (
                    <span key={a} style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.45)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "4px", padding: "3px 9px" }}>{a}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <span className="section-label">Preguntas frecuentes</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 44px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "40px" }}>
          RESOLVEMOS TUS DUDAS.
        </h2>
        <div style={{ maxWidth: "740px", display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ padding: "24px 0", borderBottom: i < faqs.length - 1 ? "1px solid var(--border-light)" : "none" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{faq.q}</div>
              <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.75 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section style={{ background: "var(--blue)", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px, 5vw, 64px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 1, marginBottom: "16px" }}>
          LISTO PARA VENDER.
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", marginBottom: "36px", maxWidth: "460px", margin: "0 auto 36px", lineHeight: 1.7 }}>
          Ingresa tu dirección y recibe una oferta en efectivo hoy mismo. Sin compromiso.
        </p>
        <OfferFormEs />
      </section>
    </>
  );
}
