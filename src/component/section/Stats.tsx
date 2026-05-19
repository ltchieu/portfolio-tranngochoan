"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import Reveal from "../ui/Reveal";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const [typedLabel, setTypedLabel] = useState("");
  const [typedDirection, setTypedDirection] = useState("");

  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          if (currentSection) {
            observer.unobserve(currentSection);
          }
        }
      },
      { threshold: 0.2 }
    );

    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  useEffect(() => {
    if (!hasEnteredView) return;

    const label = "Meta · TikTok";
    const direction = "Realistic AI";
    let labelIndex = 0;
    let directionIndex = 0;

    setTypedLabel("");
    setTypedDirection("");

    const timer = window.setInterval(() => {
      if (labelIndex < label.length) {
        labelIndex += 1;
        setTypedLabel(label.slice(0, labelIndex));
        return;
      }

      if (directionIndex < direction.length) {
        directionIndex += 1;
        setTypedDirection(direction.slice(0, directionIndex));
        return;
      }

      window.clearInterval(timer);
    }, 65);

    return () => window.clearInterval(timer);
  }, [hasEnteredView]);

  return (
    <div ref={sectionRef} className="bg-[rgba(240,237,232,0.03)] border-b border-border py-14 px-5 md:px-9">
      <div className="max-w-[1160px] mx-auto">
        <Reveal>
          <p className="text-[14px] text-muted mb-10 max-w-[580px] leading-[1.7]">
            Một vài con số dù không quá lớn... nhưng cũng đủ nói lên phần nào những gì em đã làm trong thời gian gần đây.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-border">
          <Reveal delay={0} className="bg-bg p-8 md:px-8 md:py-9 h-full">
            <div className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.05em] leading-none text-green mb-2">
              {hasEnteredView ? <CountUp end={100} duration={2.4} suffix="+" separator="," /> : "0+"}
            </div>
            <div className="text-[13px] text-muted leading-[1.5]">AI UGC creatives produced</div>
          </Reveal>
          <Reveal delay={60} className="bg-bg p-8 md:px-8 md:py-9 h-full">
            <div className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.05em] leading-none text-green mb-2">
              {hasEnteredView ? <CountUp end={10} duration={2} suffix="+" separator="," /> : "0+"}
            </div>
            <div className="text-[13px] text-muted leading-[1.5]">Commercial projects completed</div>
          </Reveal>
          <Reveal delay={120} className="bg-bg p-8 md:px-8 md:py-9 h-full">
            <div className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.05em] leading-none text-green mb-2 min-h-[1.1em]">
              {hasEnteredView ? typedLabel : ""}
            </div>
            <div className="text-[13px] text-muted leading-[1.5]">Platforms focused</div>
          </Reveal>
          <Reveal delay={180} className="bg-bg p-8 md:px-8 md:py-9 h-full">
            <div className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.05em] leading-none text-green mb-2 min-h-[1.1em]">
              {hasEnteredView ? typedDirection : ""}
            </div>
            <div className="text-[13px] text-muted leading-[1.5]">Main creative direction</div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}