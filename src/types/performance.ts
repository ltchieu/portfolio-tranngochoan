// src/app/types/performance.ts
import { ReactNode } from "react";

export interface VSItem {
    icon: ReactNode;
    text: string;
}

export interface ProcessStep {
    num: string;
    icon: ReactNode;
    text: string;
}

export interface MindsetItem {
    icon: ReactNode;
    category: string;
    body: string[]; // Chuyển các dòng ngắt (\n) thành mảng chuỗi để dễ map
    isDark?: boolean; // Đánh dấu cho thẻ xanh đặc biệt cuối cùng
}
