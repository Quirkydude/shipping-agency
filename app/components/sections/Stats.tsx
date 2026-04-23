import { siteConfig } from "@/config/siteConfig";
import type { JSX } from "react";

const icons: Record<string, JSX.Element> = {
  heart: (
    <svg viewBox="0 0 200 200" width="30" height="30" fill="#fff">
      <path d="M137.778 32.5c-15.568 0-29.041 8.477-36.346 20.992-.636 1.09-2.229 1.09-2.865 0C91.258 40.977 77.785 32.5 62.222 32.5 38.901 32.5 20 51.359 20 74.627c0 9.782 3.889 20.648 9.088 25.822L88.81 162.73c6.099 6.36 16.282 6.36 22.381 0l59.72-62.281c5.061-5.037 9.089-16.04 9.089-25.822 0-23.268-18.907-42.127-42.222-42.127z" />
    </svg>
  ),
  info: (
    <svg viewBox="0 0 200 200" width="30" height="30" fill="#fff">
      <path d="M100 20c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm0 31.905a8.846 8.846 0 1 1 0 17.692 8.846 8.846 0 0 1 0-17.692zm9.262 90.542a9.133 9.133 0 0 1-18.264 0V95.049a9.133 9.133 0 0 1 18.264 0v47.398z" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 200 200" width="30" height="30" fill="#fff">
      <path d="M106.052 28.281l15.263 43.679a6.405 6.405 0 0 0 5.921 4.28l46.476.942c6.073.123 8.581 7.8 3.74 11.451l-37.043 27.937a6.355 6.355 0 0 0-2.262 6.924l13.461 44.261c1.759 5.784-4.806 10.529-9.792 7.077l-38.157-26.413a6.433 6.433 0 0 0-7.319 0l-38.157 26.413c-4.986 3.452-11.551-1.293-9.792-7.077l13.461-44.261a6.353 6.353 0 0 0-2.262-6.924L22.548 88.632c-4.841-3.651-2.333-11.328 3.74-11.451l46.476-.942a6.404 6.404 0 0 0 5.921-4.28L93.948 28.28c1.995-5.707 10.109-5.707 12.104.001z" />
    </svg>
  ),
};

const statColors = ["#FF0707", "#00C5FF", "#BADA55"];

export default function Stats() {
  return (
    <section className="stats-section reveal" style={{ background: siteConfig.colors.dark, padding: "3rem 0" }}>
      <div
        className="stats-grid"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
        }}
      >
        {siteConfig.stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`stat-card reveal reveal-delay-${i + 1}`}
            style={{
              background: statColors[i],
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
              borderRadius: 4,
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                background: "rgba(255,255,255,0.15)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {icons[stat.icon]}
            </div>
            <div>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "0.03em",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  margin: 0,
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
