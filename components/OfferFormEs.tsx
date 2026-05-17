"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function OfferFormEs() {
  const [address, setAddress] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) return;
    router.push(`/sell?address=${encodeURIComponent(address.trim())}`);
  };

  return (
    <form onSubmit={handleSubmit} className="hero-search" style={{ maxWidth: "580px", margin: "0 auto" }}>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Ingresa la dirección de tu propiedad"
        className="offer-input"
      />
      <button type="submit" className="offer-btn">
        Obtener Mi Oferta →
      </button>
    </form>
  );
}
