"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] px-5 md:px-9 transition-all duration-350 ${isScrolled
        ? "bg-[#0D0D0DE6] backdrop-blur-[20px] border-b border-border"
        : ""
        }`}
    >
      <div className="max-w-[1160px] mx-auto h-[68px] flex items-center justify-between gap-11">
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[18px] font-bold tracking-[0.22em] uppercase cursor-pointer"
        >
          truongngochoan<span className="text-green">.</span>com
        </div>
        <nav className="flex items-center gap-7">
          <Link href="#hero" className="hidden md:block text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em]">Giới thiệu</Link>
          <Link href="#problem" className="hidden md:block text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em]">Vấn đề</Link>
          <Link href="#solution" className="hidden md:block text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em]">Giải pháp</Link>
          <Link href="#perf" className="hidden md:block text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em]">Performance</Link>
          <Link href="#cases" className="hidden md:block text-[13px] text-muted hover:text-cream transition-colors tracking-[0.02em]">Case Study</Link>
          <Link
            href="#contact"
            className="bg-green text-bg px-[22px] py-[9px] rounded-full font-bold text-[13px] hover:opacity-90 transition-opacity"
          >
            Liên hệ ngay
          </Link>
        </nav>
      </div>
    </header>
  );
}