import Reveal from "../ui/Reveal";
import { SERVICES_DATA } from "@/constant/service";

export default function Services() {
    return (
        <section id="services" className="py-24 px-5 md:px-9 border-b border-border">
            <div className="max-w-[1160px] mx-auto">

                {/* Header Section */}
                <Reveal>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                                Dịch vụ
                            </div>
                            <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.04em] leading-[1.08] text-cream">
                                Bốn hướng em đang phát triển.
                            </h2>
                        </div>
                        <p className="text-[14px] text-muted max-w-[320px] pb-2">
                            Tập trung vào tính chân thực, khả năng chuyển đổi và tối ưu quy trình sản xuất.
                        </p>
                    </div>
                </Reveal>

                {/* Cinematic Expandable Cards */}
                <Reveal delay={80}>
                    <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-[280px] w-full">
                        {SERVICES_DATA.map((svc, idx) => (
                            <div
                                key={idx}
                                // flex-1 mặc định, khi hover sẽ phình to gấp đôi (flex-[2.2]) bằng cubic-bezier mượt mà
                                className={`group relative flex-1 lg:hover:flex-[2.2] bg-[#0a0a0a] border border-border rounded-[24px] overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] p-6 lg:p-8 flex flex-col justify-between cursor-default ${svc.colorHover} hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]`}
                            >

                                {/* Lớp màu Glow ở góc hiện lên khi Hover */}
                                <div className={`absolute -top-24 -left-24 w-64 h-64 bg-linear-to-br ${svc.glow} rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                                {/* Phần Trên: Icon & Number */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center text-[24px] text-cream transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#111]">
                                        {svc.icon}
                                    </div>
                                    <div className="text-[14px] font-bold tracking-[0.1em] text-[rgba(240,237,232,0.15)] transition-colors duration-500 group-hover:text-[rgba(240,237,232,0.4)]">
                                        {svc.num}
                                    </div>
                                </div>

                                {/* Phần Dưới: Title & Description */}
                                <div className="relative z-10 mt-10 lg:mt-0">
                                    {/* Tiêu đề tự động gập dòng hoặc giữ nguyên khi thẻ co giãn */}
                                    <h3 className="text-[20px] font-bold tracking-tight text-cream mb-3 min-w-[200px]">
                                        {svc.title}
                                    </h3>

                                    {/* Mô tả ẩn đi, chỉ bung ra và hiện rõ khi hover */}
                                    <div className="grid grid-rows-[0fr] opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100 transition-all duration-[500ms] ease-out">
                                        <p className="text-[14px] text-muted leading-[1.65] overflow-hidden min-w-[240px]">
                                            {svc.desc}
                                        </p>
                                    </div>

                                    {/* Riêng trên Mobile, mô tả luôn hiện vì không có tính năng Hover */}
                                    <p className="lg:hidden text-[14px] text-muted leading-[1.65] mt-2">
                                        {svc.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                </Reveal>

            </div>
        </section>
    );
}