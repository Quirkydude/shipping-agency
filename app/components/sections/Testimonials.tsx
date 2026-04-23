import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Testimonials() {
  return (
    <section className="testimonials-section reveal" style={{ padding: "4rem 0", background: "#fff" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "0.5rem" }}>
          <p className="section-label">TESTIMONIAL</p>
        </div>
        <h2
          className="reveal reveal-delay-1"
          style={{
            fontSize: "var(--text-2xl)",
            fontWeight: 700,
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          What Our Customers Say!
        </h2>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            background: "#fff",
            padding: "1rem",
            border: "1px solid #f0f0f0",
          }}
        >
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`testimonial-card card-hover reveal reveal-delay-${i + 1}`}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
                padding: "2rem 1rem",
                borderRadius: 4,
              }}
            >
              {/* Circle photo */}
              <div
                className="testimonial-avatar"
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  border: `3px solid #eee`,
                  transition: "border-color 0.3s ease",
                }}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  style={{ objectFit: "cover", filter: "grayscale(100%)", transition: "filter 0.3s ease" }}
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>

              {/* Name */}
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#FF6161",
                  margin: 0,
                }}
              >
                {t.name}
              </h3>

              {/* Quote */}
              <p
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.7,
                  textAlign: "center",
                  color: "#333",
                  margin: 0,
                }}
              >
                {t.text}
              </p>

              {/* Quotation mark decoration */}
              <div
                style={{
                  fontSize: "3rem",
                  color: "#FF6161",
                  opacity: 0.4,
                  lineHeight: 1,
                  transform: "rotate(180deg)",
                  marginTop: "auto",
                }}
              >
                ❝
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonial-card:hover .testimonial-avatar {
          border-color: #FF6161 !important;
        }
        .testimonial-card:hover .testimonial-avatar img {
          filter: grayscale(0%) !important;
        }
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
          .testimonial-avatar {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
}
