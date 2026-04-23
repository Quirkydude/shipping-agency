import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Services() {
  return (
    <section className="services-section reveal" style={{ padding: "4rem 0", background: "#fff" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>
            Our Services
          </p>
          <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700 }}>
            Explore Our Services
          </h2>
        </div>

        {/* Grid */}
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
        >
          {siteConfig.services.map((service, i) => (
            <div
              key={service.title}
              className={`service-card card-hover reveal reveal-delay-${i + 1}`}
              style={{
                background: "#fafafa",
                overflow: "hidden",
                borderRadius: 4,
              }}
            >
              <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div style={{ padding: "1.2rem" }}>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginBottom: "0.6rem",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    lineHeight: 1.6,
                    marginBottom: "1rem",
                  }}
                >
                  {service.description}
                </p>
                <button
                  className="service-btn"
                  style={{
                    background: siteConfig.colors.primary,
                    color: "#fff",
                    border: "none",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    transition: "transform 0.2s ease, background 0.2s ease",
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  ›
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover img {
          transform: scale(1.08) !important;
        }
        .service-btn:hover {
          transform: scale(1.15);
          background: #cc0000 !important;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
