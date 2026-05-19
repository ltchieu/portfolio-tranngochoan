import Reveal from "../ui/Reveal";
import Image from "next/image";
import { TOOLS_DATA } from "@/constant/solution";
import {
    FaClipboardList,
    FaUserAstronaut,
    FaShirt,
    FaFilm,
    FaVideo,
    FaHeadphones,
    FaRocket
} from "react-icons/fa6";

export default function Solution() {
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

                {/* 1. MST Grid - ĐÃ ĐƯỢC LÀM NỔI BẬT SỐ VÀ TIÊU ĐỀ CHỮ */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

                    {/* Card 1: Mindset (Chủ đề Xanh Green) */}
                    <Reveal delay={120} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-green/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(205,255,90,0.08)] flex flex-col">

                            {/* Đường line trượt trên đỉnh */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-green origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            {/* Khu vực Hình ảnh */}
                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                {/* Lớp phủ tối mờ đi khi hover */}
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image
                                    src="/img/solution1.png"
                                    alt="Creative-first thinking"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                />
                                {/* Hiệu ứng sương mù hòa trộn ảnh vào nền */}
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            {/* Khu vực Nội dung */}
                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                {/* Lớp nền phát quang nhẹ dưới đáy */}
                                <div className="absolute inset-0 bg-linear-to-t from-green/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

                                {/* Số 01 dạng Watermark chìm ở góc phải */}
                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-green/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-green/10 group-hover:-translate-y-2">
                                    01
                                </div>

                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-green/80">
                                    Mindset
                                </div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-green">
                                    Creative-first thinking
                                </div>
                                <div className="text-[14px] text-muted leading-[1.75] [&>p]:mb-2.5 relative z-10">
                                    <p>Không bắt đầu bằng &quot;tool nào mạnh nhất&quot;. Mà bắt đầu từ: người xem sẽ cảm thấy gì? Brand cần kể câu chuyện gì?</p>
                                    <p>Với AI TVC, em ưu tiên concept, visual direction, cảm xúc thương hiệu và sự nhất quán trong từng scene.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 2: Skillset (Chủ đề Xanh dương Blue) */}
                    <Reveal delay={160} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-blue/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(91,156,246,0.08)] flex flex-col">

                            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image
                                    src="/img/solution2.png"
                                    alt="Production & prompting"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                <div className="absolute inset-0 bg-linear-to-t from-blue/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-blue/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-blue/10 group-hover:-translate-y-2">
                                    02
                                </div>

                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-blue/80">
                                    Skillset
                                </div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-blue">
                                    Production &amp; prompting
                                </div>
                                <div className="text-[14px] text-muted leading-[1.75] [&>p]:mb-2.5 relative z-10">
                                    <p>Build prompt structure cho image &amp; video AI theo từng mục tiêu cụ thể.</p>
                                    <p>Storyboard, character consistency, camera angle, motion control, pacing, sound design và final edit.</p>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    {/* Card 3: Toolset (Chủ đề Tím Purple) */}
                    <Reveal delay={200} className="h-full">
                        <div className="group relative bg-[#0a0a0a] border border-border rounded-[24px] h-full overflow-hidden transition-all duration-500 hover:border-purple/40 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(184,156,246,0.08)] flex flex-col">

                            <div className="absolute top-0 left-0 w-full h-[2px] bg-purple origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100 z-30"></div>

                            <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/0 z-10"></div>
                                <Image
                                    src="/img/solution3.png"
                                    alt="AI production pipeline"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-[#0a0a0a] to-transparent z-10"></div>
                            </div>

                            <div className="relative p-8 pt-0 flex-grow flex flex-col z-20">
                                <div className="absolute inset-0 bg-linear-to-t from-purple/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"></div>

                                <div className="absolute top-0 right-6 text-[80px] font-black tracking-tighter text-purple/5 leading-none pointer-events-none transition-all duration-500 group-hover:text-purple/10 group-hover:-translate-y-2">
                                    03
                                </div>

                                <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-muted mb-2 transition-colors group-hover:text-purple/80">
                                    Toolset
                                </div>
                                <div className="text-[22px] font-bold tracking-tight text-cream mb-4 transition-colors duration-300 group-hover:text-purple">
                                    AI production pipeline
                                </div>
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

                {/* 7 Steps */}
                <Reveal delay={280}>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 bg-[rgba(240,237,232,0.04)] border border-border rounded-[20px] overflow-hidden mb-10">
                        {[
                            { n: "01", icon: <FaClipboardList />, lbl: "Analyze brief & direction" },
                            { n: "02", icon: <FaUserAstronaut />, lbl: "Build AI talent & character" },
                            { n: "03", icon: <FaShirt />, lbl: "Outfit & styling" },
                            { n: "04", icon: <FaFilm />, lbl: "Storyboard & key visual" },
                            { n: "05", icon: <FaVideo />, lbl: "Video generation" },
                            { n: "06", icon: <FaHeadphones />, lbl: "Edit · pacing · VO" },
                            { n: "07", icon: <FaRocket />, lbl: "Finalize & optimize" },
                        ].map((step, idx) => (
                            <div key={idx} className="group py-7 px-4 text-center border-r border-border last:border-r-0 hover:bg-[rgba(205,255,90,0.04)] transition-colors duration-200 relative">
                                <div className="text-[11px] font-bold tracking-[0.12em] text-green mb-2 group-hover:scale-110 transition-transform">{step.n}</div>
                                <div className="text-2xl mb-2.5 flex justify-center text-cream group-hover:text-green transition-colors">{step.icon}</div>
                                <div className="text-[12px] text-muted leading-[1.5] group-hover:text-cream transition-colors">{step.lbl}</div>
                            </div>
                        ))}
                    </div>
                </Reveal>

                {/* Tool Row - Đã được thiết kế lại thành các Tech Badges phát sáng */}
                <Reveal delay={320}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TOOLS_DATA.map((tool, idx) => (
                            <div key={idx} className={`bg-[#111] border rounded-[16px] py-[22px] px-6 transition-all duration-300 ${tool.cardStyle} group`}>
                                {/* Tiêu đề danh mục có hiệu ứng vệt sáng */}
                                <div className={`text-[11px] font-bold tracking-[0.16em] uppercase mb-4 transition-transform origin-left group-hover:scale-105 ${tool.catStyle}`}>
                                    {tool.cat}
                                </div>

                                {/* Danh sách các thẻ kỹ năng */}
                                <div className="flex flex-wrap gap-2.5">
                                    {tool.tags.map((t, i) => (
                                        <span
                                            key={i}
                                            className={`border rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-all duration-300 cursor-default ${tool.tagStyle}`}
                                        >
                                            {t}
                                        </span>
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