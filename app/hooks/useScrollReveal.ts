"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollRevealObserver — a singleton IntersectionObserver that watches
 * all elements with the `.reveal` class and adds `.visible` when they
 * enter the viewport. This avoids needing a hook in every component.
 *
 * Just add `class="reveal"` (and optionally `reveal-delay-1` etc.) to
 * any element you want to animate in on scroll.
 */
export function useScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    // Observe all current .reveal elements
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Observe any future .reveal elements (e.g., after dynamic rendering)
    const mutationObserver = new MutationObserver(() => {
      document.querySelectorAll(".reveal:not(.observed)").forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}
