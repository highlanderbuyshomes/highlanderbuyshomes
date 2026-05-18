"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    initGooglePlaces?: () => void;
  }
}

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

export default function OfferForm() {
  const [address, setAddress] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (!GOOGLE_MAPS_KEY || !inputRef.current) return;

    loadGooglePlaces(() => {
      if (!inputRef.current || autocompleteRef.current) return;
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    router.push(`/sell?address=${encodeURIComponent(address.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="hero-search" style={{ maxWidth: "580px", margin: "0 auto" }}>
      <input
        ref={inputRef}
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your property address"
        className="offer-input"
        autoComplete="off"
      />
      <button type="submit" className="offer-btn">
        Get My Offer →
      </button>
    </form>
  );
}
