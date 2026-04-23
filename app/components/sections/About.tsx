import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

const features = [
  {
    icon: (
      <svg viewBox="0 0 200 200" width="50" height="50" fill={siteConfig.colors.primary}>
        <path d="M179.981 100.753c.002-.252.019-.501.019-.753 0-44.113-35.888-80-80-80s-80 35.887-80 80c0 .253.017.501.019.753-.002.064-.019.125-.019.19 0 .109.027.21.032.317C20.711 144.792 56.311 180 100 180s79.289-35.208 79.968-78.739c.005-.107.032-.209.032-.317 0-.066-.017-.126-.019-.191zm-19.297 26.937h-16.499c1.623-6.294 2.713-13.034 3.165-20.109h18.931a66.145 66.145 0 0 1-5.597 20.109zM39.316 72.31h16.498c-1.766 6.849-2.885 14.235-3.256 21.996H33.535a66.184 66.184 0 0 1 5.781-21.996zm67.321-13.275v-17.87c7.029 2.523 13.351 8.95 18.177 17.87h-18.177zm23.66 13.275c2.06 6.727 3.41 14.167 3.854 21.996h-27.513V72.31h23.659zM93.363 41.165v17.87H75.185c4.825-8.92 11.148-15.347 18.178-17.87zm0 31.145v21.996H65.848c.444-7.829 1.794-15.269 3.854-21.996h23.661z" />
      </svg>
    ),
    title: "Global Coverage",
    description:
      "To achieve global coverage with our shipping and logistics, we have established partnerships with reliable carriers and logistics providers worldwide.",
  },
  {
    icon: (
      <svg viewBox="0 0 200 200" width="50" height="50" fill={siteConfig.colors.primary}>
        <path d="M172.834 87.887h-11.057l-15.617-36.79A13.295 13.295 0 0 0 133.921 43h-67.84a13.295 13.295 0 0 0-12.239 8.097l-15.617 36.79H27.166A7.164 7.164 0 0 0 20 95.048a7.165 7.165 0 0 0 7.166 7.161h7.082v48.652A6.141 6.141 0 0 0 40.392 157h13.214a6.138 6.138 0 0 0 6.14-6.135v-9.998h80.51v9.993a6.141 6.141 0 0 0 6.144 6.139h13.214a6.138 6.138 0 0 0 6.14-6.135v-48.656h7.08A7.164 7.164 0 0 0 180 95.047a7.164 7.164 0 0 0-7.166-7.16z" />
      </svg>
    ),
    title: "On Time Delivery",
    description:
      "At our company, we take pride in our on-time delivery record. We understand the importance of timely shipping and work hard to ensure your orders arrive when you need them.",
  },
];

export default function About() {
  return (
    <section className="about-section reveal" style={{ background: "#fafafa" }}>
      <div
        className="about-grid"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        {/* Image column */}
        <div className="about-image reveal reveal-delay-1" style={{ position: "relative", minHeight: 600, overflow: "hidden" }}>
          <Image
            src="/images/about.jpeg"
            alt="About Advanced Security"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content column */}
        <div className="about-content reveal reveal-delay-2" style={{ padding: "3rem 2rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            About Us
          </p>
          <h2
            style={{
              fontSize: "var(--text-2xl)",
              fontWeight: 700,
              marginBottom: "1rem",
              lineHeight: 1.3,
            }}
          >
            {siteConfig.fullName}
          </h2>
          <p
            style={{
              fontSize: "var(--text-base)",
              lineHeight: 1.7,
              color: "#333",
              marginBottom: "2rem",
            }}
          >
            Advance Security Company is a leading shipping and logistics provider that
            offers top-notch security services to ensure the safe delivery of your goods.
            With years of experience in the industry, we have built a reputation for
            excellence and reliability. Our team of experts is dedicated to providing
            customized solutions that meet your unique needs. Trust Advance Security
            Shipping and Logistics for all your shipping needs.
          </p>

          {/* Feature items */}
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`reveal reveal-delay-${3 + i}`}
              style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}
            >
              <div style={{ flexShrink: 0 }}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.4rem" }}>
                  {f.title}
                </h3>
                <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: 1.6 }}>
                  {f.description}
                </p>
              </div>
            </div>
          ))}

          <Link href="/services" className="btn-primary reveal reveal-delay-5" style={{ marginTop: "0.5rem" }}>
            Explore More
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
          .about-image {
            min-height: 300px !important;
          }
          .about-content {
            padding: 2rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
