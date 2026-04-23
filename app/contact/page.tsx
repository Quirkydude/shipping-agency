"use client";

import { siteConfig } from "@/config/siteConfig";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    border: "1px solid #ddd",
    background: "#fff",
    fontSize: "0.9rem",
    fontFamily: "inherit",
    outline: "none",
    borderRadius: 4,
    transition: "border-color 0.2s ease",
  };

  return (
    <>
      {/* Hero banner */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/images/contact-hero.jpeg')",
        }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>Contact Us</h1>
          <p>
            Get in touch with Advanced Security Shipping & Logistics. We're
            here to answer your questions and help with your shipping and
            logistics needs.
          </p>
        </div>
      </section>

      {/* Contact info + form */}
      <section className="section-padding reveal" style={{ background: "#fff" }}>
        <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
          {/* Left: contact details */}
          <div className="reveal reveal-delay-1">
            <p className="section-label" style={{ marginBottom: "0.75rem" }}>
              Get In Touch
            </p>
            <h2 style={{ fontSize: "var(--text-2xl)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
              Let's Talk About Your Logistics Needs
            </h2>
            <p style={{ fontSize: "var(--text-base)", lineHeight: 1.7, color: "#555", marginBottom: "2rem" }}>
              Whether you need a quote, have a question about our services, or
              want to discuss a custom logistics solution — we're just a
              message away.
            </p>

            {/* Phone */}
            <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
              <div className="contact-icon" style={{ width: 44, height: 44, borderRadius: "50%", background: siteConfig.colors.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 200 200" width="22" height="22" fill="#fff">
                  <path d="M174.754 137.015l-16.878-17.024c-7.055-7.116-18.563-7.186-25.705-.156l-.283.278-.803.794c-5.874 5.808-15.363 5.761-21.178-.105L78.719 89.344c-5.798-5.849-5.75-15.271.108-21.061l.283-.279c7.142-7.03 7.211-18.499.156-25.615L62.404 25.383c-7.061-7.122-18.581-7.185-25.72-.14l-11.238 11.11c-4.496 4.445-6.458 10.916-4.936 17.042 14.422 58.077 66.325 112.081 124.426 126.073 6.239 1.503 12.817-.21 17.377-4.711l12.003-11.848.284-.279c7.14-7.03 7.21-18.498.155-25.614z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>Phone</p>
                <p style={{ margin: "0.2rem 0 0", color: "#555", fontSize: "0.9rem" }}>{siteConfig.contact.phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.2rem" }}>
              <div className="contact-icon" style={{ width: 44, height: 44, borderRadius: "50%", background: siteConfig.colors.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 200 200" width="22" height="22" fill="#fff">
                  <path d="M109.336 104.331a17.481 17.481 0 0 1-18.671 0L20.222 59.784H20v78.442c0 9.54 7.784 17.273 17.386 17.273h125.228c9.602 0 17.386-7.733 17.386-17.273V59.784h-.222l-70.442 44.547z" />
                  <path d="M22.578 44.5l.215.125 68.173 43.111a16.917 16.917 0 0 0 18.069 0l68.173-43.111.215-.125H22.578z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>Email</p>
                <p style={{ margin: "0.2rem 0 0", color: "#555", fontSize: "0.9rem" }}>{siteConfig.contact.email}</p>
              </div>
            </div>

            {/* Address */}
            <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div className="contact-icon" style={{ width: 44, height: 44, borderRadius: "50%", background: siteConfig.colors.primary, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <svg viewBox="0 0 200 200" width="22" height="22" fill="#fff">
                  <path d="M123.001 164.11c4.266 1.258 8.833 2.25 13.625 2.25 8.241 0 17.158-2.95 26.375-12.583 4.725-5.167 4.408-13.217-.734-18.375l-20.766-20.767c-4.875-4.867-12.809-4.883-17.684 0l-5 5.017c-2.366 2.716-6.566 3.433-9.641 1.725a1.891 1.891 0 0 0-.234-.117c-5.85-3.9-11.424-8.642-16.741-14.292-5.483-5.158-10.233-10.725-14.108-16.566a1.798 1.798 0 0 0-.117-.217 7.836 7.836 0 0 1-.967-3.783c0-2.234.975-4.375 2.9-6.058l4.808-4.809c4.876-4.875 4.876-12.8 0-17.675l-20.79-20.79c-5.134-5.134-13.2-5.45-18.35-.717a.454.454 0 0 1-.075.058C30.35 50.927 31.818 64.744 35.292 76.485c.367 1.1 9.284 27.258 34.784 52.792 25.533 25.5 51.691 34.425 52.925 34.833Z" />
                </svg>
              </div>
              <div>
                <p style={{ fontWeight: 700, margin: 0, fontSize: "0.95rem" }}>Address</p>
                <p style={{ margin: "0.2rem 0 0", color: "#555", fontSize: "0.9rem" }}>{siteConfig.contact.address}</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="contact-form-card reveal reveal-delay-2" style={{ background: "#f5f5f5", padding: "2rem", borderRadius: 4 }}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontSize: "1.3rem", fontWeight: 700, color: siteConfig.colors.primary, marginBottom: "0.5rem" }}>
                  Thank You!
                </p>
                <p style={{ color: "#555", fontSize: "0.95rem" }}>
                  Your message has been received. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Send Us a Message
                </h3>
                <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <input style={inputStyle} type="text" placeholder="Your Name" aria-label="Your Name" />
                  <input style={inputStyle} type="email" placeholder="Your Email" aria-label="Your Email" />
                </div>
                <input style={inputStyle} type="tel" placeholder="Your Phone" aria-label="Your Phone" />
                <textarea
                  style={{ ...inputStyle, height: 120, resize: "none", paddingTop: "0.75rem" }}
                  placeholder="Your Message"
                  aria-label="Your Message"
                />
                <button
                  onClick={() => setSubmitted(true)}
                  className="btn-primary"
                  style={{ width: "100%", padding: "0.85rem", fontSize: "1rem", border: "none", borderRadius: 4, cursor: "pointer", color: "#fff", fontWeight: 600 }}
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        .contact-item:hover .contact-icon {
          transform: scale(1.1);
        }
        .contact-icon {
          transition: transform 0.2s ease;
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .form-row-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
