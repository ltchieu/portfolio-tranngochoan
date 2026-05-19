"use client";

import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa6";
import { UGCProject } from "@/types/ugc";

interface UGCCardProps {
    project: UGCProject;
    onClick?: () => void;
}

export default function UGCCard({ project, onClick }: UGCCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const getYouTubeId = (url?: string) => {
        if (!url) return null;
        const patterns = [
            /youtu\.be\/([^?&/]+)/,
            /youtube\.com\/shorts\/([^?&/]+)/,
            /youtube\.com\/watch\?v=([^?&/]+)/,
            /youtube\.com\/embed\/([^?&/]+)/,
        ];
        for (const p of patterns) {
            const m = url.match(p as RegExp);
            if (m) return m[1];
        }
        return null;
    };

    const ytId = getYouTubeId(project.videoUrl);
    const ytThumbnail = ytId ? `https://img.youtube.com/vi/${ytId}/hqdefault.jpg` : null;
    const [showYtPlayer, setShowYtPlayer] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        // Only attempt to play when the source is a direct video file
        if (ytId) {
            // show inline muted autoplay iframe for YouTube on hover
            setShowYtPlayer(true);
        }
        if (!ytId && videoRef.current) {
            videoRef.current.play().catch((err) => {
                console.log("Play interrupted or failed: ", err);
            });
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (ytId) {
            setShowYtPlayer(false);
        }
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="group relative aspect-[9/16] rounded-[14px] border border-border overflow-hidden bg-[#0d0d0d] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:border-[rgba(240,237,232,0.2)] cursor-pointer"
        >
            {/* Thẻ Video hoặc YouTube thumbnail */}
            {ytThumbnail ? (
                // Show YouTube thumbnail image for YouTube links
                // hovering will replace it with a muted autoplay iframe; clicking still opens lightbox
                showYtPlayer ? (
                    <iframe
                        src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1`}
                        title={project.title}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        className="absolute inset-0 w-full h-full"
                        style={{ pointerEvents: "none" }}
                    />
                ) : (
                    <img
                        src={ytThumbnail}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />
                )
            ) : (
                <video
                    ref={videoRef}
                    src={project.videoUrl}
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
            )}

            {/* Lớp Overlay kính mờ tối đi khi hover để nổi bật nút Play */}
            <div className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors duration-300 z-10"></div>

            {/* REC Indicator (Góc trái trên) */}
            <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[8.5px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.5)] group-hover:text-white transition-colors">
                    UGC
                </span>
            </div>

            {/* Nút Play/Pause (Ẩn, hiện ra khi hover) */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                    {isHovered ? <FaPause className="text-xs" /> : <FaPlay className="text-xs ml-0.5" />}
                </div>
            </div>

            {/* Title & Tags Bottom Box */}
            <div className="absolute bottom-0 left-0 right-0 p-2 z-20 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-[rgba(13,13,13,0.7)] backdrop-blur-md rounded-[10px] p-2.5 border border-white/5 group-hover:border-white/15 transition-colors">
                    <div className="text-[10px] font-semibold text-cream leading-[1.35] mb-2 line-clamp-2">
                        {project.title}
                    </div>
                    <div className="flex gap-1.5 flex-wrap">
                        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-green text-[#0D0D0D] tracking-[0.08em] uppercase">
                            {project.tags[0]}
                        </span>
                        <span className="text-[8px] px-2 py-0.5 rounded-full border border-border text-[rgba(240,237,232,0.4)] tracking-[0.08em] uppercase">
                            {project.tags[1]}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
