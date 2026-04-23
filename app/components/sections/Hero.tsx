import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Hero() {
  return (
    <section
      className="hero-banner"
      style={{
        minHeight: "calc(100vh - 107px)",
        backgroundImage: "url('/images/hero-bg.jpeg')",
      }}
    >
      {/* dark overlay */}
      <div
        className="overlay"
        style={{ background: "rgba(0,0,0,0.45)" }}
      />

      <div
        className="content"
        style={{ textAlign: "left" }}
      >
        <div style={{ maxWidth: 480 }}>
          <p
            className="reveal"
            style={{
              color: "#fff",
              fontSize: "var(--text-sm)",
              letterSpacing: "0.05em",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            {siteConfig.tagline}
          </p>

          <h1
            className="reveal reveal-delay-1"
            style={{
              color: "#fff",
              fontSize: "var(--text-3xl)",
              fontWeight: 700,
              lineHeight: 1.3,
              marginBottom: "1.5rem",
            }}
          >
            {siteConfig.headline}{" "}
            <span style={{ color: siteConfig.colors.primary }}>
              {siteConfig.headlineHighlight}
            </span>{" "}
            {siteConfig.headlineEnd}
          </h1>

          <p
            className="reveal reveal-delay-2"
            style={{
              color: "#fff",
              fontSize: "var(--text-base)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              maxWidth: 440,
            }}
          >
            {siteConfig.description}
          </p>

          <div
            className="hero-cta reveal reveal-delay-3"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/about" className="btn-primary">
              Read More
            </Link>
            <Link href="/services" className="btn-secondary">
              Free Quote
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-banner {
            min-height: 70vh !important;
          }
          .hero-banner .content {
            text-align: center !important;
          }
          .hero-banner .content > div {
            max-width: 100% !important;
          }
          .hero-cta {
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
