import Reveal from "../ui/Reveal";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6"; // Thêm icon mũi tên

export default function About() {
    return (
        <section id="about" className="py-24 px-5 md:px-9 border-b border-border bg-[rgba(240,237,232,0.02)]">
            <div className="max-w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] items-start">

                {/* Cột trái */}
                <Reveal delay={0}>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        Giới thiệu
                    </div>
                    <h2 className="text-[clamp(28px,3.5vw,46px)] font-bold tracking-[-0.04em] leading-[1.1] text-cream mb-0">
                        Em bắt đầu với danh ads thủ, sau đó bén duyên làm marketing.<br />
                        <span className="text-muted font-light italic">
                            Và dần chuyển sang đam mê AI production.
                        </span>
                    </h2>
                </Reveal>

                {/* Cột phải */}
                <Reveal delay={100}>
                    <div className="text-[15.5px] leading-[1.85] text-[rgba(240,237,232,0.55)] mb-10 [&>p]:mb-4 [&_strong]:text-cream [&_strong]:font-semibold">
                        <p>
                            Trước khi tập trung hoàn toàn vào AI creatives, em từng làm khá nhiều công việc liên quan tới ads, video AI, social media và vận hành marketing cho agency.
                        </p>
                        <p>
                            Điều đó giúp em nhận ra rằng: <strong>phần khó nhất chưa bao giờ chỉ là tạo ra một video AI đẹp.</strong> Mà là tạo ra một video đủ tự nhiên để người xem muốn dừng lại, đủ linh hoạt để test liên tục và đủ hiệu quả để phục vụ cho marketing thật.
                        </p>
                        <p>
                            Hiện tại em đang phát triển AI production theo 2 hướng song song: <strong>cinematic storytelling cho brand</strong> và <strong>performance-focused AI UGC cho social media & ads.</strong>
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">

                        {/* Hàng 1: 3 Element Timeline */}
                        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">

                            {/* Element 1: IDEO (Màu Xanh lá) */}
                            <div className="flex-1 bg-card border border-green/30 rounded-[14px] p-5 transition-all duration-300 hover:border-green hover:shadow-[0_4px_20px_rgba(205,255,90,0.1)] relative group">
                                <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-green mb-2 group-hover:drop-shadow-[0_0_8px_rgba(205,255,90,0.8)] transition-all">
                                    IDEO Communications
                                </div>
                                <div className="text-[13px] text-muted leading-[1.5]">
                                    AI Supervisor. Phát triển AI workflow, TVC và visual production cho các campaign truyền thông.
                                </div>
                            </div>

                            {/* Mũi tên kết nối 1 */}
                            <div className="flex justify-center text-green/50 text-sm md:text-base">
                                <FaArrowRight className="hidden md:block" /> {/* Mũi tên ngang cho Desktop */}
                                <FaArrowDown className="block md:hidden" />  {/* Mũi tên dọc cho Mobile */}
                            </div>

                            {/* Element 2: 3E Agency (Màu Xanh dương) */}
                            <div className="flex-1 bg-card border border-blue/30 rounded-[14px] p-5 transition-all duration-300 hover:border-blue hover:shadow-[0_4px_20px_rgba(91,156,246,0.1)] relative group">
                                <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-blue mb-2 group-hover:drop-shadow-[0_0_8px_rgba(91,156,246,0.8)] transition-all">
                                    3E Agency
                                </div>
                                <div className="text-[13px] text-muted leading-[1.5]">
                                    Vận hành marketing, social media và triển khai ads cho nhiều nhãn hàng &amp; local business.
                                </div>
                            </div>

                            {/* Mũi tên kết nối 2 */}
                            <div className="flex justify-center text-blue/50 text-sm md:text-base">
                                <FaArrowRight className="hidden md:block" />
                                <FaArrowDown className="block md:hidden" />
                            </div>

                            {/* Element 3: AI Ecom Lab (Màu Tím) */}
                            <div className="flex-1 bg-card border border-purple/30 rounded-[14px] p-5 transition-all duration-300 hover:border-purple hover:shadow-[0_4px_20px_rgba(184,156,246,0.1)] relative group">
                                <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-purple mb-2 group-hover:drop-shadow-[0_0_8px_rgba(184,156,246,0.8)] transition-all">
                                    AI Ecom Lab
                                </div>
                                <div className="text-[13px] text-muted leading-[1.5]">
                                    Tự nghiên cứu realistic AI UGC, affiliate TikTok, AI video workflow và performance creatives.
                                </div>
                            </div>

                        </div>

                        {/* Hàng 2: Element Background nằm dài dưới cùng (Màu Cam) */}
                        <div className="mt-1 w-full bg-[#111] border border-orange/40 rounded-[14px] p-5 transition-all duration-300 hover:border-orange hover:shadow-[0_4px_25px_rgba(255,106,53,0.15)] group relative overflow-hidden">
                            {/* Lớp màu Glow nhẹ chạy ngang Background khi hover */}
                            <div className="absolute inset-0 bg-linear-to-r from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                                <div className="flex-shrink-0 min-w-[140px]">
                                    <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-orange mb-1 group-hover:drop-shadow-[0_0_8px_rgba(255,106,53,0.8)] transition-all">
                                        Background
                                    </div>
                                    <div className="text-[12.5px] font-semibold text-cream">
                                        Nền tảng xuất phát
                                    </div>
                                </div>

                                {/* Đường gạch dọc phân cách */}
                                <div className="hidden sm:block w-[1px] h-10 bg-border"></div>

                                <div className="text-[13.5px] text-muted leading-[1.6]">
                                    Xuất phát từ ads, social media và marketing. Trải nghiệm thực tế với content, livestream, TikTok.
                                </div>
                            </div>
                        </div>

                    </div>

                </Reveal>

            </div>
        </section>
    );
}