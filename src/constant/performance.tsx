import {
  FaRobot, FaTv, FaPalette, FaEye, FaMobileScreen,
  FaUserTie, FaMagnet, FaFlask, FaRulerCombined, FaBoltLightning,
  FaMagnifyingGlass, FaPenNib, FaMasksTheater, FaClapperboard, FaChartSimple,
} from "react-icons/fa6";
import { VSItem, ProcessStep } from "../types/performance";

export const VS_BAD_ITEMS: VSItem[] = [
  { icon: <FaRobot />, text: 'Chuyển động còn giả và quá "AI"' },
  { icon: <FaTv />, text: 'Kịch bản giống quảng cáo truyền thống' },
  { icon: <FaPalette />, text: 'Chỉ tập trung làm visual đẹp, bỏ qua hook' },
  { icon: <FaEye />, text: 'Hook chưa đủ giữ người xem 3 giây đầu' },
  { icon: <FaMobileScreen />, text: 'Thiếu cảm giác tự nhiên khi lên feed TikTok/Reels' },
];

export const VS_GOOD_ITEMS: VSItem[] = [
  { icon: <FaUserTie />, text: 'Video AI kiểu UGC, tự nhiên như người thật' },
  { icon: <FaMagnet />, text: 'Hook đủ mạnh để giữ người xem vài giây đầu' },
  { icon: <FaFlask />, text: 'Kịch bản dễ test nhiều góc bán hàng khác nhau' },
  { icon: <FaRulerCombined />, text: 'Nhịp dựng và pacing hợp với social media' },
  { icon: <FaBoltLightning />, text: 'Workflow đủ nhanh để scale số lượng lớn' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", icon: <FaMagnifyingGlass />, text: "Phân tích sản phẩm & người xem" },
  { num: "02", icon: <FaPenNib />, text: "Viết hook và angle bán hàng" },
  { num: "03", icon: <FaFlask />, text: "Build nhiều phiên bản để test" },
  { num: "04", icon: <FaMasksTheater />, text: "Tạo AI avatar & motion" },
  { num: "05", icon: <FaClapperboard />, text: "Dựng theo nhịp social media" },
  { num: "06", icon: <FaChartSimple />, text: "Tối ưu retention & watch time" },
  { num: "07", icon: <FaBoltLightning />, text: "Scale thêm nhiều variations" },
];