"use client";
import { useState, useEffect, useRef } from "react";

const GOOGLE_MAPS_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const w = () => (typeof window !== "undefined" ? (window as any) : null);

function loadGooglePlaces(cb: () => void) {
  const win = w(); if (!win) return;
  if (win.google?.maps?.places) { cb(); return; }
  if (!win._gplQueue) win._gplQueue = [];
  win._gplQueue.push(cb);
  if (document.getElementById("gpl-script")) return;
  win._gplInit = () => { (win._gplQueue as (() => void)[]).forEach((fn) => fn()); };
  const s = document.createElement("script");
  s.id = "gpl-script";
  s.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&libraries=places&callback=_gplInit`;
  s.async = true; s.defer = true;
  document.head.appendChild(s);
}

export default function OfferFormEs() {
  const [address, setAddress] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const acRef = useRef<any>(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY || !inputRef.current) return;
    loadGooglePlaces(() => {
      const win = w(); if (!inputRef.current || acRef.current || !win) return;
      acRef.current = new win.google.maps.places.Autocomplete(inputRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });
      acRef.current.addListener("place_changed", () => {
        const place = acRef.current.getPlace();
        if (place?.formatted_address) setAddress(place.formatted_address);
      });
    });
    return () => {
      const win = w();
      if (acRef.current) { win?.google?.maps?.event?.clearInstanceListeners(acRef.current); acRef.current = null; }
    };
  }, []);

  const dest = address.trim()
    ? `/get-my-cash-offer?address=${encodeURIComponent(address.trim())}`
    : "/get-my-cash-offer";

  return (
    <div style={{ display: "flex", maxWidth: "580px", margin: "0 auto", borderRadius: "50px", background: "#fff", boxShadow: "0 4px 32px rgba(0,0,0,0.22)", border: "1.5px solid rgba(255,255,255,0.15)" }}>
      <div style={{ position: "relative", flex: 1, minWidth: 0, display: "flex", alignItems: "center" }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="var(--muted, #8a8a84)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: "absolute", left: "20px", flexShrink: 0, pointerEvents: "none" }}>
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Ingresa la dirección de tu propiedad"
          autoComplete="off"
          style={{ width: "100%", padding: "18px 16px 18px 48px", fontSize: "15px", border: "none", outline: "none", background: "transparent", color: "#111110", fontFamily: "inherit", borderRadius: "50px 0 0 50px" }}
        />
      </div>
      <a
        href={dest}
        style={{ padding: "14px 28px", background: "#1a56db", color: "#fff", cursor: "pointer", fontSize: "14px", fontWeight: 700, whiteSpace: "nowrap", fontFamily: "inherit", flexShrink: 0, transition: "background 0.15s", textDecoration: "none", display: "flex", alignItems: "center", borderRadius: "50px", margin: "5px" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1544bf")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#1a56db")}
      >
        Obtener Mi Oferta →
      </a>
    </div>
  );
}
