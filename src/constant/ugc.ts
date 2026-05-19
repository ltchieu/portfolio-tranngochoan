import { UGCProject } from "../types/ugc";

// Bảng màu Gradient Dark Mode mô phỏng Thumbnail
const GRADIENTS = [
    "from-[#0f1f10] to-[#152218]",
    "from-[#0d1520] to-[#111d2e]",
    "from-[#1a0f20] to-[#201530]",
    "from-[#1f1208] to-[#261a0a]",
    "from-[#0f1820] to-[#132028]",
    "from-[#1a1208] to-[#20180a]",
    "from-[#0d1a1a] to-[#102020]",
];

const RAW_PROJECTS = [
    { title: 'AI UGC Gym Supplement', video: 'gym-supplement.mp4' },
    { title: 'Camping Tent Lifestyle', video: 'camping-tent.mp4' },
    { title: 'Condom Brand Social Ad', video: 'condom-brand.mp4' },
    { title: 'Fishing Product Hook Video', video: 'fishing-product.mp4' },
    { title: 'Hair Care Product Review', video: 'hair-care.mp4' },
    { title: 'Men Sneakers Street UGC', video: 'men-sneakers.mp4' },
    { title: 'Pet Care Creator Style', video: 'pet-care.mp4' },
    { title: 'Phone Case TikTok Ad', video: 'phone-case.mp4' },
    { title: 'Pickleball Paddle Creator', video: 'pickleball-paddle.mp4' },
    { title: 'POD T-Shirt Brand Video', video: 'pod-tshirt.mp4' },
    { title: 'Press-On Nails UGC', video: 'press-on-nails.mp4' },
    { title: 'Skincare Product Demo', video: 'skincare.mp4' },
    { title: 'Sunscreen Summer Hook', video: 'sunscreen.mp4' },
    { title: 'Weight Loss Transformation', video: 'weight-loss.mp4' }
];

// Tạo mảng dữ liệu chuẩn xác
export const UGC_PROJECTS: UGCProject[] = RAW_PROJECTS.map((item, index) => ({
    id: `ugc-${index}`,
    title: item.title,
    tags: ["TikTok", "AI UGC"],
    gradient: GRADIENTS[index % GRADIENTS.length],
    videoUrl: `/videoUGC/${item.video}`,
}));