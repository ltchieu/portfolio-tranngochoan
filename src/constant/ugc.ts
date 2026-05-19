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
    { title: 'Gym Supplement', video: 'https://www.youtube.com/watch?v=t1d1rb9_-FE' },
    { title: 'Camping Tent', video: 'https://www.youtube.com/watch?v=Z5pHjb53szc' },
    { title: 'Condom Brand', video: 'https://www.youtube.com/watch?v=XX06z26xfMg' },
    { title: 'Fishing Product', video: 'https://www.youtube.com/watch?v=0NbZGkg6-_4' },
    { title: 'Hair Care Product', video: 'https://www.youtube.com/watch?v=LPI-NLGzh_o' },
    { title: 'Mens Sneakers', video: 'https://www.youtube.com/watch?v=cbeuKn3o4FE' },
    { title: 'Pet Care Product', video: 'https://www.youtube.com/watch?v=ZPGj1jiuY9k' },
    { title: 'Phone Case', video: 'https://www.youtube.com/watch?v=vRlfWIpIphk' },
    { title: 'Pickleball Paddle', video: 'https://www.youtube.com/watch?v=_xNsGJKv3ZY' },
    { title: 'POD T Shirt Brand', video: 'https://www.youtube.com/watch?v=_UDjUoYtuIU' },
    { title: 'Press On Nails', video: 'https://www.youtube.com/watch?v=wBjUU5LR6sc' },
    { title: 'Skincare Product', video: 'https://www.youtube.com/watch?v=Nd_1fD0XnJI' },
    { title: 'Sunscreen Product', video: 'https://www.youtube.com/watch?v=NBdhTxP9XtM' },
    { title: 'Weight Loss Transformation', video: 'https://www.youtube.com/watch?v=UXXMMeTUnJc' }
];

// Tạo mảng dữ liệu chuẩn xác
export const UGC_PROJECTS: UGCProject[] = RAW_PROJECTS.map((item, index) => ({
    id: `ugc-${index}`,
    title: item.title,
    tags: ["TikTok", "AI UGC"],
    gradient: GRADIENTS[index % GRADIENTS.length],
    videoUrl: item.video,
}));