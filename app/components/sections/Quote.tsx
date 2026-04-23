
"use client";
import { siteConfig } from "@/config/siteConfig";
import { useState } from "react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "none",
    background: "#fff",
    fontSize: "0.85rem",
    fontFamily: "inherit",
    boxShadow: "0 3px 10px 1px rgba(0,0,0,0.08)",
    outline: "none",
    borderRadius: 4,
  };

  return (
    <section className="quote-section reveal" style={{ padding: "4rem 0" }}>
      <div
        className="quote-grid"
        style={{
          maxWidth: 980,
          margin: "0 auto",
          padding: "0 1rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div className="quote-text reveal reveal-delay-1">
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>
            Get A Quote
          </p>
          <h2
            style={{
              fontSize: "var(--text-3xl)",
              fontWeight: 700,
              marginBottom: "1.2rem",
              lineHeight: 1.2,
            }}
          >
            Get A Free Quote
          </h2>
          <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, color: "#333" }}>
            Get a free quote for your shipping needs with Advanced Security Shipping
            and Logistics. Our team of experts will ensure your packages are delivered
            safely and on time. Contact us today to learn more.
          </p>
        </div>

        {/* Right: form */}
        <div className="quote-form reveal reveal-delay-2" style={{ background: "#e8e8e8", padding: "2rem", borderRadius: 4 }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <p style={{ fontSize: "1.2rem", fontWeight: 700, color: siteConfig.colors.primary }}>
                Thank you! We'll be in touch soon.
              </p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input style={inputStyle} type="text" placeholder="Name" aria-label="Your Name" />
                <input style={inputStyle} type="email" placeholder="Your Email" aria-label="Your Email" />
              </div>
              <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <input style={inputStyle} type="tel" placeholder="Your Mobile" aria-label="Your Mobile" />
                <select style={{ ...inputStyle, color: "#999" }} aria-label="Select Service">
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  {siteConfig.serviceOptions.map((opt) => (
                    <option key={opt} value={opt} style={{ color: "#000" }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <textarea
                style={{
                  ...inputStyle,
                  height: 90,
                  resize: "none",
                  paddingTop: "0.75rem",
                }}
                placeholder="Special Note"
                aria-label="Special Note"
              />
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary"
                style={{ width: "100%", padding: "1rem", fontSize: "1.1rem", borderRadius: 4 }}
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .quote-text {
            text-align: center !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
