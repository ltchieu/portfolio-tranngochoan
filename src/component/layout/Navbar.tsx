"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] px-4 sm:px-5 md:px-9 transition-all duration-350 ${isScrolled
        ? "bg-[#0D0D0DE6] backdrop-blur-[20px] border-b border-border"
        : ""
        }`}
    >
      <div className="max-w-[1160px] mx-auto h-[68px] flex items-center justify-between gap-4 md:gap-11">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="min-w-0 text-[14px] sm:text-[16px] md:text-[18px] font-bold tracking-[0.14em] sm:tracking-[0.18em] md:tracking-[0.22em] uppercase cursor-pointer truncate"
          title="truongngochoan.com"
        >
          truongngochoan<span className="text-green">.</span>com
        </div>
        <nav className="relative flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7 min-w-0">
          {/* Desktop inline menu */}
          <div className="hidden lg:flex items-center gap-4 lg:gap-7 min-w-0">
            <Link href="#hero" className="text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em] whitespace-nowrap">Giới thiệu</Link>
            <Link href="#problem" className="text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em] whitespace-nowrap">Vấn đề</Link>
            <Link href="#solution" className="text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em] whitespace-nowrap">Giải pháp</Link>
            <Link href="#perf" className="text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em] whitespace-nowrap">Performance</Link>
            <Link href="#cases" className="text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em] whitespace-nowrap">Case Study</Link>
          </div>

          {/* Mobile/Tablet hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(240,237,232,0.15)] bg-[rgba(240,237,232,0.06)] text-cream transition-all duration-300 hover:border-green/40 hover:bg-[rgba(205,255,90,0.08)]"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-[3px]">
              <span className="block h-[2px] w-[18px] bg-current rounded-full"></span>
              <span className="block h-[2px] w-[18px] bg-current rounded-full"></span>
              <span className="block h-[2px] w-[18px] bg-current rounded-full"></span>
            </span>
          </button>

          {isMenuOpen && (
            <div className="lg:hidden absolute right-0 top-[calc(100%+10px)] w-[min(320px,calc(100vw-2rem))] rounded-2xl border border-border bg-[#0D0D0DE6] backdrop-blur-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.55)] overflow-hidden">
              <div className="p-2">
                <Link
                  href="#hero"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[13px] text-cream/90 hover:text-cream hover:bg-[rgba(240,237,232,0.06)] transition-colors"
                >
                  Giới thiệu
                </Link>
                <Link
                  href="#problem"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[13px] text-cream/90 hover:text-cream hover:bg-[rgba(240,237,232,0.06)] transition-colors"
                >
                  Vấn đề
                </Link>
                <Link
                  href="#solution"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[13px] text-cream/90 hover:text-cream hover:bg-[rgba(240,237,232,0.06)] transition-colors"
                >
                  Giải pháp
                </Link>
                <Link
                  href="#perf"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[13px] text-cream/90 hover:text-cream hover:bg-[rgba(240,237,232,0.06)] transition-colors"
                >
                  Performance
                </Link>
                <Link
                  href="#cases"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-[13px] text-cream/90 hover:text-cream hover:bg-[rgba(240,237,232,0.06)] transition-colors"
                >
                  Case Study
                </Link>
              </div>
            </div>
          )}
          <Link
            href="#contact"
            className="bg-green text-bg px-4 sm:px-[22px] py-2 sm:py-[9px] rounded-full font-bold text-[12px] sm:text-[13px] hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Liên hệ ngay
          </Link>
        </nav>
      </div>
    </header>
  );
}