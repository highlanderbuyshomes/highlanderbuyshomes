"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/for-agents", label: "For Agents" },
    { href: "/about", label: "About" },
  ];

  return (
    <>
      <nav className="site-nav">
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "23px", color: "var(--black)", letterSpacing: "2.5px", lineHeight: 1 }}>
            HIGHLANDER
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "23px", color: "var(--blue)", letterSpacing: "2.5px", lineHeight: 1, marginLeft: "8px" }}>
            BUYS HOMES
          </span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "27px", color: "var(--blue)", lineHeight: "0.65", marginLeft: "2px" }}>.</span>
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="nav-link"
              data-active={pathname === l.href ? "true" : undefined}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/sell" className="btn-blue" style={{ padding: "9px 20px", fontSize: "13px" }}>
            Get My Offer
          </Link>
        </div>

        <button className="mobile-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div style={{ background: "var(--white)", borderBottom: "1px solid var(--border-light)", padding: "16px 20px 20px", display: "flex", flexDirection: "column", gap: "4px", position: "sticky", top: "68px", zIndex: 99 }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: "15px", fontWeight: pathname === l.href ? 600 : 400, color: pathname === l.href ? "var(--black)" : "var(--mid)", padding: "11px 0", textDecoration: "none", borderBottom: "1px solid var(--border-light)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/sell" onClick={() => setOpen(false)} className="btn-blue" style={{ marginTop: "12px", width: "100%", justifyContent: "center", padding: "13px" }}>
            Get My Offer
          </Link>
        </div>
      )}
    </>
  );
}
