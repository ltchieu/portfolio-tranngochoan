import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-[68px]">
      {/* Backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[700px] h-[700px] -top-[200px] -right-[100px] rounded-full bg-[radial-gradient(circle,rgba(205,255,90,0.08)_0%,transparent_65%)]" />
        <div className="absolute w-[500px] h-[500px] -bottom-[100px] -left-[50px] rounded-full bg-[radial-gradient(circle,rgba(91,156,246,0.07)_0%,transparent_65%)]" />
      </div>
      <div className="absolute inset-0 bg-grid-lines pointer-events-none" />

      {/* Content Container: Nới rộng ra 1320px để tạo không gian cinematic và kéo dài card */}
      <div className="max-w-[1320px] mx-auto px-5 md:px-9 py-20 w-full flex flex-col lg:flex-row items-center justify-between gap-10 xl:gap-14 relative z-10">

        {/* CỘT TRÁI: Wrap nội dung text (Tăng tỷ lệ chiếm không gian lên để chứa Card rộng hơn) */}
        <div className="w-full lg:w-[68%]">
          <div className="inline-flex items-center gap-2 border border-border rounded-full px-[18px] py-[7px] mb-8 bg-card backdrop-blur-md text-[11.5px] font-semibold tracking-[0.12em] uppercase text-muted animate-fi">
            <span className="w-[7px] h-[7px] rounded-full bg-green animate-pulseCustom"></span>
            Available for projects · HCM City
          </div>

          <div className="text-[13px] font-medium text-muted tracking-[0.04em] uppercase mb-4 animate-fi [animation-delay:80ms]">
            Sau khá nhiều lần làm, sửa và chạy thử video AI cho social media & ads, em nhận ra một điều
          </div>

          <h1 className="text-[clamp(52px,8vw,108px)] font-bold leading-[0.92] tracking-[-0.05em] mb-6 animate-fi [animation-delay:160ms]">
            Video AI<br />bây giờ<br /><span className="text-green">không thiếu.</span>
          </h1>

          <p className="text-[clamp(18px,2vw,24px)] font-light italic text-muted leading-[1.45] max-w-[520px] mb-12 animate-fi [animation-delay:260ms]">
            Thứ khó là làm nó đủ tự nhiên để người xem dừng lại trước khi scroll tiếp.
          </p>

          {/* --- PHẦN GIAO DIỆN CẬP NHẬT: ẢNH TO HƠN & CARD HÌNH CHỮ NHẬT DÀI --- */}
          <div className="flex flex-col xl:flex-row items-center xl:items-stretch gap-8 mb-14 animate-fi [animation-delay:340ms]">

            {/* Khối Trái: Ảnh người to hơn và Text nổi */}
            <div className="relative flex items-center w-full xl:w-[45%] h-[340px] flex-shrink-0">

              {/* Ảnh người (heroimg3.png) - Đã phóng to lên 260x340 */}
              <div className="relative w-[260px] h-[340px] flex-shrink-0 animate-float z-10">
                <Image
                  src="/img/heroimg3.png"
                  alt="AI Production"
                  fill
                  sizes="260px"
                  className="object-contain drop-shadow-[0_0_30px_rgba(205,255,90,0.08)]"
                  priority
                />
              </div>

              {/* Đoạn text nằm ở vị trí bàn tay - Đẩy lùi sang phải một chút */}
              <div className="absolute left-[170px] top-[32%] -translate-y-1/2 w-[240px] z-20">
                <p className="text-cream text-[15.5px] font-medium leading-[1.7]">
                  Hiện tại, em chủ yếu<br />
                  phát triển AI production<br />
                  theo <span className="text-green font-bold">hai hướng song song</span>
                </p>
              </div>
            </div>

            {/* Khối Phải: Cột 2 ô dịch vụ (chiếm phần không gian còn lại để kéo dài thành hình chữ nhật) */}
            <div className="flex flex-col justify-center gap-5 flex-grow w-full xl:w-[55%]">

              {/* Ô 1: Cinematic & Brand Storytelling */}
              <div className="bg-card border border-border rounded-2xl p-3 flex items-center gap-5 transition-colors hover:border-[rgba(240,237,232,0.3)] w-full">
                {/* Icon */}
                <div className="relative w-[68px] h-[68px] flex-shrink-0 mt-1">
                  <Image src="/img/heroimg1.png" alt="Art Generation UI" fill sizes="68px" className="object-contain" />
                </div>
                <div className="flex-grow">
                  <strong className="text-cream font-bold text-[16px] block mb-2">Cinematic & Brand Storytelling</strong>
                  <p className="text-[rgba(240,237,232,0.6)] text-[14px] leading-[1.65]">
                    AI TVC, fashion film và các visual campaign mang tính hình ảnh, cảm xúc và nhận diện thương hiệu.
                  </p>
                </div>
              </div>

              {/* Ô 2: Performance & Social-first Videos */}
              <div className="bg-card border border-border rounded-2xl p-3 flex items-center gap-5 transition-colors hover:border-[rgba(240,237,232,0.3)] w-full">
                {/* Icon */}
                <div className="relative w-[68px] h-[68px] flex-shrink-0 mt-1">
                  <Image src="/img/heroimg2.png" alt="Social Media UI" fill sizes="68px" className="object-contain" />
                </div>
                <div className="flex-grow">
                  <strong className="text-cream font-bold text-[16px] block mb-2">Performance & Social-first Videos</strong>
                  <p className="text-[rgba(240,237,232,0.6)] text-[14px] leading-[1.65]">
                    Realistic AI UGC, hook-first creatives và các workflow giúp brand scale video AI linh hoạt hơn cho Meta, TikTok & ecommerce.
                  </p>
                </div>
              </div>

            </div>
          </div>
          {/* --- KẾT THÚC PHẦN GIAO DIỆN --- */}

          <div className="flex gap-4 flex-wrap animate-fi [animation-delay:420ms]">
            <a href="#cases" className="inline-flex items-center gap-[8px] bg-green text-bg px-[28px] py-[14px] rounded-full text-[14px] font-bold transition-all duration-250 animate-glow hover:-translate-y-[2px] hover:shadow-[0_12px_36px_rgba(205,255,90,0.3)]">
              Xem case study →
            </a>
            <a href="#solution" className="inline-flex items-center gap-[8px] bg-transparent text-cream px-[28px] py-[13px] rounded-full text-[14px] font-medium border border-border transition-all duration-200 hover:border-cream hover:bg-card">
              Xem dịch vụ
            </a>
          </div>
        </div>

        {/* CỘT PHẢI: Bức ảnh 3D chính (Điện thoại) */}
        <div className="w-full lg:w-[32%] flex justify-center lg:justify-end animate-fi [animation-delay:500ms]">
          <div className="relative w-full max-w-[400px] aspect-[4/5] animate-float">
            <Image
              src="/img/heroImg.png"
              alt="AI UGC Production"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              priority
              className="object-contain drop-shadow-[0_0_60px_rgba(205,255,90,0.15)] scale-110 lg:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}