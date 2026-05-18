"use client";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

declare global {
  interface Window {
    initGooglePlaces?: () => void;
  }
}

const t = {
  en: {
    firstName: "First Name *",
    lastName: "Last Name *",
    email: "Email *",
    phone: "Phone *",
    address: "Property Address *",
    addressPlaceholder: "123 Main St, Phoenix, AZ 85001",
    condition: "Home Condition",
    conditionOptions: [
      { value: "", label: "Select one" },
      { value: "good", label: "Good — move-in ready" },
      { value: "fair", label: "Fair — needs some work" },
      { value: "poor", label: "Poor — major repairs needed" },
    ],
    timeline: "Your Timeline",
    timelineOptions: [
      { value: "", label: "Select one" },
      { value: "asap", label: "As soon as possible" },
      { value: "1-3months", label: "1–3 months" },
      { value: "3-6months", label: "3–6 months" },
      { value: "flexible", label: "Flexible" },
    ],
    message: "Anything else we should know?",
    messageOptional: "(optional)",
    messagePlaceholder: "Tenant-occupied, estate sale, specific close date needed…",
    submit: "Get My Cash Offer →",
    submitting: "Submitting…",
    footer: "No obligation · No fees · We respond within 24 hours",
    successTitle: "Request Received",
    successBody: "We'll review your property and follow up within 24 hours with your cash offer. Keep an eye on your email and phone.",
  },
  es: {
    firstName: "Nombre *",
    lastName: "Apellido *",
    email: "Correo Electrónico *",
    phone: "Teléfono *",
    address: "Dirección de la Propiedad *",
    addressPlaceholder: "123 Calle Principal, Phoenix, AZ 85001",
    condition: "Condición de la Casa",
    conditionOptions: [
      { value: "", label: "Selecciona una opción" },
      { value: "good", label: "Buena — lista para mudarse" },
      { value: "fair", label: "Regular — necesita algo de trabajo" },
      { value: "poor", label: "Pobre — necesita reparaciones mayores" },
    ],
    timeline: "Tu Plazo",
    timelineOptions: [
      { value: "", label: "Selecciona una opción" },
      { value: "asap", label: "Lo antes posible" },
      { value: "1-3months", label: "1–3 meses" },
      { value: "3-6months", label: "3–6 meses" },
      { value: "flexible", label: "Flexible" },
    ],
    message: "¿Algo más que debamos saber?",
    messageOptional: "(opcional)",
    messagePlaceholder: "Ocupada por inquilinos, venta de sucesión, fecha de cierre específica…",
    submit: "Obtener Mi Oferta en Efectivo →",
    submitting: "Enviando…",
    footer: "Sin compromiso · Sin comisiones · Respondemos dentro de 24 horas",
    successTitle: "Solicitud Recibida",
    successBody: "Revisaremos tu propiedad y te enviaremos tu oferta en efectivo dentro de 24 horas. Mantén un ojo en tu correo electrónico y teléfono.",
  },
};

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function loadGooglePlaces(cb: () => void) {
  if (typeof window === "undefined") return;
  if (window.google?.maps?.places) { cb(); return; }
  if (document.getElementById("google-places-script")) {
    window.initGooglePlaces = cb;
    return;
  }
  window.initGooglePlaces = cb;
  const script = document.createElement("script");
  script.id = "google-places-script";
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places&callback=initGooglePlaces`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

export default function SellForm() {
  const { lang } = useLanguage();
  const c = t[lang];
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get("address");
    if (a) setAddress(a);
  }, []);

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY || !addressRef.current) return;

    loadGooglePlaces(() => {
      if (!addressRef.current || autocompleteRef.current) return;
      autocompleteRef.current = new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });
      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current!.getPlace();
        if (place.formatted_address) setAddress(place.formatted_address);
      });
    });

    return () => {
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
        autocompleteRef.current = null;
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      await fetch("/api/offer", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
    } catch {
      // still show success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="form-success-card" style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", textAlign: "center" }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--blue-light)", border: "2px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4.5 4.5L19 7" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--black)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>{c.successTitle}</h2>
        <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8, maxWidth: "340px", margin: "0 auto" }}>{c.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "40px" }}>

      <div className="form-row-2">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="firstName">{c.firstName}</label>
          <input id="firstName" name="firstName" type="text" required className="form-input" placeholder="Jane" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="lastName">{c.lastName}</label>
          <input id="lastName" name="lastName" type="text" required className="form-input" placeholder="Smith" />
        </div>
      </div>

      <div className="form-row-2">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="email">{c.email}</label>
          <input id="email" name="email" type="email" required className="form-input" placeholder="jane@email.com" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="phone">{c.phone}</label>
          <input id="phone" name="phone" type="tel" required className="form-input" placeholder="(602) 555-0100" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label className="form-label" htmlFor="address">{c.address}</label>
        <input
          ref={addressRef}
          id="address"
          name="address"
          type="text"
          required
          className="form-input"
          placeholder={c.addressPlaceholder}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="form-row-2">
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="condition">{c.condition}</label>
          <select id="condition" name="condition" className="form-input">
            {c.conditionOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="timeline">{c.timeline}</label>
          <select id="timeline" name="timeline" className="form-input">
            {c.timelineOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "28px" }}>
        <label className="form-label" htmlFor="message">
          {c.message}{" "}
          <span style={{ color: "var(--muted)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>{c.messageOptional}</span>
        </label>
        <textarea id="message" name="message" rows={3} className="form-input" placeholder={c.messagePlaceholder} style={{ resize: "vertical" }} />
      </div>

      <button type="submit" disabled={loading} className="btn-blue btn-blue-lg" style={{ width: "100%", justifyContent: "center" }}>
        {loading ? c.submitting : c.submit}
      </button>

      <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "14px" }}>{c.footer}</p>
    </form>
  );
}
