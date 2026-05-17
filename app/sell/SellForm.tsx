"use client";
import { useState, useEffect } from "react";

export default function SellForm() {
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const a = params.get("address");
    if (a) setAddress(a);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      await fetch("/api/offer", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // still show success
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "52px 40px", textAlign: "center" }}>
        <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "var(--blue-light)", border: "2px solid var(--blue-border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 22px" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12l4.5 4.5L19 7" stroke="var(--blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "34px", color: "var(--black)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "12px" }}>
          Request Received
        </h2>
        <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8, maxWidth: "380px", margin: "0 auto" }}>
          {"We'll"} review your property and follow up within 24 hours with your cash offer. Keep an eye on your email and phone.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "var(--white)", border: "1px solid var(--border-light)", borderRadius: "var(--radius)", padding: "40px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" type="text" required className="form-input" placeholder="Jane" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" type="text" required className="form-input" placeholder="Smith" />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className="form-input" placeholder="jane@email.com" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required className="form-input" placeholder="(602) 555-0100" />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px" }}>
        <label className="form-label" htmlFor="address">Property Address *</label>
        <input
          id="address"
          name="address"
          type="text"
          required
          className="form-input"
          placeholder="123 Main St, Phoenix, AZ 85001"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="condition">Home Condition</label>
          <select id="condition" name="condition" className="form-input">
            <option value="">Select one</option>
            <option value="good">Good — move-in ready</option>
            <option value="fair">Fair — needs some work</option>
            <option value="poor">Poor — major repairs needed</option>
          </select>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label className="form-label" htmlFor="timeline">Your Timeline</label>
          <select id="timeline" name="timeline" className="form-input">
            <option value="">Select one</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">1–3 months</option>
            <option value="3-6months">3–6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "28px" }}>
        <label className="form-label" htmlFor="message">
          Anything else we should know?{" "}
          <span style={{ color: "var(--muted)", fontWeight: 400, textTransform: "none", letterSpacing: 0, fontSize: "11px" }}>(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="form-input"
          placeholder="Tenant-occupied, estate sale, specific close date needed…"
          style={{ resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-blue btn-blue-lg"
        style={{ width: "100%", justifyContent: "center" }}
      >
        {loading ? "Submitting…" : "Get My Cash Offer →"}
      </button>

      <p style={{ fontSize: "12px", color: "var(--muted)", textAlign: "center", marginTop: "14px" }}>
        No obligation · No fees · We respond within 24 hours
      </p>
    </form>
  );
}
