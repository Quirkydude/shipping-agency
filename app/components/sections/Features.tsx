import Image from "next/image";
import { siteConfig } from "@/config/siteConfig";

const features = [
  {
    icon: "globe",
    title: "Worldwide Service",
    description:
      "We understand the importance of reliable shipping and logistics services. That's why we offer a comprehensive range to meet the needs of our customers worldwide.",
  },
  {
    icon: "truck",
    title: "On Time Delivery",
    description:
      "We are proud of our record of delivering orders on time. We recognize the significance of timely shipping and put in our best efforts to ensure your orders reach you when you need them.",
  },
  {
    icon: "phone",
    title: "24/7 Live Support",
    description:
      "Our live support team is here to assist you with any questions or concerns you may have. We strive to provide excellent customer service and ensure your experience with us is a positive one.",
  },
];

const FeatureIcon = ({ type }: { type: string }) => {
  const color = siteConfig.colors.primary;
  if (type === "globe")
    return (
      <svg viewBox="0 0 200 200" width="50" height="50" fill={color}>
        <path d="M179.981 100.753c.002-.252.019-.501.019-.753 0-44.113-35.888-80-80-80s-80 35.887-80 80c0 .253.017.501.019.753-.002.064-.019.125-.019.19 0 .109.027.21.032.317C20.711 144.792 56.311 180 100 180s79.289-35.208 79.968-78.739c.005-.107.032-.209.032-.317 0-.066-.017-.126-.019-.191z" />
      </svg>
    );
  if (type === "truck")
    return (
      <svg viewBox="0 0 200 200" width="50" height="50" fill={color}>
        <path d="M172.834 87.887h-11.057l-15.617-36.79A13.295 13.295 0 0 0 133.921 43h-67.84a13.295 13.295 0 0 0-12.239 8.097l-15.617 36.79H27.166A7.164 7.164 0 0 0 20 95.048a7.165 7.165 0 0 0 7.166 7.161h7.082v48.652A6.141 6.141 0 0 0 40.392 157h13.214a6.138 6.138 0 0 0 6.14-6.135v-9.998h80.51v9.993a6.141 6.141 0 0 0 6.144 6.139h13.214a6.138 6.138 0 0 0 6.14-6.135v-48.656h7.08A7.164 7.164 0 0 0 180 95.047a7.164 7.164 0 0 0-7.166-7.16z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 200 200" width="50" height="50" fill={color}>
      <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z" />
    </svg>
  );
};

export default function Features() {
  return (
    <section className="features-section reveal" style={{ background: "#fafafa", padding: "4rem 0" }}>
      <div
        className="features-grid"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Left: text */}
        <div className="features-text reveal reveal-delay-1">
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Our Features
          </p>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              marginBottom: "2rem",
              lineHeight: 1.3,
            }}
          >
            We Are Trusted Logistics Company Since {siteConfig.foundedYear}
          </h2>

          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${2 + i}`}
              style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
            >
              <div style={{ flexShrink: 0 }}>
                <FeatureIcon type={f.icon} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    marginBottom: "0.4rem",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6 }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: image */}
        <div
          className="features-image reveal reveal-delay-2"
          style={{ position: "relative", height: 550, borderRadius: 4, overflow: "hidden" }}
        >
          <Image
            src="/images/feature.jpeg"
            alt="Features"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .features-text {
            order: 2 !important;
          }
          .features-image {
            order: 1 !important;
            height: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
