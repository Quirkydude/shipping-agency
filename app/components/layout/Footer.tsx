"use client";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: siteConfig.colors.dark, color: "#fff", padding: "2rem 0 0" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            paddingBottom: "2rem",
          }}
        >
          {/* Contact column */}
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Address</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem", color: "#ccc" }}>
              {siteConfig.contact.phone}
            </p>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              style={{ fontSize: "0.9rem", color: "#ccc", display: "block", transition: "color 0.2s ease" }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.color = siteConfig.colors.secondary; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#ccc"; }}
            >
              {siteConfig.contact.email}
            </a>
          </div>

          {/* Quick Links column */}
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Quick Links</h3>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{ color: "#ccc", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.2s ease" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = siteConfig.colors.secondary; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#ccc"; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter column */}
          <div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>Newsletter</h3>
            <p style={{ color: "#ccc", fontSize: "0.9rem", marginBottom: "1rem" }}>
              Sign up for our Newsletter today
            </p>
            <div className="newsletter-form" style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="email"
                placeholder="Email"
                aria-label="Email for newsletter"
                style={{
                  flex: 1,
                  padding: "0.6rem 1rem",
                  background: "#fff",
                  border: "none",
                  fontSize: "0.85rem",
                  color: "#000",
                  borderRadius: 4,
                }}
              />
              <button className="btn-primary" style={{ whiteSpace: "nowrap", borderRadius: 4 }}>
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Social + copyright */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            padding: "1.5rem 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="social-links" style={{ display: "flex", gap: "0.75rem" }}>
            {siteConfig.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: 39,
                  height: 39,
                  background: "rgba(255,255,255,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 4,
                  color: "#fff",
                  fontSize: "0.75rem",
                  textDecoration: "none",
                  transition: "background 0.2s ease, transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = siteConfig.colors.primary;
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,0.1)";
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {s.label[0]}
              </a>
            ))}
          </div>
          <p style={{ color: "#ccc", fontSize: "0.85rem" }}>{siteConfig.footerTagline}</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            gap: 1rem !important;
            text-align: center !important;
          }
          .newsletter-form {
            flex-direction: column !important;
          }
        }
      `}</style>
    </footer>
  );
}
