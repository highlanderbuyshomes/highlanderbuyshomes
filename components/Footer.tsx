import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: "1160px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "40px" }}>
        <div style={{ maxWidth: "280px" }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "21px", color: "var(--white)", letterSpacing: "2px" }}>HIGHLANDER</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "21px", color: "var(--blue)", letterSpacing: "2px", marginLeft: "7px" }}>BUYS HOMES</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "25px", color: "var(--blue)", lineHeight: "0.65", marginLeft: "2px" }}>.</span>
          </div>
          <p style={{ fontSize: "12.5px", lineHeight: 1.75 }}>
            We buy homes directly from homeowners in Phoenix, AZ and Dallas, TX. Fast closings, cash offers, no hassle.
          </p>
          <p style={{ fontSize: "11.5px", marginTop: "12px", color: "rgba(255,255,255,0.3)" }}>
            Highlander REI LLC
          </p>
        </div>

        <div style={{ display: "flex", gap: "56px", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "14px" }}>Company</div>
            {[
              { href: "/how-it-works", label: "How It Works" },
              { href: "/about", label: "About Us" },
              { href: "/for-agents", label: "For Agents" },
            ].map((l) => (
              <div key={l.href} style={{ marginBottom: "10px" }}>
                <Link href={l.href} style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>{l.label}</Link>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "14px" }}>Markets</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "10px" }}>Phoenix, AZ</div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", marginBottom: "10px" }}>Dallas, TX</div>
          </div>

          <div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "1.2px", marginBottom: "14px" }}>Get Started</div>
            <Link href="/sell" style={{ fontSize: "13px", color: "var(--blue)", textDecoration: "none", fontWeight: 600 }}>
              Get My Cash Offer →
            </Link>
            <div style={{ marginTop: "10px" }}>
              <Link href="/for-agents" style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", textDecoration: "none" }}>
                Agent Partner Program
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1160px", margin: "36px auto 0", paddingTop: "24px", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "11.5px", color: "rgba(255,255,255,0.25)" }}>
        <span>© {new Date().getFullYear()} Highlander REI LLC. All rights reserved.</span>
        <span>Phoenix, AZ · Dallas, TX</span>
      </div>
    </footer>
  );
}
