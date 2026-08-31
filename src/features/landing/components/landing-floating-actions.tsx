"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { LANDING_WHATSAPP } from "@/features/landing/data/landing-content";
import { scrollToHero } from "@/features/landing/lib/scroll-to";

export function LandingFloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={`https://wa.me/${LANDING_WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-emerald-600"
        aria-label="Chat on WhatsApp"
        title="Chat with us"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {showTop && (
        <button
          type="button"
          onClick={scrollToHero}
          className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#0284c7] text-white shadow-lg transition-all hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
