import { PROCESS_STEPS, VS_BAD_ITEMS, VS_GOOD_ITEMS } from "@/constant/performance";
import Reveal from "../ui/Reveal";
import { FaXmark, FaCheck } from "react-icons/fa6";

export default function Performance() {
    return (
        <section id="perf" className="py-24 px-5 md:px-9 border-b border-border bg-[rgba(240,237,232,0.02)]">
            <div className="max-w-[1160px] mx-auto">

                {/* Header */}
                <Reveal>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        AI video cho social media &amp; quảng cáo
                    </div>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.04em] leading-[1.08] text-cream mb-14 max-w-[800px]">
                        Nhiều brand không thiếu video AI. <span className="text-muted font-light italic">Nhưng lại thiếu những video đủ tự nhiên để người xem muốn dừng lại.</span>
                    </h2>
                </Reveal>

                {/* VS Comparison Infographic */}
                <Reveal delay={80}>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-start mb-16">

                        {/* Lỗi phổ biến (BAD) */}
                        <div className="bg-card border border-border rounded-[20px] p-8 h-full transition-colors hover:border-[rgba(239,68,68,0.2)] hover:bg-[rgba(239,68,68,0.02)]">
                            <div className="text-[14px] font-bold tracking-[0.18em] uppercase text-[rgba(239,68,68,0.6)] mb-6 flex items-center gap-2">
                                <FaXmark className="text-sm" /> Những lỗi phổ biến ở AI ads hiện tại
                            </div>
                            <div className="flex flex-col gap-3.5">
                                {VS_BAD_ITEMS.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-[16px] mt-[2px] text-[rgba(239,68,68,0.6)]">{item.icon}</span>
                                        <span className="text-[14.5px] text-muted leading-[1.5]">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* VS Divider */}
                        <div className="hidden lg:flex flex-col items-center justify-center pt-16">
                            <div className="w-[52px] h-[52px] rounded-full bg-[#111] border-2 border-border flex items-center justify-center text-[13px] font-bold text-muted">
                                VS
                            </div>
                        </div>

                        {/* Hướng phát triển (GOOD) */}
                        <div className="bg-[rgba(205,255,90,0.04)] border border-[rgba(205,255,90,0.2)] rounded-[20px] p-8 h-full transition-colors hover:border-[rgba(205,255,90,0.4)] hover:shadow-[0_12px_30px_rgba(205,255,90,0.05)]">
                            <div className="text-[14px] font-bold tracking-[0.18em] uppercase text-[rgba(205,255,90,0.7)] mb-6 flex items-center gap-2">
                                <FaCheck className="text-sm" /> Hướng em đang tập trung phát triển
                            </div>
                            <div className="flex flex-col gap-3.5">
                                {VS_GOOD_ITEMS.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <span className="text-[16px] mt-[2px] text-green">{item.icon}</span>
                                        <span className="text-[14.5px] text-muted leading-[1.5] transition-colors hover:text-cream">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </Reveal>

                {/* Process Infographic */}
                <Reveal delay={120}>
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.85fr] gap-10 lg:gap-12 items-start mb-14">
                        <div>
                            <h3 className="text-[clamp(20px,2.5vw,32px)] font-bold tracking-[-0.04em] leading-[1.15] text-cream mb-5">
                                3 giây đầu quyết định tất cả.
                            </h3>
                            <p className="text-[15px] text-muted leading-[1.85] mb-5">
                                Video performance cần <strong className="text-cream font-semibold">tự nhiên như nội dung thật trên feed</strong> — không phải một mẫu quảng cáo đang cố bán hàng.
                            </p>
                            <div className="bg-[rgba(205,255,90,0.06)] border border-green/20 rounded-[12px] px-5 py-4">
                                <p className="text-[14px] text-green font-semibold leading-[1.6]">
                                    Không cần video AI đẹp nhất — cần video khiến người xem dừng lại.
                                </p>
                            </div>
                        </div>

                        <div className="bg-card border border-border rounded-[20px] overflow-hidden">
                            {PROCESS_STEPS.map((step, idx) => (
                                <div key={idx} className="flex items-center gap-4 px-6 py-4 border-b border-border last:border-b-0 hover:bg-[rgba(205,255,90,0.04)] transition-colors group cursor-default">
                                    <span className="text-[12px] font-bold text-green w-6 flex-shrink-0 tracking-[0.04em]">{step.num}</span>
                                    <span className="text-[18px] text-muted group-hover:text-green transition-colors">{step.icon}</span>
                                    <span className="text-[14px] text-muted leading-[1.4] group-hover:text-cream transition-colors">{step.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>            
            </div>
        </section>
    );
}