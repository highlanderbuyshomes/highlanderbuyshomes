import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import OfferFormEs from "@/components/OfferFormEs";

const PHONE = "(XXX) XXX-XXXX";
const PHONE_HREF = "tel:+1XXXXXXXXXX";

const cities: Record<string, { name: string; state: string; stateAbbr: string; metro: string; nearCities: string[] }> = {
  "scottsdale-arizona": {
    name: "Scottsdale",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Phoenix", "Tempe", "Mesa", "Chandler"],
  },
  "mesa-arizona": {
    name: "Mesa",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Phoenix", "Chandler", "Gilbert", "Tempe"],
  },
  "chandler-arizona": {
    name: "Chandler",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Mesa", "Gilbert", "Tempe", "Phoenix"],
  },
  "gilbert-arizona": {
    name: "Gilbert",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Chandler", "Mesa", "Tempe", "Scottsdale"],
  },
  "glendale-arizona": {
    name: "Glendale",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Phoenix", "Peoria", "Avondale", "Surprise"],
  },
  "tempe-arizona": {
    name: "Tempe",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Phoenix", "Mesa", "Chandler", "Scottsdale"],
  },
  "peoria-arizona": {
    name: "Peoria",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Glendale", "Phoenix", "Surprise", "Avondale"],
  },
  "avondale-arizona": {
    name: "Avondale",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Glendale", "Peoria", "Goodyear", "Phoenix"],
  },
  "surprise-arizona": {
    name: "Surprise",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Peoria", "Glendale", "Goodyear", "Phoenix"],
  },
  "goodyear-arizona": {
    name: "Goodyear",
    state: "Arizona",
    stateAbbr: "AZ",
    metro: "Phoenix",
    nearCities: ["Avondale", "Surprise", "Peoria", "Phoenix"],
  },
  "fort-worth-texas": {
    name: "Fort Worth",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Arlington", "Irving", "Denton", "Dallas"],
  },
  "arlington-texas": {
    name: "Arlington",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Fort Worth", "Irving", "Garland", "Dallas"],
  },
  "garland-texas": {
    name: "Garland",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Plano", "Mesquite", "Irving", "Dallas"],
  },
  "irving-texas": {
    name: "Irving",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Arlington", "Fort Worth", "Carrollton", "Dallas"],
  },
  "plano-texas": {
    name: "Plano",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Frisco", "McKinney", "Garland", "Dallas"],
  },
  "frisco-texas": {
    name: "Frisco",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Plano", "McKinney", "Carrollton", "Dallas"],
  },
  "mckinney-texas": {
    name: "McKinney",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Frisco", "Plano", "Denton", "Dallas"],
  },
  "mesquite-texas": {
    name: "Mesquite",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Garland", "Irving", "Arlington", "Dallas"],
  },
  "denton-texas": {
    name: "Denton",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Fort Worth", "McKinney", "Frisco", "Dallas"],
  },
  "carrollton-texas": {
    name: "Carrollton",
    state: "Texas",
    stateAbbr: "TX",
    metro: "Dallas",
    nearCities: ["Irving", "Frisco", "Plano", "Dallas"],
  },
};

export function generateStaticParams() {
  return Object.keys(cities).map((ciudad) => ({ ciudad }));
}

export async function generateMetadata({ params }: { params: Promise<{ ciudad: string }> }): Promise<Metadata> {
  const { ciudad } = await params;
  const city = cities[ciudad];
  if (!city) return {};

  return {
    title: `Vender Mi Casa Rápido en ${city.name}, ${city.stateAbbr} | Compramos Casas ${city.name} en Efectivo`,
    description: `¿Quieres vender tu casa rápido en ${city.name}, ${city.state}? Recibe una oferta en efectivo en 24 horas. Sin reparaciones, sin comisiones, sin agentes. Cerramos en 7 días.`,
    alternates: {
      canonical: `https://highlanderbuyshomes.com/compramos-casas/${ciudad}`,
    },
    openGraph: {
      title: `Compramos Casas en ${city.name}, ${city.stateAbbr} — Oferta en Efectivo`,
      description: `Oferta en efectivo en 24 horas. Sin reparaciones, sin comisiones. Cerramos en 7 días en ${city.name}, ${city.state}.`,
      url: `https://highlanderbuyshomes.com/compramos-casas/${ciudad}`,
      locale: "es_US",
      type: "website",
    },
  };
}

export default async function CompraCiudadPage({ params }: { params: Promise<{ ciudad: string }> }) {
  const { ciudad } = await params;
  const city = cities[ciudad];
  if (!city) notFound();

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Highlander Buys Homes",
    url: "https://highlanderbuyshomes.com",
    description: `Compramos casas en efectivo en ${city.name}, ${city.state}. Oferta en 24 horas, cierre en 7 días.`,
    areaServed: [
      { "@type": "City", name: city.name, containedIn: { "@type": "State", name: city.state } },
      { "@type": "City", name: city.metro },
    ],
    knowsLanguage: ["en", "es"],
    serviceType: "Cash Home Buyer",
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
    mainEntity: [
      {
        "@type": "Question",
        name: `¿Compran casas en ${city.name}, ${city.stateAbbr}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Sí. Compramos casas en ${city.name} y en toda el área metropolitana de ${city.metro}. Oferta en efectivo en menos de 24 horas, cierre en tan solo 7 días.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Cuánto tiempo toma vender mi casa en ${city.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `El proceso puede tomar tan solo 7 días desde que recibes tu oferta hasta el cierre. El tiempo promedio en ${city.name} es de 14 a 21 días según tu situación.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Necesito reparar mi casa antes de vender en ${city.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No. Compramos casas en cualquier condición en ${city.name} — sin reparaciones, sin limpieza, sin inspecciones. Compramos tal como está.`,
        },
      },
      {
        "@type": "Question",
        name: `¿Hay costos o comisiones al vender en ${city.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `No cobramos ninguna comisión ni costos de cierre. Todo lo que recibes es el precio acordado — sin deducciones de ningún tipo.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section style={{ background: "var(--black)", padding: "72px 48px 64px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "5px 14px", marginBottom: "20px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.8px", fontWeight: 500 }}>
            {city.name}, {city.stateAbbr} · Hablamos Español
          </span>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(38px, 6vw, 76px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 0.95, marginBottom: "18px" }}>
          VENDER MI CASA<br />RÁPIDO EN {city.name.toUpperCase()},<br />{city.stateAbbr}.
        </h1>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto 8px", lineHeight: 1.75 }}>
          Compramos casas en {city.name} en efectivo — oferta en 24 horas, cierre desde 7 días. Sin reparaciones, sin comisiones.
        </p>
        <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.28)", marginBottom: "32px" }}>
          Sin costo · Sin obligación · Respuesta el mismo día
        </p>

        <OfferFormEs />

        <div style={{ marginTop: "18px", display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>¿Prefieres hablar con alguien?</span>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14px", fontWeight: 700, color: "var(--white)", textDecoration: "none", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "8px", padding: "8px 16px" }}
          >
            {PHONE}
          </a>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.08)", borderRadius: "14px", overflow: "hidden", maxWidth: "700px", margin: "44px auto 0" }}>
          {[
            { val: "24 hrs", label: "Para recibir tu oferta" },
            { val: "7 días", label: "Para cerrar la venta" },
            { val: "$0", label: "En comisiones" },
            { val: "$0", label: "En reparaciones" },
          ].map((s) => (
            <div key={s.label} style={{ background: "rgba(255,255,255,0.04)", padding: "20px 12px", textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "26px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.38)", marginTop: "5px", lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="section">
        <span className="section-label">Proceso simple</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 42px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "12px" }}>
          ¿CÓMO PUEDO VENDER MI CASA<br />RÁPIDO EN {city.name.toUpperCase()}?
        </h2>
        <p style={{ fontSize: "15px", color: "var(--mid)", maxWidth: "520px", lineHeight: 1.7, marginBottom: "48px" }}>
          Tres pasos. Sin complicaciones. Sin sorpresas.
        </p>
        <div className="three-col">
          {[
            { num: "01", title: "Ingresa tu dirección", desc: `Cuéntanos sobre tu casa en ${city.name}. Sin formularios complicados — respondemos el mismo día.` },
            { num: "02", title: "Recibe tu oferta en efectivo", desc: `En menos de 24 horas tendrás una oferta justa por tu casa en ${city.name} — sin condiciones ni presión.` },
            { num: "03", title: "Cierra en tu fecha elegida", desc: `Podemos cerrar en tan solo 7 días o cuando tú necesites. El dinero llega directo a ti.` },
          ].map((step) => (
            <div key={step.num} style={{ background: "var(--off-white)", borderRadius: "var(--radius)", padding: "32px 28px", border: "1px solid var(--border-light)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "44px", color: "var(--border-mid)", letterSpacing: "1px", lineHeight: 1, marginBottom: "14px" }}>{step.num}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "10px" }}>{step.title}</div>
              <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ventajas */}
      <section style={{ background: "var(--blue)", padding: "64px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 4vw, 42px)", color: "var(--white)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "40px" }}>
            $0 DE COSTOS PARA TI EN {city.name.toUpperCase()}.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
            {[
              { val: "$0", label: "Comisión de agente", note: "Sin 5–6% de comisión" },
              { val: "$0", label: "Costos de cierre", note: "Los asumimos nosotros" },
              { val: "$0", label: "Reparaciones", note: "Compramos tal como está" },
              { val: "$0", label: "Visitas o showings", note: "Sin interrupciones" },
            ].map((item) => (
              <div key={item.label} style={{ background: "rgba(255,255,255,0.12)", borderRadius: "12px", padding: "22px 14px", border: "1px solid rgba(255,255,255,0.2)", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--white)", letterSpacing: "1px", lineHeight: 1, marginBottom: "6px" }}>{item.val}</div>
                <div style={{ fontSize: "12px", fontWeight: 700, color: "rgba(255,255,255,0.9)", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "10.5px", color: "rgba(255,255,255,0.55)" }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <span className="section-label">Preguntas frecuentes</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3.5vw, 40px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "40px" }}>
          PREGUNTAS SOBRE VENDER<br />EN {city.name.toUpperCase()}, {city.stateAbbr}.
        </h2>
        <div style={{ maxWidth: "700px" }}>
          {[
            { q: `¿Compran casas en ${city.name}, ${city.stateAbbr}?`, a: `Sí. Compramos casas en ${city.name} y en toda el área metropolitana de ${city.metro}. Oferta en efectivo en menos de 24 horas, cierre en tan solo 7 días.` },
            { q: `¿Cuánto tiempo toma vender mi casa en ${city.name}?`, a: `El proceso puede tomar tan solo 7 días desde que recibes tu oferta hasta el cierre. El tiempo promedio en ${city.name} es de 14 a 21 días según tu situación.` },
            { q: `¿Necesito reparar mi casa en ${city.name} antes de vender?`, a: `No. Compramos casas en cualquier condición en ${city.name} — sin reparaciones, sin limpieza, sin inspecciones.` },
            { q: `¿Hay costos al vender mi casa en ${city.name}?`, a: `No cobramos ninguna comisión ni costos de cierre. Todo lo que recibes es el precio acordado — sin deducciones.` },
          ].map((faq, i, arr) => (
            <div key={i} style={{ padding: "22px 0", borderBottom: i < arr.length - 1 ? "1px solid var(--border-light)" : "none" }}>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "var(--near-black)", marginBottom: "8px" }}>{faq.q}</div>
              <p style={{ fontSize: "13.5px", color: "var(--mid)", lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ciudades cercanas */}
      <section style={{ background: "var(--off-white)", padding: "56px 48px" }}>
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <span className="section-label">También compramos cerca de {city.name}</span>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 36px)", color: "var(--black)", letterSpacing: "1.5px", lineHeight: 1, marginBottom: "28px" }}>
            CIUDADES CERCANAS A {city.name.toUpperCase()}.
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link
              href="/vender-mi-casa-rapido"
              style={{ fontSize: "13px", fontWeight: 600, color: "var(--blue)", textDecoration: "none", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", padding: "8px 16px" }}
            >
              {city.metro}, {city.stateAbbr}
            </Link>
            {city.nearCities.map((nearby) => {
              const nearSlug = Object.keys(cities).find((k) => cities[k].name === nearby && cities[k].state === city.state);
              return nearSlug ? (
                <Link
                  key={nearby}
                  href={`/compramos-casas/${nearSlug}`}
                  style={{ fontSize: "13px", color: "var(--mid)", textDecoration: "none", background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "8px", padding: "8px 16px" }}
                >
                  {nearby}, {city.stateAbbr}
                </Link>
              ) : null;
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ background: "var(--black)", padding: "72px 48px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 58px)", color: "var(--white)", letterSpacing: "2px", lineHeight: 1, marginBottom: "16px" }}>
          VENDE TU CASA EN<br />{city.name.toUpperCase()} HOY.
        </h2>
        <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.55)", marginBottom: "32px", maxWidth: "440px", margin: "0 auto 32px", lineHeight: 1.7 }}>
          Recibe tu oferta en efectivo en menos de 24 horas — o llámanos ahora para hablar con alguien de inmediato.
        </p>
        <OfferFormEs />
        <div style={{ marginTop: "18px" }}>
          <a href={PHONE_HREF} style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 700, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>
            {PHONE} — Llámanos Hoy
          </a>
        </div>
      </section>
    </>
  );
}
