import Reveal from "../ui/Reveal";
import {
    FaClapperboard,
    FaRobot,
    FaChartLine,
    FaBoltLightning,
    FaBullseye,
    FaBoxOpen
} from "react-icons/fa6";

export default function Problem() {
    return (
        <section id="problem" className="py-24 px-5 md:px-9 border-b border-border">
            <div className="max-w-[1160px] mx-auto">

                <Reveal>
                    <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[rgba(240,237,232,0.3)] mb-4 flex items-center gap-2 before:content-[''] before:w-5 before:h-[1.5px] before:bg-current">
                        Bài toán thực tế
                    </div>
                </Reveal>

                <Reveal delay={40}>
                    <h2 className="text-[clamp(28px,4vw,52px)] font-bold tracking-[-0.04em] leading-[1.08] mb-14 max-w-[820px] text-cream">
                        Không phải brand nào cũng có đủ ngân sách để làm video{" "}
                        <span className="text-muted font-light italic">
                            cinematic &amp; chuyên nghiệp.
                        </span>
                    </h2>
                </Reveal>

                {/* Timeline Infographic */}
                <div className="flex flex-col gap-0 mb-16 max-w-[760px]">

                    {/* Item 1 */}
                    <Reveal delay={80}>
                        <div className="grid grid-cols-[80px_1fr] gap-6 items-start pb-10 relative after:content-[''] after:absolute after:left-[39px] after:top-[48px] after:bottom-0 after:w-[1px] after:bg-border last:after:hidden">
                            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-border bg-card text-cream">
                                <FaClapperboard />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold tracking-[-0.02em] mb-2 text-cream">
                                    Trước đây: production truyền thống
                                </h4>
                                <p className="text-[14.5px] text-muted leading-[1.75]">
                                    Booking diễn viên. Tìm bối cảnh. Setup ánh sáng. Makeup. Stylist. Quay nhiều ngày. Hậu kỳ. Chỉ riêng phần production đã tiêu tốn một khoản ngân sách rất lớn — không phù hợp với SME và brand vừa &amp; nhỏ.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Item 2 */}
                    <Reveal delay={120}>
                        <div className="grid grid-cols-[80px_1fr] gap-6 items-start pb-10 relative after:content-[''] after:absolute after:left-[39px] after:top-[48px] after:bottom-0 after:w-[1px] after:bg-border last:after:hidden">
                            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-border bg-card text-cream">
                                <FaRobot />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold tracking-[-0.02em] mb-2 text-cream">
                                    AI xuất hiện: lời giải hấp dẫn
                                </h4>
                                <p className="text-[14.5px] text-muted leading-[1.75]">
                                    Chỉ cần vài prompt. Một vài hình ảnh. Một workflow tốt. Là đã có thể tạo ra những visual cinematic trước đây cần cả một ekip lớn — mở ra cơ hội rất lớn cho các brand sản xuất video nhanh hơn, linh hoạt hơn.
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Item 3 */}
                    <Reveal delay={160}>
                        <div className="grid grid-cols-[80px_1fr] gap-6 items-start pb-0 relative after:content-[''] after:absolute after:left-[39px] after:top-[48px] after:bottom-0 after:w-[1px] after:bg-border last:after:hidden">
                            <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-[22px] flex-shrink-0 border border-border bg-card text-cream">
                                <FaChartLine />
                            </div>
                            <div>
                                <h4 className="text-[17px] font-bold tracking-[-0.02em] mb-2 text-cream">
                                    Bài toán mới: scale để tăng doanh số
                                </h4>
                                <p className="text-[14.5px] text-muted leading-[1.75]">
                                    Không chỉ TVC. AI video bước vào TikTok Shop, ecommerce, affiliate, Meta Ads. Bài toán lúc này không còn là &quot;video có cinematic không?&quot; mà là:{" "}
                                    <strong className="text-green font-semibold">
                                        video có giữ được người xem trong vài giây đầu không?
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </Reveal>

                </div>

                {/* Highlight Box */}
                <Reveal delay={200}>
                    <div className="bg-linear-to-br from-[rgba(205,255,90,0.07)] to-[rgba(205,255,90,0.02)] border border-[rgba(205,255,90,0.2)] rounded-[20px] py-9 px-10 mb-14">
                        <h3 className="text-[clamp(22px,3vw,36px)] font-bold tracking-[-0.04em] leading-[1.1] mb-4 text-cream">
                            Vấn đề không chỉ là sản xuất video AI đẹp hơn.
                        </h3>
                        <p className="text-[15.5px] text-muted leading-[1.8]">
                            Mà là sản xuất{" "}
                            <strong className="text-green font-semibold">
                                đủ nhiều video AI có khả năng được xem, được test và được tối ưu liên tục.
                            </strong>{" "}
                            Vì hook cũ rất nhanh bị mòn. Creative dễ bị bão hoà. Một video hôm nay còn hiệu quả, vài ngày sau có thể đã không còn giữ được sự chú ý nữa.
                        </p>
                    </div>
                </Reveal>

                {/* Scale Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                    <Reveal delay={0} className="h-full">
                        <div className="bg-card border border-border rounded-2xl p-6 text-center h-full transition-all duration-250 hover:border-[rgba(240,237,232,0.2)] hover:bg-[rgba(240,237,232,0.07)]">
                            <div className="text-[32px] mb-4 text-green flex justify-center">
                                <FaBoltLightning />
                            </div>
                            <div className="text-[15px] font-bold text-cream mb-2">Nhanh để test</div>
                            <div className="text-[13px] text-muted leading-[1.65]">
                                Nhiều góc bán hàng khác nhau, test liên tục để tìm ra cái hiệu quả nhất
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={70} className="h-full">
                        <div className="bg-card border border-border rounded-2xl p-6 text-center h-full transition-all duration-250 hover:border-[rgba(240,237,232,0.2)] hover:bg-[rgba(240,237,232,0.07)]">
                            <div className="text-[32px] mb-4 text-green flex justify-center">
                                <FaBullseye />
                            </div>
                            <div className="text-[15px] font-bold text-cream mb-2">Tự nhiên để giữ view</div>
                            <div className="text-[13px] text-muted leading-[1.65]">
                                Không bị lướt qua. Giống content thật trên feed hơn là quảng cáo
                            </div>
                        </div>
                    </Reveal>

                    <Reveal delay={140} className="h-full col-span-1 sm:col-span-2 lg:col-span-1">
                        <div className="bg-card border border-border rounded-2xl p-6 text-center h-full transition-all duration-250 hover:border-[rgba(240,237,232,0.2)] hover:bg-[rgba(240,237,232,0.07)]">
                            <div className="text-[32px] mb-4 text-green flex justify-center">
                                <FaBoxOpen />
                            </div>
                            <div className="text-[15px] font-bold text-cream mb-2">Đủ nhiều để scale</div>
                            <div className="text-[13px] text-muted leading-[1.65]">
                                Workflow ổn định, sản xuất số lượng lớn mà vẫn giữ được chất lượng
                            </div>
                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
}