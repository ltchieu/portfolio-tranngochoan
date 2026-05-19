import { CaseStudy } from "@/types/case";

export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "cindy",
        title: "AI TVC NƯỚC HOA CINDY",
        shortTitle: "Nước Hoa Cindy",
        status: "win",
        videoUrl: "https://www.youtube.com/watch?v=IL2EdQJ_luE",
        problem: "Hình ảnh thương hiệu lâu đời dần trở nên cũ so với tệp khách hàng trẻ trên social media.",
        solution: "Build cinematic fashion-perfume commercial: nhất quán nhân vật, VFX hạt sáng & workflow đa lớp giữ visual đồng đều.",
        result: "133K+ views • 1K+ interactions • Pitching thành công • Mở rộng hợp tác dài hạn",
    },
    {
        id: "haier",
        title: "AI TVC TỦ LẠNH HAIER",
        shortTitle: "Tủ Lạnh Haier",
        status: "win",
        videoUrl: "https://www.youtube.com/watch?v=_HXLHxLedq0",
        problem: "Cần TVC high-end thể hiện sự cao cấp, công nghệ bảo quản & không gian tự nhiên mở rộng từ bên trong.",
        solution: "Premium cinematic visual: giả lập domain expansion, food styling, hard-surface rendering & ánh sáng tự nhiên.",
        result: "Sản phẩm giữ được độ sang trọng, vật liệu chân thực. Thể hiện rõ năng lực làm visual thương mại cao cấp.",
    },
    {
        id: "nuvi",
        title: "AI TVC SỮA NUVI",
        shortTitle: "Sữa Nuvi",
        status: "lesson",
        videoUrl: "https://www.youtube.com/watch?v=URI-jAa-lfY",
        problem: "Thi sáng tạo TVC: Yêu cầu cảm xúc, tính thương mại & năng động cho tệp gia đình/trẻ em.",
        solution: "Action-commercial motion graphics: phân cảnh tương tác nhanh, thể thao & product placement xuyên suốt.",
        result: "Visual chân thực nhưng FAIL do kịch bản & storytelling chưa đủ mạnh để tạo sự khác biệt.",
    },
    {
        id: "oishi",
        title: "AI TVC OISHI SNACK TÔM CAY",
        shortTitle: "Oishi Snack",
        status: "experiment",
        videoUrl: "https://www.youtube.com/watch?v=AbQrY9nQTs8",
        problem: "Test workflow tạo nhanh TVC bắt mắt chỉ từ hình ảnh sản phẩm tĩnh phục vụ pitching.",
        solution: "Sử dụng Seedance 2.0 (Workflow ngắn): Image -> AI Pipeline -> Cinematic animation tự động.",
        result: "Cho ra TVC chất lượng trong thời gian rất ngắn. Khẳng định tốc độ tiến hóa vượt bậc của quy trình AI.",
    },
    {
        id: "truecare",
        title: "AI TVC SIÊU NHÂN TRUECARE",
        shortTitle: "TrueCare Majestic",
        status: "win",
        videoUrl: "https://www.youtube.com/watch?v=rxCjrzAlRZI",
        problem: "Launch concept siêu anh hùng + VFX hoành tráng trong giai đoạn AI image còn giới hạn đầu ra.",
        solution: "Superhero commercial: tạo mascot, particle/floral simulation từ AI 2K + upscale/edit sâu.",
        result: "Dự án launch thực tế thành công. Khẳng định workflow tốt có thể bù đắp hoàn toàn hạn chế của tool.",
    },
];

// Cấu hình UI cho các Trạng thái
export const STATUS_CONFIG = {
    win: { label: "Project thành công", bg: "rgba(16,185,129,0.15)", color: "#34D399", dot: "#10B981" },
    lesson: { label: "Bài học quan trọng", bg: "rgba(249,115,22,0.12)", color: "#FB923C", dot: "#F97316" },
    experiment: { label: "Thử nghiệm workflow", bg: "rgba(91,156,246,0.12)", color: "#7EB3F9", dot: "#5B9CF6" },
};