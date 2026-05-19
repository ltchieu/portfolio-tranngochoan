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