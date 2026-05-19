"use client";

import { useState } from "react";
import { UGC_PROJECTS } from "@/constant/ugc";
import Reveal from "../ui/Reveal";
import UGCCard from "../ui/UGCCard";
import { FaXmark } from "react-icons/fa6";

export default function UGC() {
    const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

    return (
        <section id="ugc" className="py-24 px-5 md:px-9 border-b border-border bg-[rgba(240,237,232,0.02)] relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-[1160px] mx-auto relative z-10">

                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start mb-16">
                    <Reveal>
                        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                            Realistic AI UGC Projects
                        </div>
                        <h2 className="text-[clamp(26px,3.5vw,44px)] font-bold tracking-[-0.04em] leading-[1.1] text-cream">
                            Ngoài TVC, em cũng dành khá nhiều thời gian để build realistic AI UGC.
                        </h2>
                    </Reveal>

                    {/* Nội dung được cô đọng và Highlight Keyword */}
                    <Reveal delay={80}>
                        <div className="text-[15px] text-muted leading-[1.85] flex flex-col gap-4 pt-2">
                            <p>
                                Phần lớn các video được build theo mindset <strong className="text-green font-semibold">social-first</strong>: tối ưu độ chân thực để tương thích hoàn hảo và tự nhiên nhất với feed người dùng.
                            </p>
                            <p>
                                Em nghiên cứu sâu đa dạng ngách <em>(Skincare, Fitness, Ecom, Pet...)</em> nhằm tinh chỉnh <strong className="text-cream font-semibold">motion, hook &amp; pacing</strong> — những yếu tố cốt lõi quyết định việc người dùng có dừng lại xem hay không.
                            </p>
                            <p>
                                Có video hoàn thiện nhanh chóng, nhưng cũng có những frame phải test đi test lại hàng chục lần chỉ để sửa những chi tiết cực nhỏ như <strong className="text-cream font-semibold">ánh mắt, camera shake hay cách nhân vật tương tác sản phẩm.</strong>
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* UGC Gallery Grid */}
                <Reveal delay={120}>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 lg:gap-2">
                        {UGC_PROJECTS.map((project) => (
                            <UGCCard 
                                key={project.id} 
                                project={project} 
                                onClick={() => setActiveVideoUrl(project.videoUrl)}
                            />
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={160}>
                    <p className="mt-10 text-[14px] color-[rgba(240,237,232,0.3)] leading-[1.8] max-w-[700px] text-muted italic">
                        * Phần lớn các project này em vẫn đang cập nhật workflow liên tục. Vì AI video thay đổi rất nhanh — tool thay đổi, platform update, và cách người xem phản ứng với creatives cũng thay đổi gần như mỗi tuần.
                    </p>
                </Reveal>

            </div>

            {/* Video Lightbox Modal */}
            {activeVideoUrl && (
                <div 
                    onClick={() => setActiveVideoUrl(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 transition-all duration-350 cursor-zoom-out"
                >
                    <div 
                        onClick={(e) => e.stopPropagation()} 
                        className="relative max-w-[340px] md:max-w-[400px] w-full aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] shadow-2xl flex items-center justify-center"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveVideoUrl(null)}
                            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                        >
                            <FaXmark size={18} />
                        </button>

                        <video
                            src={activeVideoUrl}
                            autoPlay
                            controls
                            loop
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}