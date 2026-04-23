import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

export default function Team() {
  return (
    <section className="team-section reveal" style={{ padding: "4rem 0", background: "#f2f2f251" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 1rem" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.5rem" }}>
            Our Team
          </p>
          <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700 }}>
            Expert Team Members
          </h2>
        </div>

        <div
          className="team-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
          }}
        >
          {siteConfig.team.map((member, i) => (
            <div
              key={member.name}
              className={`team-card card-hover reveal reveal-delay-${i + 1}`}
              style={{
                background: "#fff",
                border: "1px solid #eee",
                overflow: "hidden",
                textAlign: "center",
                borderRadius: 4,
              }}
            >
              <div
                className="team-image"
                style={{ position: "relative", height: 233, overflow: "hidden" }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.3rem" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "#666" }}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .team-card:hover .team-image img {
          transform: scale(1.08) !important;
        }
        @media (max-width: 1024px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .team-image {
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
