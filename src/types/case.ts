export type CaseStatus = "win" | "lesson" | "experiment";

export interface CaseStudy {
    id: string;
    title: string;
    shortTitle: string; // Tên ngắn gọn hiển thị trên Tab
    status: CaseStatus;
    problem: string;
    solution: string;
    result: string;
    videoUrl: string;   // Đường dẫn video
}