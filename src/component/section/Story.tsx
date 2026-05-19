import Reveal from "../ui/Reveal";

export default function Story() {
    return (
        <section className="py-20 px-5 md:px-9 border-b border-border">
            <Reveal>
                <div className="max-w-[1160px] mx-auto border border-border rounded-[20px] overflow-hidden bg-[#111]">

                    {/* Top bar giả lập Email Client */}
                    <div className="bg-[#1a1a1a] border-b border-border py-[14px] px-6 flex items-center justify-between">
                        <div className="flex gap-[7px]">
                            <span className="w-3 h-3 rounded-full bg-[#FF5F57]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                            <span className="w-3 h-3 rounded-full bg-[#28CA41]"></span>
                        </div>
                        <div className="text-[13px] font-medium text-muted tracking-[0.02em]">
                            ✉️ &nbsp;Hoan Truong — AI Production
                        </div>
                        <div></div>
                    </div>

                    {/* Nội dung chính */}
                    <div className="p-7 md:py-10 md:px-[52px] flex flex-col">
                        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-muted mb-5 pb-4 border-b border-border">
                            Em xin phép lan man một chút trước khi đi vào vấn đề chính nhé
                        </div>

                        <div className="text-[clamp(15px,1.4vw,16.5px)] font-light leading-[1.95] text-[rgba(240,237,232,0.55)] max-h-[420px] overflow-y-auto pr-2 flex-1 [&>p]:mb-[18px] [&_em]:text-cream [&_em]:italic [&_strong]:text-cream [&_strong]:font-semibold">
                            <p>
                                Trước đây, mỗi lần làm xong một video AI đẹp... em từng nghĩ kiểu:{" "}
                                <em>"chỉ cần up video này lên TikTok, gắn thêm link affiliate nữa thôi là chắc sắp giàu rồi."</em>
                            </p>
                            <p>
                                Rồi em bắt đầu lao vào mua tài khoản có sẵn giỏ hàng. Mua tool AI. Hì hục test Veo 3, Kling, đủ kiểu workflow khác nhau. Kịch bản thì nhiều lúc cũng chỉ prompt đại trên ChatGPT rồi đem đi render.
                            </p>
                            <p>
                                Nhưng kết quả thật sự thì... <em>flop sấp mặt 😭</em> View thấp. Retention rớt ngay vài giây đầu. Có video nhìn rất đẹp lúc mình ngồi xem lại. Nhưng khi đặt lên TikTok hay Reels thì cảm giác lại cực kỳ "quảng cáo".
                            </p>
                            <p>
                                Sau này nhìn lại, em mới thấy nhiều video hồi đó trông khá giả. Chuyển động quá bóng bẩy. Cách thoại không tự nhiên. Mọi thứ đều giống như đang cố "diễn" để bán hàng.
                            </p>
                            <p>
                                Kể cả khi làm việc cùng team AI Creative tại agency truyền thông cũng vậy. Cả team dành rất nhiều thời gian để build TVC demo đi pitching. Ai cũng nghĩ <em>"kiểu này chắc khách sẽ thích lắm."</em> Nhưng rồi kết quả cuối cùng vẫn fail. Không được chọn. Và thật sự lúc đó khá vỡ mộng 😭
                            </p>
                            <p>
                                Sau khá nhiều lần fail như vậy, em bắt đầu quan tâm nhiều hơn tới: retention. Hook. Cảm giác tự nhiên. Cách người thật nói chuyện. Và cả những chi tiết rất nhỏ khiến video bớt "quảng cáo" hơn.
                            </p>
                            <p>
                                <strong>Vì cuối cùng, người xem ngoài kia thật ra không quan tâm video được làm khó tới mức nào.</strong> Họ chỉ quyết định rất nhanh: "video này có đáng để mình dừng lại thêm vài giây không?"
                            </p>
                            <p>
                                À mà... em cũng có để lại một vài case study bị fail ở phía dưới 😭 Anh/chị nhớ xem đến cuối nhé.
                            </p>
                        </div>
                    </div>

                </div>
            </Reveal>
        </section>
    );
}