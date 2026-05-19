import Marquee from "react-fast-marquee";

const TICKER_ITEMS = [
  "AI TVC",
  "Realistic AI UGC",
  "Performance Creatives",
  "AI Fashion Reels",
  "Brand Film",
  "Social-first Videos",
  "Hook-first Ads",
  "Visual Storytelling",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-y border-border bg-[rgba(205,255,90,0.04)] py-[14px]">
      <Marquee autoFill speed={40} gradient={false}>
        {TICKER_ITEMS.map((item, index) => (
          <span
            key={index}
            className={`text-[12px] font-bold tracking-[0.15em] uppercase pr-12 whitespace-nowrap ${index % 2 === 0 ? "text-green" : "text-[rgba(240,237,232,0.35)]"
              }`}
          >
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
}