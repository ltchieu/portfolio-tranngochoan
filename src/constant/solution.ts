export type ToolData = {
    cat: string;
    cardStyle: string;
    catStyle: string;
    tagStyle: string;
    tags: string[];
};

export const TOOLS_DATA: ToolData[] = [
    {
        cat: "Prompting",
        cardStyle: "border-green/30 shadow-[0_0_15px_rgba(205,255,90,0.05)] hover:border-green/60 hover:shadow-[0_0_30px_rgba(205,255,90,0.15)]",
        catStyle: "text-green drop-shadow-[0_0_8px_rgba(205,255,90,0.5)]",
        tagStyle: "bg-green/10 border-green/40 text-green drop-shadow-[0_0_8px_rgba(205,255,90,0.3)] hover:bg-green/20 hover:text-cream hover:border-green/80",
        tags: ["ChatGPT", "Gemini"]
    },
    {
        cat: "Image",
        cardStyle: "border-blue/30 shadow-[0_0_15px_rgba(91,156,246,0.05)] hover:border-blue/60 hover:shadow-[0_0_30px_rgba(91,156,246,0.15)]",
        catStyle: "text-blue drop-shadow-[0_0_8px_rgba(91,156,246,0.5)]",
        tagStyle: "bg-blue/10 border-blue/40 text-blue drop-shadow-[0_0_8px_rgba(91,156,246,0.3)] hover:bg-blue/20 hover:text-cream hover:border-blue/80",
        tags: ["Nano Banana", "Midjourney", "Freepik"]
    },
    {
        cat: "Video",
        cardStyle: "border-orange/30 shadow-[0_0_15px_rgba(255,106,53,0.05)] hover:border-orange/60 hover:shadow-[0_0_30px_rgba(255,106,53,0.15)]",
        catStyle: "text-orange drop-shadow-[0_0_8px_rgba(255,106,53,0.5)]",
        tagStyle: "bg-orange/10 border-orange/40 text-orange drop-shadow-[0_0_8px_rgba(255,106,53,0.3)] hover:bg-orange/20 hover:text-cream hover:border-orange/80",
        tags: ["Veo 3", "Kling", "Seedance"]
    },
    {
        cat: "Audio",
        cardStyle: "border-purple/30 shadow-[0_0_15px_rgba(184,156,246,0.05)] hover:border-purple/60 hover:shadow-[0_0_30px_rgba(184,156,246,0.15)]",
        catStyle: "text-purple drop-shadow-[0_0_8px_rgba(184,156,246,0.5)]",
        tagStyle: "bg-purple/10 border-purple/40 text-purple drop-shadow-[0_0_8px_rgba(184,156,246,0.3)] hover:bg-purple/20 hover:text-cream hover:border-purple/80",
        tags: ["ElevenLabs", "Suno", "Google AI Studio"]
    }
];
