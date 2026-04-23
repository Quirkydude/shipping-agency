"use client";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { useState, useEffect, useCallback } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    },
    []
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "0 1rem",
          height: 107,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }} onClick={closeMenu}>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: siteConfig.colors.primary,
              letterSpacing: "-0.02em",
            }}
          >
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{
            display: "flex",
            gap: "1.5rem",
            alignItems: "center",
          }}
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "1rem",
                letterSpacing: "0.08em",
                fontFamily: "helvetica, sans-serif",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = siteConfig.colors.primary;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#000";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA button - hidden on mobile when menu is open */}
        <Link
          href="/tracking"
          className="btn-primary"
          style={{
            fontSize: "0.75rem",
            display: "inline-block",
          }}
          onClick={closeMenu}
        >
          Track Package
        </Link>

        {/* Hamburger button - visible only on mobile */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#000",
              borderRadius: 2,
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#000",
              borderRadius: 2,
              transition: "all 0.3s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2.5,
              background: "#000",
              borderRadius: 2,
              transition: "all 0.3s ease",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="mobile-overlay"
          onClick={closeMenu}
          onKeyDown={handleKeyDown}
          aria-hidden="true"
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.4)",
            zIndex: 98,
            animation: "fadeIn 0.2s ease",
          }}
        />
      )}

      {/* Mobile drawer */}
      <nav
        className="mobile-drawer"
        aria-label="Mobile navigation"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "280px",
          height: "100vh",
          background: "#fff",
          zIndex: 99,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          boxShadow: menuOpen ? "-4px 0 20px rgba(0,0,0,0.15)" : "none",
          display: "flex",
          flexDirection: "column",
          padding: "2rem 1.5rem",
          overflowY: "auto",
        }}
      >
        {/* Close button inside drawer */}
        <button
          onClick={closeMenu}
          aria-label="Close navigation menu"
          style={{
            alignSelf: "flex-end",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            fontSize: "1.5rem",
            color: "#000",
            marginBottom: "1rem",
          }}
        >
          ✕
        </button>

        {/* Mobile nav links */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                textDecoration: "none",
                color: "#000",
                fontSize: "1.1rem",
                letterSpacing: "0.08em",
                fontFamily: "helvetica, sans-serif",
                padding: "0.75rem 0",
                borderBottom: "1px solid #eee",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = siteConfig.colors.primary;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "#000";
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div style={{ marginTop: "auto", paddingTop: "1.5rem" }}>
          <Link
            href="/tracking"
            className="btn-primary"
            onClick={closeMenu}
            style={{
              display: "block",
              textAlign: "center",
              padding: "0.85rem",
              fontSize: "0.9rem",
            }}
          >
            Track Package
          </Link>
        </div>
      </nav>

      {/* Keyframe animation for overlay fade-in */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
