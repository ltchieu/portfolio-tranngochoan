"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { SERVICE_GALLERY } from "@/constant/contact";
import { FaEnvelope, FaPhone, FaTelegram, FaXmark, FaFacebook } from "react-icons/fa6";

export default function Contact() {
    const [activeImageUrl, setActiveImageUrl] = useState<string | null>(null);
    // Gấp đôi mảng dữ liệu để tạo hiệu ứng lặp vô cực mượt mà
    const marqueeItems = [...SERVICE_GALLERY, ...SERVICE_GALLERY];

    return (
        <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden border-t border-border">

            {/* Định nghĩa CSS Animation cho băng chuyền */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scroll-infinite {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 35s linear infinite;
        }
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
      `}} />

            {/* Hiệu ứng ánh sáng nền */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1160px] mx-auto px-5 md:px-9 relative z-10">

                <Reveal>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-green mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        Một vài điều em muốn nói thật lòng
                    </div>
                    <h2 className="text-[clamp(28px,4.5vw,56px)] font-bold tracking-[-0.04em] leading-[1.05] text-cream mb-10">
                        Em vẫn đang học hỏi mỗi ngày cùng AI.<br />
                        <span className="text-muted font-light italic">Nhưng sẽ luôn nỗ lực hết sức cho từng project.</span>
                    </h2>
                </Reveal>

                {/* Đoạn Text đã được cô đọng và Highlight */}
                <Reveal delay={80}>
                    <div className="text-[15.5px] text-[rgba(240,237,232,0.55)] leading-[1.85] max-w-[800px] flex flex-col gap-5 mb-16">
                        <p>
                            Em không phải một studio lớn với ekip hàng chục người, nhưng em dành sự tập trung cao độ để đào sâu vào <strong className="text-cream">Realistic AI UGC, Cinematic TVC</strong> và tối ưu hiệu suất quảng cáo thực tế.
                        </p>
                        <p>
                            Công nghệ thay đổi mỗi ngày, nhưng em luôn giữ vững một nguyên tắc từ đầu: <strong className="text-green">làm mọi project bằng sự nghiêm túc và tinh thần học hỏi cao nhất.</strong>
                        </p>
                        <p className="p-4 rounded-xl border border-border bg-[rgba(240,237,232,0.03)] text-muted">
                            Nếu anh/chị cần triển khai các chiến dịch: <strong className="text-cream">AI TVC • Mascot AI • Livestream AI • Fanpage Social • Visual Campaign...</strong> em rất sẵn sàng đồng hành, brainstorm và thực thi hết mình ✨
                        </p>
                    </div>
                </Reveal>

            </div>

            {/* Băng chuyền hình ảnh vô cực (Infinite Marquee) */}
            <Reveal delay={120}>
                <div className="w-full overflow-hidden mb-16 relative py-4">
                    {/* Lớp sương mù che 2 viền màn hình */}
                    <div className="absolute inset-y-0 left-0 w-[100px] bg-linear-to-r from-[#050505] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-[100px] bg-linear-to-l from-[#050505] to-transparent z-20 pointer-events-none"></div>

                    <div className="flex w-max animate-scroll-infinite gap-4 px-2">
                        {marqueeItems.map((item, index) => (
                            <div
                                key={`${item.id}-${index}`}
                                onClick={() => setActiveImageUrl(item.img)}
                                className="group relative w-[280px] sm:w-[320px] aspect-square rounded-[16px] overflow-hidden border border-border flex-shrink-0 cursor-pointer transition-all duration-300 hover:border-green/50 hover:shadow-[0_10px_30px_rgba(205,255,90,0.1)]"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Lớp overlay đen mờ ở đáy để nổi chữ */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Tiêu đề góc dưới */}
                                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                    <span className="text-[12px] font-bold tracking-[0.1em] text-cream uppercase">
                                        {item.title}
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-green opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Reveal>

            {/* CTA Contact Card */}
            <Reveal delay={160}>
                <div className="max-w-[1160px] mx-auto px-5 md:px-9">
                    <div className="relative rounded-[20px] border border-green/20 bg-[rgba(205,255,90,0.03)] backdrop-blur-sm p-8 md:p-10 overflow-hidden">
                        {/* Decorative glow */}
                        <div className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-green/10 blur-[100px] rounded-full pointer-events-none" />

                        <div className="relative z-10">
                            <h3 className="text-[clamp(18px,2.5vw,24px)] font-bold text-cream mb-2 tracking-[-0.02em]">
                                Liên hệ ngay để trao đổi về project 🚀
                            </h3>
                            <p className="text-[14px] text-muted mb-8 max-w-[500px]">
                                Em luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp nhất cho nhu cầu của anh/chị.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <a
                                    href="mailto:contact.hoantruong@gmail.com"
                                    className="group/btn flex items-center gap-2.5 bg-green text-[#0D0D0D] px-7 py-3.5 rounded-full text-[14px] font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(205,255,90,0.3)]"
                                >
                                    <FaEnvelope className="text-[16px]" />
                                    contact.hoantruong@gmail.com
                                </a>
                                <a
                                    href="https://zalo.me/0969842582"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 bg-[rgba(240,237,232,0.08)] text-cream px-7 py-3.5 rounded-full border border-[rgba(240,237,232,0.15)] text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:bg-[rgba(205,255,90,0.08)] hover:shadow-[0_8px_25px_rgba(205,255,90,0.1)]"
                                >
                                    <FaPhone className="text-[15px]" />
                                    +84 969 842 582
                                    <span className="text-[11px] text-green font-bold tracking-wide ml-1">ZALO</span>
                                </a>
                                <a
                                    href="https://t.me/sannxynapse"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 bg-[rgba(240,237,232,0.08)] text-cream px-7 py-3.5 rounded-full border border-[rgba(240,237,232,0.15)] text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:bg-[rgba(205,255,90,0.08)] hover:shadow-[0_8px_25px_rgba(205,255,90,0.1)]"
                                >
                                    <FaTelegram className="text-[16px]" />
                                    @sannxynapse
                                </a>
                                <a
                                    href="https://www.facebook.com/callmenoha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2.5 bg-[rgba(240,237,232,0.08)] text-cream px-7 py-3.5 rounded-full border border-[rgba(240,237,232,0.15)] text-[14px] font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-green/40 hover:bg-[rgba(205,255,90,0.08)] hover:shadow-[0_8px_25px_rgba(205,255,90,0.1)]"
                                >
                                    <FaFacebook className="text-[16px]" />
                                    callmenoha
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>

            {/* Image Lightbox Modal */}
            {activeImageUrl && (
                <div 
                    onClick={() => setActiveImageUrl(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 transition-all duration-350 cursor-zoom-out"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()} 
                        className="relative max-w-[90vw] max-h-[85vh] aspect-square w-[500px] md:w-[600px] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl flex items-center justify-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveImageUrl(null)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                        >
                            <FaXmark size={18} />
                        </button>

                        <div className="relative w-full h-full">
                            <Image
                                src={activeImageUrl}
                                alt="Service Preview"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}