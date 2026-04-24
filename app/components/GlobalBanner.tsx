"use client";

import { siteConfig } from "@/config/siteConfig";
import { useState, useEffect } from "react";
import type { JSX } from "react";

/**
 * GlobalBanner — a highly visible announcement bar at the very top of every page.
 * Shows a scrolling ticker of branch locations with flag emojis.
 * Dismissible via close button (stored in sessionStorage so it stays closed per session).
 */
export default function GlobalBanner() {
  const [visible, setVisible] = useState(true);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("global-banner-dismissed");
    if (stored === "true") setDismissed(true);
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("global-banner-dismissed", "true");
    // Wait for collapse animation, then mark dismissed
    setTimeout(() => setDismissed(true), 400);
  };

  // Don't render at all if permanently dismissed
  if (dismissed) return null;

  const primary = siteConfig.colors.primary;
  const secondary = siteConfig.colors.secondary;

  return (
    <div
      className="global-banner"
      style={{
        background: `linear-gradient(135deg, ${primary} 0%, #cc0000 50%, ${secondary} 100%)`,
        color: "#fff",
        overflow: "hidden",
        position: "relative",
        zIndex: 101,
        maxHeight: visible ? 60 : 0,
        opacity: visible ? 1 : 0,
        transition: "max-height 0.4s ease, opacity 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
        {/* Pulsing globe icon */}
        <span
          style={{
            fontSize: "1.2rem",
            animation: "bannerPulse 2s ease-in-out infinite",
            flexShrink: 0,
          }}
        >
          🌍
        </span>

        {/* Main text — bold and prominent */}
        <span
          style={{
            fontWeight: 800,
            fontSize: "clamp(0.8rem, 1.2vw, 1rem)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          🌏 We Have Branches Worldwide —
        </span>

        {/* Scrolling country flags ticker */}
        <div className="banner-ticker" style={{ overflow: "hidden", flex: 1, minWidth: 200, position: "relative" }}>
          <div
            className="banner-ticker-track"
            style={{
              display: "flex",
              gap: "1.5rem",
              whiteSpace: "nowrap",
              animation: "bannerScroll 20s linear infinite",
              width: "max-content",
            }}
          >
            {/* Duplicate the list for seamless loop */}
            {[...siteConfig.branches, ...siteConfig.branches].map((b, i) => (
              <span
                key={`${b.country}-${i}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
                  fontWeight: 600,
                  background: "rgba(255,255,255,0.15)",
                  padding: "0.2rem 0.7rem",
                  borderRadius: 20,
                  backdropFilter: "blur(4px)",
                }}
              >
                <span style={{ fontSize: "1.1rem" }}>{b.flag}</span>
                {b.country}
              </span>
            ))}
          </div>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            width: 28,
            height: 28,
            borderRadius: "50%",
            cursor: "pointer",
            fontSize: "0.85rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "rgba(255,255,255,0.35)";
            (e.target as HTMLElement).style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "rgba(255,255,255,0.2)";
            (e.target as HTMLElement).style.transform = "scale(1)";
          }}
        >
          ✕
        </button>
      </div>

      <style>{`
        @keyframes bannerPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        @keyframes bannerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .global-banner > div {
            padding: 0.4rem 0.75rem !important;
            gap: 0.5rem !important;
          }
          .banner-ticker {
            min-width: 140px !important;
          }
          .banner-ticker-track {
            gap: 1rem !important;
            animation-duration: 15s !important;
          }
        }

        @media (max-width: 480px) {
          .global-banner > div {
            flex-wrap: nowrap !important;
            padding: 0.35rem 0.5rem !important;
          }
          .banner-ticker {
            min-width: 100px !important;
          }
          .banner-ticker-track {
            gap: 0.75rem !important;
            animation-duration: 12s !important;
          }
        }
      `}</style>
    </div>
  );
}
