import {
    FaMobileScreen,
    FaClapperboard,
    FaWandMagicSparkles,
} from "react-icons/fa6";

export const SERVICES_DATA = [
    {
        num: "01",
        icon: <FaMobileScreen />,
        title: "Realistic AI UGC",
        desc: "Video quảng cáo chân thực, thiết kế tối ưu riêng cho nền tảng TikTok, Meta & Thương mại điện tử.",
        colorHover: "hover:border-green/50",
        glow: "from-green/20 to-transparent",
    },
    {
        num: "02",
        icon: <FaClapperboard />,
        title: "AI TVC & Brand Film",
        desc: "Sản xuất TVC điện ảnh và visual chiến dịch ra mắt sản phẩm bằng quy trình AI chuyên nghiệp.",
        colorHover: "hover:border-blue/50",
        glow: "from-blue/20 to-transparent",
    },
    {
        num: "03",
        icon: <FaWandMagicSparkles />,
        title: "AI Fashion Reels",
        desc: "Video thời trang ngắn mang phong cách cao cấp (Luxury) dành riêng cho social media và quảng cáo.",
        colorHover: "hover:border-purple/50",
        glow: "from-purple/20 to-transparent",
    }
];
