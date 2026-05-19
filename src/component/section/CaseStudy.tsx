"use client";

import { useState, useRef, useEffect } from "react";
import Reveal from "../ui/Reveal";
import { 
    FaArrowLeft, FaArrowRight, FaTrophy, FaLightbulb, FaFlask,
    FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark 
} from "react-icons/fa6";
import { CASE_STUDIES, STATUS_CONFIG } from "@/constant/case";

const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

export default function CaseStudy() {
    const [activeIdx, setActiveIdx] = useState(0);
    const activeCase = CASE_STUDIES[activeIdx];
    const activeStatus = STATUS_CONFIG[activeCase.status];

    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const isYouTube = activeCase.videoUrl.includes("youtube.com") || activeCase.videoUrl.includes("youtu.be");

    // Reset play/pause state khi chuyển đổi case study
    useEffect(() => {
        setIsPlaying(true);
        setIsMuted(true);
    }, [activeIdx]);

    const togglePlay = () => {
        if (isYouTube) {
            if (iframeRef.current?.contentWindow) {
                const command = isPlaying ? "pauseVideo" : "playVideo";
                iframeRef.current.contentWindow.postMessage(
                    JSON.stringify({ event: "command", func: command, args: [] }),
                    "*"
                );
                setIsPlaying(!isPlaying);
            }
            return;
        }

        if (!videoRef.current) return;
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(false);
        } else {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const toggleMute = () => {
        if (isYouTube) {
            if (iframeRef.current?.contentWindow) {
                const command = isMuted ? "unMute" : "mute";
                iframeRef.current.contentWindow.postMessage(
                    JSON.stringify({ event: "command", func: command, args: [] }),
                    "*"
                );
                setIsMuted(!isMuted);
            }
            return;
        }

        if (!videoRef.current) return;
        videoRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    // Map icon dựa theo status để làm nổi bật kết quả
    const getStatusIcon = (status: string) => {
        if (status === "win") return <FaTrophy className="text-[#34D399]" />;
        if (status === "lesson") return <FaLightbulb className="text-[#FB923C]" />;
        return <FaFlask className="text-[#7EB3F9]" />;
    };

    const nextCase = () => setActiveIdx((prev) => (prev + 1) % CASE_STUDIES.length);
    const prevCase = () => setActiveIdx((prev) => (prev - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);

    return (
        <section id="cases" className="py-24 px-5 md:px-9 border-b border-border">
            <div className="max-w-[1160px] mx-auto">

                {/* Tiêu đề */}
                <Reveal>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        Case Study
                    </div>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.04em] leading-[1.08] text-cream mb-3">
                        Một vài project thực tế.
                    </h2>
                    <p className="text-[15.5px] text-muted max-w-[640px] leading-[1.75] mb-10">
                        Em cố tình giữ lại cả những case win lẫn những project chưa đạt kết quả. Vì đôi khi, những lần fail lại là thứ giúp em hiểu rõ hơn đâu mới là điều thật sự quan trọng.
                    </p>
                </Reveal>

                {/* Tab Navigation */}
                <Reveal delay={80}>
                    <div className="flex flex-wrap gap-2.5 mb-10">
                        {CASE_STUDIES.map((c, idx) => (
                            <button
                                key={c.id}
                                onClick={() => setActiveIdx(idx)}
                                className={`px-4 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-300 ${activeIdx === idx
                                    ? "bg-green text-[#0D0D0D] border-transparent shadow-[0_4px_15px_rgba(205,255,90,0.2)]"
                                    : "bg-transparent text-muted border border-border hover:border-[rgba(240,237,232,0.3)] hover:text-cream"
                                    }`}
                            >
                                {c.shortTitle}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Khối Nội Dung Chính */}
                <Reveal delay={120}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 border border-border rounded-[24px] overflow-hidden bg-[#111] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                        {/* Cột trái: Autoplay Video & Overlay */}
                        <div className="relative min-h-[300px] lg:min-h-[500px] flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-border bg-[#050505]">
                            {isYouTube ? (
                                <iframe
                                    ref={iframeRef}
                                    key={activeCase.videoUrl}
                                    className="absolute inset-0 w-full h-full object-cover scale-[1.35] opacity-80 pointer-events-none"
                                    src={`https://www.youtube.com/embed/${getYouTubeId(activeCase.videoUrl)}?enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(activeCase.videoUrl)}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`}
                                    allow="autoplay; encrypted-media"
                                    title={activeCase.title}
                                    frameBorder="0"
                                />
                            ) : (
                                /* Thẻ Video: Dùng key để force component reload lại source khi đổi Tab */
                                <video
                                    ref={videoRef}
                                    key={activeCase.videoUrl}
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-80"
                                >
                                    <source src={activeCase.videoUrl} type="video/mp4" />
                                </video>
                            )}

                            {/* Lớp gradient mờ phủ lên video để text dễ đọc */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 pointer-events-none"></div>

                            {/* Badge Trạng Thái */}
                            <div
                                className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-md"
                                style={{ background: activeStatus.bg, border: `1px solid ${activeStatus.color}30` }}
                            >
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: activeStatus.dot }}></span>
                                <span className="text-[12px] font-bold tracking-wide" style={{ color: activeStatus.color }}>
                                    {activeStatus.label}
                                </span>
                            </div>

                            {/* Nút Điều Khiển Floating */}
                            <div className="absolute bottom-5 right-5 z-20 flex gap-2.5 opacity-60 hover:opacity-100 transition-opacity duration-300">
                                <button
                                    onClick={togglePlay}
                                    className="w-10 h-10 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-cream hover:bg-green hover:text-black hover:border-transparent transition-all duration-300"
                                    title={isPlaying ? "Tạm dừng" : "Phát"}
                                >
                                    {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="w-10 h-10 rounded-full bg-black/60 border border-white/10 backdrop-blur-md flex items-center justify-center text-cream hover:bg-green hover:text-black hover:border-transparent transition-all duration-300"
                                    title={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                                >
                                    {isMuted ? <FaVolumeXmark size={14} /> : <FaVolumeHigh size={14} />}
                                </button>
                            </div>
                        </div>

                        {/* Cột phải: Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <div className="text-[11px] font-bold tracking-[0.18em] uppercase text-[rgba(240,237,232,0.3)] mb-6">
                                {activeCase.title}
                            </div>

                            {/* Problem */}
                            <div className="pl-4 border-l-2 border-border mb-6">
                                <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.35)] mb-2">
                                    Bài toán
                                </div>
                                <div className="text-[14.5px] text-muted leading-[1.7]">
                                    {activeCase.problem}
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="pl-4 border-l-2 border-border mb-8">
                                <div className="text-[10px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.35)] mb-2">
                                    Giải pháp
                                </div>
                                <div className="text-[14.5px] text-muted leading-[1.7]">
                                    {activeCase.solution}
                                </div>
                            </div>

                            {/* Result - ĐƯỢC LÀM NỔI BẬT THEO YÊU CẦU */}
                            <div
                                className="p-5 rounded-[14px] border border-l-4 shadow-sm"
                                style={{
                                    borderColor: `${activeStatus.color}40`,
                                    borderLeftColor: activeStatus.color,
                                    background: `linear-gradient(90deg, ${activeStatus.bg}, transparent)`
                                }}
                            >
                                <div className="flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] uppercase mb-2" style={{ color: activeStatus.color }}>
                                    {getStatusIcon(activeCase.status)} Kết quả
                                </div>
                                <div className="text-[15px] font-semibold text-cream leading-[1.6]">
                                    {activeCase.result}
                                </div>
                            </div>

                            {/* Nút Điều Hướng */}
                            <div className="flex gap-3 mt-10">
                                <button
                                    onClick={prevCase}
                                    className="flex items-center gap-2 bg-transparent text-cream px-5 py-2.5 rounded-full border border-border text-[13px] font-semibold transition-all hover:border-[rgba(240,237,232,0.3)] hover:bg-[rgba(240,237,232,0.05)]"
                                >
                                    <FaArrowLeft /> Trước
                                </button>
                                <button
                                    onClick={nextCase}
                                    className="flex items-center gap-2 bg-cream text-[#0D0D0D] px-5 py-2.5 rounded-full border border-transparent text-[13px] font-bold transition-all hover:opacity-85 shadow-md"
                                >
                                    Tiếp <FaArrowRight />
                                </button>
                            </div>

                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}