"use client";

import { useState } from "react";
import { trackingData } from "@/config/trackingData";

export default function TrackingPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<typeof trackingData[0] | null>(null);

  const handleTrack = () => {
    const trimmed = code.trim();
    if (!trimmed) {
      setError("Please enter a tracking code.");
      setResult(null);
      return;
    }

    const found = trackingData.find(
      (entry) => entry.trackingCode.toLowerCase() === trimmed.toLowerCase()
    );

    if (found) {
      setResult(found);
      setError("");
    } else {
      setResult(null);
      setError(`Invalid Tracking Code — No package found for "${trimmed}".`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleTrack();
  };

  return (
    <>
      {/* Hero banner */}
      <section
        className="hero-banner"
        style={{
          backgroundImage: "url('/images/tracking-hero.jpeg')",
        }}
      >
        <div className="overlay" />
        <div className="content">
          <h1>Track Your Package</h1>
          <p>
            Enter your tracking code below to get real-time updates on your
            shipment's location and status.
          </p>
        </div>
      </section>

      {/* Search section */}
      <section className="section-padding reveal" style={{ background: "#f5f5f5" }}>
        <div className="container" style={{ maxWidth: 600, textAlign: "center" }}>
          {/* Input row */}
          <div className="tracking-search reveal reveal-delay-1" style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem" }}>
            <input
              type="text"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError("");
              }}
              onKeyDown={handleKeyDown}
              placeholder="Enter your tracking code"
              aria-label="Tracking code"
              style={{
                flex: 1,
                padding: "0.85rem 1rem",
                border: error ? "2px solid #FF4040" : "1px solid #ddd",
                borderRadius: 4,
                fontSize: "1rem",
                fontFamily: "inherit",
                outline: "none",
                background: "#fff",
                transition: "border-color 0.2s ease",
              }}
            />
            <button
              onClick={handleTrack}
              className="btn-primary"
              style={{
                padding: "0.85rem 2rem",
                fontSize: "1rem",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                color: "#fff",
                fontWeight: 600,
                whiteSpace: "nowrap",
                transition: "background 0.2s ease, transform 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = "translateY(0)"; }}
            >
              Track
            </button>
          </div>

          {/* Error message */}
          {error && (
            <p
              className="reveal"
              style={{
                color: "#FF4040",
                fontSize: "0.95rem",
                fontWeight: 600,
                margin: 0,
              }}
            >
              {error}
            </p>
          )}

          {/* Success result */}
          {result && (
            <div
              className="tracking-result reveal"
              style={{
                marginTop: "2rem",
                padding: "2rem",
                background: "#fff",
                borderRadius: 4,
                textAlign: "left",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "1rem", color: "#333" }}>
                Package Found
              </h3>
              <div
                className="tracking-details"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  fontSize: "0.95rem",
                }}
              >
                <div><strong>Tracking Code:</strong> {result.trackingCode}</div>
                <div><strong>Status:</strong> {result.status}</div>
                <div><strong>Origin:</strong> {result.origin}</div>
                <div><strong>Destination:</strong> {result.destination}</div>
                <div><strong>Last Update:</strong> {result.lastUpdate}</div>
                <div><strong>Est. Delivery:</strong> {result.estimatedDelivery}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 480px) {
          .tracking-search {
            flex-direction: column !important;
          }
          .tracking-details {
            grid-template-columns: 1fr !important;
          }
          .tracking-result {
            padding: 1.25rem !important;
          }
        }
      `}</style>
    </>
  );
}
