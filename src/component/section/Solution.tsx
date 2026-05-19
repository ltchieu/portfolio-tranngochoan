"use client"; // Bắt buộc thêm dòng này để sử dụng React Hooks cho Animation

import { useState, useEffect } from "react";
import Image from "next/image";
import Reveal from "../ui/Reveal";
import { TOOLS_DATA } from "@/constant/solution";
import { WORKFLOW_STEPS } from "@/constant/workflow";

export default function Solution() {
    // State quản lý hiệu ứng chạy ngang cho Pipeline
    const [activeStep, setActiveStep] = useState(0);

    // Tự động chạy từ 0 đến 6 (7 bước) mỗi 1.5 giây
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 7);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="solution" className="py-24 px-5 md:px-9 border-b border-border bg-[rgba(240,237,232,0.02)]">
            <div className="max-w-[1160px] mx-auto">

                {/* Header Section */}
                <Reveal>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        Giải pháp &amp; workflow
                    </div>
                </Reveal>

                <Reveal delay={40}>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.04em] leading-[1.08] mb-4 text-cream">
                        Thay vì chỉ &quot;gen video AI cho đẹp&quot;, em build workflow theo hướng:{" "}
                        <span className="text-muted font-light italic">creative production có thể thật sự vận hành được.</span>
                    </h2>
                </Reveal>

                <Reveal delay={80}>
                    <p className="text-[16px] text-muted max-w-[680px] leading-[1.85] mb-14">
                        Sau khá nhiều lần fail, em nhận ra vấn đề không bao giờ chỉ nằm ở tool. Mà nằm ở cách build workflow, cách tư duy production và cách giữ cho visual đủ tự nhiên khi đưa lên social media thật. Vì vậy em thường build AI production theo kiểu: <strong className="text-cream font-semibold">mindset + skillset + toolset</strong> đi cùng nhau.
                    </p>
                </Reveal>

                {/* 1. MST Grid - VỚI ẢNH MINH HỌA CINEMATIC */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    {/* Card 1: Mindset */}
                    <Reveal delay={120} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-green/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(205,255,90,0.08)] flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image src="/img/solution1.png" alt="Creative-first thinking" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                <div className="absolute inset-0 bg-linear-to-t from-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-green/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-green/10 group-hover:-translate-y-2">01</div>
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-green/80">Mindset</div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-green">Creative-first thinking</div>
                                <div className="text-[14px] text-muted leading-[1.75] [&>p]:mb-2.5 relative z-10">
                                    <p>Không bắt đầu bằng &quot;tool nào mạnh nhất&quot;. Mà bắt đầu từ: người xem sẽ cảm thấy gì? Brand cần kể câu chuyện gì?</p>
                                    <p>Với AI TVC, em ưu tiên concept, visual direction, cảm xúc thương hiệu và sự nhất quán trong từng scene.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Skillset */}
                    <Reveal delay={160} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-blue/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(91,156,246,0.08)] flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image src="/img/solution2.png" alt="Production & prompting" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                <div className="absolute inset-0 bg-linear-to-t from-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-blue/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-blue/10 group-hover:-translate-y-2">02</div>
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-blue/80">Skillset</div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-blue">Production &amp; prompting</div>
                                <div className="text-[14px] text-muted leading-[1.75] [&>p]:mb-2.5 relative z-10">
                                    <p>Build prompt structure cho image &amp; video AI theo từng mục tiêu cụ thể.</p>
                                    <p>Storyboard, character consistency, camera angle, motion control, pacing, sound design và final edit.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Toolset */}
                    <Reveal delay={200} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-purple/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(184,156,246,0.08)] flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-purple origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image src="/img/solution3.png" alt="AI production pipeline" fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                <div className="absolute inset-0 bg-linear-to-t from-purple/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-purple/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-purple/10 group-hover:-translate-y-2">03</div>
                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-purple/80">Toolset</div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-purple">AI production pipeline</div>
                                <div className="text-[14px] text-muted leading-[1.75] [&>p]:mb-2.5 relative z-10">
                                    <p>ChatGPT · Gemini · Nano Banana · Midjourney · Veo 3 · Kling · Seedance · ElevenLabs · Suno...</p>
                                    <p>Quan trọng nhất là biết ghép chúng thành một workflow có thể sản xuất thật, không chỉ demo đẹp.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                </div>

                {/* Workflow infographic */}
                <Reveal delay={240}>
                    <div className="mb-9">
                        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                            AI TVC / cinematic workflow
                        </div>
                        <h3 className="text-[clamp(22px,3vw,36px)] font-bold tracking-[-0.04em] leading-[1.1] text-cream mb-3">
                            Production pipeline của em — khá giống một ekip thật.
                        </h3>
                        <p className="text-[15px] text-muted leading-[1.75] max-w-[600px]">
                            Thay vì chỉ prompt ngẫu nhiên rồi render, em chia workflow thành nhiều layer nhỏ để giữ consistency tốt hơn: nhân vật ít bị lệch mặt, visual đồng đều, chuyển động có logic.
                        </p>
                    </div>
                </Reveal>

                {/* 7 Steps - PIPELINE CHẠY TỰ ĐỘNG (AUTO-PULSE) */}
                <Reveal delay={280}>

                    {/* DESKTOP VIEW: Horizontal Staggered Pipeline */}
                    <div className="hidden lg:grid grid-cols-7 w-full mb-16 mt-10 relative">
                        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0"></div>

                        {WORKFLOW_STEPS.map((step, idx) => {
                            const isAct = activeStep === idx; // Chỉ dựa vào Auto-Pulse

                            return (
                                <div key={idx} className="flex flex-col items-center w-full relative z-10 px-1.5">

                                    {/* NỬA TRÊN: Dành cho các bước lẻ */}
                                    <div className="h-[150px] w-full flex flex-col justify-end items-center pb-0">
                                        {idx % 2 === 0 && (
                                            <>
                                                <div className={`border rounded-[16px] p-5 text-center w-full transition-all duration-500 relative z-20 
                          ${isAct ? 'border-green/50 shadow-[0_8px_25px_rgba(205,255,90,0.12)] -translate-y-1 bg-[#111]' : 'bg-card border-border'}`}>
                                                    <div className={`text-[10px] font-bold tracking-[0.14em] text-green transition-transform duration-500 origin-center inline-block mb-3 ${isAct ? 'scale-110' : ''}`}>{step.n}</div>
                                                    <div className={`text-[24px] mb-2.5 flex justify-center transition-colors duration-500 ${isAct ? 'text-green' : 'text-cream'}`}>{step.icon}</div>
                                                    <div className={`text-[12px] leading-[1.4] font-medium transition-colors duration-500 ${isAct ? 'text-cream' : 'text-muted'}`}>{step.lbl}</div>
                                                </div>
                                                {/* Tia dẫn */}
                                                <div className={`w-[1px] h-6 transition-all duration-500 mt-2 ${isAct ? 'bg-green shadow-[0_0_8px_rgba(205,255,90,0.5)]' : 'bg-border'}`}></div>
                                            </>
                                        )}
                                    </div>

                                    {/* TRẠM KẾT NỐI (CENTER NODE) */}
                                    <div className="w-full h-8 flex items-center justify-center relative">
                                        <div className={`absolute h-[2px] bg-green transition-opacity duration-500 z-0
                      ${idx === 0 ? 'w-1/2 right-0' : idx === 6 ? 'w-1/2 left-0' : 'w-full'}
                      ${isAct ? 'opacity-100' : 'opacity-0'}
                    `}></div>
                                        <div className={`w-3 h-3 rounded-full transition-all duration-500 z-10 relative
                      ${isAct ? 'border-green bg-green shadow-[0_0_12px_rgba(205,255,90,0.8)]' : 'bg-[#0d0d0d] border-[2px] border-muted'}
                    `}></div>
                                    </div>

                                    {/* NỬA DƯỚI: Dành cho các bước chẵn */}
                                    <div className="h-[150px] w-full flex flex-col justify-start items-center pt-0">
                                        {idx % 2 === 1 && (
                                            <>
                                                <div className={`w-[1px] h-6 transition-all duration-500 mb-2 ${isAct ? 'bg-green shadow-[0_0_8px_rgba(205,255,90,0.5)]' : 'bg-border'}`}></div>
                                                <div className={`border rounded-[16px] p-5 text-center w-full transition-all duration-500 relative z-20 
                          ${isAct ? 'border-green/50 shadow-[0_8px_25px_rgba(205,255,90,0.12)] translate-y-1 bg-[#111]' : 'bg-card border-border'}`}>
                                                    <div className={`text-[10px] font-bold tracking-[0.14em] text-green transition-transform duration-500 origin-center inline-block mb-3 ${isAct ? 'scale-110' : ''}`}>{step.n}</div>
                                                    <div className={`text-[24px] mb-2.5 flex justify-center transition-colors duration-500 ${isAct ? 'text-green' : 'text-cream'}`}>{step.icon}</div>
                                                    <div className={`text-[12px] leading-[1.4] font-medium transition-colors duration-500 ${isAct ? 'text-cream' : 'text-muted'}`}>{step.lbl}</div>
                                                </div>
                                            </>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* MOBILE / TABLET VIEW: Vertical Timeline (Chạy tự động) */}
                    <div className="lg:hidden flex flex-col gap-5 relative border-l border-border ml-3 mb-10 mt-6">
                        {WORKFLOW_STEPS.map((step, idx) => {
                            const isAct = activeStep === idx;

                            return (
                                <div key={idx} className="relative pl-8">
                                    <div className={`absolute -left-[6.5px] top-6 w-3 h-3 rounded-full transition-all duration-500 
                    ${isAct ? 'border-[2px] border-green bg-green shadow-[0_0_10px_rgba(205,255,90,0.8)]' : 'bg-[#0d0d0d] border-[2px] border-muted'}
                  `}></div>

                                    <div className={`border rounded-[16px] p-4 flex items-center gap-4 transition-all duration-500 
                    ${isAct ? 'border-green/50 bg-[#111]' : 'bg-card border-border'}`}>
                                        <div className={`w-12 h-12 rounded-full border flex-shrink-0 flex items-center justify-center text-[20px] transition-colors duration-500 
                      ${isAct ? 'text-green border-green/30 bg-[rgba(205,255,90,0.05)]' : 'bg-[rgba(240,237,232,0.03)] border-border text-cream'}`}>
                                            {step.icon}
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-bold tracking-[0.14em] text-green mb-1.5">{step.n}</div>
                                            <div className={`text-[13px] leading-[1.4] font-medium transition-colors duration-500 ${isAct ? 'text-cream' : 'text-muted'}`}>{step.lbl}</div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </Reveal>

                {/* Tool Row - Tiêu đề nổi bật + hàng công cụ */}
                <Reveal delay={300}>
                    <div className="mb-6 mt-12">
                        <h3 className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] text-cream">Các công cụ em hay dùng</h3>
                    </div>
                </Reveal>
                <Reveal delay={320}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TOOLS_DATA.map((tool, idx) => (
                            <div key={idx} className={`bg-[#111] border rounded-[16px] py-[22px] px-6 transition-all duration-300 ${tool.cardStyle} group`}>
                                <div className={`text-[11px] font-bold tracking-[0.16em] uppercase mb-4 transition-transform origin-left group-hover:scale-105 ${tool.catStyle}`}>{tool.cat}</div>
                                <div className="flex flex-wrap gap-2.5">
                                    {tool.tags.map((t, i) => (
                                        <span key={i} className={`border rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-300 cursor-default ${tool.tagStyle}`}>{t}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    );
}