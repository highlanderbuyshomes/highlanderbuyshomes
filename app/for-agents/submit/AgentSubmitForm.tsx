"use client";
import { useState, useEffect, useRef } from "react";

declare global {
  interface Window { initGooglePlaces?: () => void; }
}

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

function loadGooglePlaces(cb: () => void) {
  if (typeof window === "undefined") return;
  if (window.google?.maps?.places) { cb(); return; }
  if (document.getElementById("google-places-script")) { window.initGooglePlaces = cb; return; }
  window.initGooglePlaces = cb;
  const script = document.createElement("script");
  script.id = "google-places-script";
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places&callback=initGooglePlaces`;
  script.async = true; script.defer = true;
  document.head.appendChild(script);
}

export default function AgentSubmitForm() {
  const [role, setRole] = useState<"agent" | "wholesaler">("agent");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const addressRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY || !addressRef.current) return;
    loadGooglePlaces(() => {
      if (!addressRef.current || autocompleteRef.current) return;
      autocompleteRef.current = new window.google.maps.places.Autocomplete(addressRef.current, {
        types: ["address"], componentRestrictions: { country: "us" }, fields: ["formatted_address"],
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
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      await fetch("/api/agent-offer", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
    } catch { /* show success regardless */ }
    finally { setLoading(false); setSubmitted(true); }
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "48px 40px", textAlign: "center" }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--blue-light)", border: "2px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4.5 4.5L19 7" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--black)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>Deal Received</h2>
        <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8, maxWidth: "340px", margin: "0 auto" }}>
          We review every submission same day. You'll hear back within a few hours with a number or follow-up questions.
        </p>
      </div>
    );
  }

  const label: React.CSSProperties = { fontSize: "11px", fontWeight: 600, color: "var(--mid)", textTransform: "uppercase", letterSpacing: "0.8px", marginBottom: "6px", display: "block" };
  const input: React.CSSProperties = { width: "100%", padding: "10px 12px", fontSize: "13.5px", border: "1px solid var(--border-mid)", borderRadius: "var(--radius-sm)", outline: "none", background: "var(--white)", color: "var(--black)", fontFamily: "inherit" };
  const row2: React.CSSProperties = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" };

  return (
    <form onSubmit={handleSubmit} style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "36px 40px" }}>

      {/* Role toggle */}
      <div style={{ marginBottom: "24px" }}>
        <div style={{ ...label, marginBottom: "10px" }}>I am a</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {(["agent", "wholesaler"] as const).map((r) => {
            const active = role === r;
            return (
              <button key={r} type="button" onClick={() => setRole(r)} style={{ padding: "11px 16px", borderRadius: "var(--radius-sm)", border: active ? "2px solid var(--blue)" : "1.5px solid var(--border-mid)", background: active ? "var(--blue-light)" : "var(--white)", color: active ? "var(--blue)" : "var(--mid)", fontFamily: "inherit", fontSize: "13px", fontWeight: active ? 600 : 500, cursor: "pointer", transition: "all 0.15s", textTransform: "capitalize" }}>
                {r === "agent" ? "Real Estate Agent" : "Wholesaler"}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="role" value={role} />
      </div>

      {/* Name */}
      <div style={row2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" required style={input} placeholder="Jane" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required style={input} placeholder="Smith" />
        </div>
      </div>

      {/* Contact */}
      <div style={row2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required style={input} placeholder="jane@brokerage.com" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required style={input} placeholder="(602) 555-0100" />
        </div>
      </div>

      {/* Brokerage / Company */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label style={label} htmlFor="company">{role === "agent" ? "Brokerage" : "Company"} <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px", color: "var(--muted)" }}>(optional)</span></label>
        <input id="company" name="company" type="text" style={input} placeholder={role === "agent" ? "e.g. Keller Williams" : "e.g. ABC Wholesalers LLC"} />
      </div>

      {/* Address */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label style={label} htmlFor="address">Property Address *</label>
        <div style={{ position: "relative", display: "flex", alignItems: "center", background: "var(--white)", border: "1px solid var(--border-mid)", borderRadius: "var(--radius-sm)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "12px", pointerEvents: "none", flexShrink: 0 }}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" />
          </svg>
          <input ref={addressRef} id="address" name="address" type="text" required placeholder="123 Main St, Phoenix, AZ 85001" value={address} onChange={(e) => setAddress(e.target.value)} autoComplete="off" style={{ width: "100%", padding: "10px 12px 10px 36px", fontSize: "13.5px", border: "none", outline: "none", background: "transparent", color: "var(--black)", fontFamily: "inherit" }} />
        </div>
      </div>

      {/* Price + Condition */}
      <div style={row2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="askingPrice">{role === "agent" ? "List / Asking Price" : "Assignment Price"} <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px", color: "var(--muted)" }}>(optional)</span></label>
          <input id="askingPrice" name="askingPrice" type="text" style={input} placeholder="$250,000" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="condition">Property Condition</label>
          <select id="condition" name="condition" style={{ ...input, cursor: "pointer" }}>
            <option value="">Select one</option>
            <option value="good">Good — move-in ready</option>
            <option value="fair">Fair — needs some work</option>
            <option value="poor">Poor — major repairs needed</option>
          </select>
        </div>
      </div>

      {/* Timeline + Commission/Fee */}
      <div style={row2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="timeline">Seller's Timeline</label>
          <select id="timeline" name="timeline" style={{ ...input, cursor: "pointer" }}>
            <option value="">Select one</option>
            <option value="asap">ASAP</option>
            <option value="1-3months">1–3 months</option>
            <option value="3-6months">3–6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={label} htmlFor="compensation">{role === "agent" ? "Commission %" : "Assignment Fee"} <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px", color: "var(--muted)" }}>(optional)</span></label>
          <input id="compensation" name="compensation" type="text" style={input} placeholder={role === "agent" ? "e.g. 3%" : "e.g. $10,000"} />
        </div>
      </div>

      {/* Notes */}
      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "28px" }}>
        <label style={label} htmlFor="notes">Notes <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px", color: "var(--muted)" }}>(optional)</span></label>
        <textarea id="notes" name="notes" rows={3} style={{ ...input, resize: "vertical" }} placeholder="Tenant-occupied, seller needs leaseback, estate sale, anything relevant…" />
      </div>

      <button type="submit" disabled={loading} className="btn-blue btn-blue-lg" style={{ width: "100%", justifyContent: "center" }}>
        {loading ? "Submitting…" : "Submit Property →"}
      </button>
      <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "14px" }}>We review every deal same day · No obligation</p>
    </form>
  );
}
