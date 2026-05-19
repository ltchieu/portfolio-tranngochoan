import {
    FaClipboardList,
    FaUserAstronaut,
    FaShirt,
    FaFilm,
    FaVideo,
    FaHeadphones,
    FaRocket
} from "react-icons/fa6";

export const WORKFLOW_STEPS = [
    { n: "01", icon: <FaClipboardList />, lbl: "Analyze brief & direction" },
    { n: "02", icon: <FaUserAstronaut />, lbl: "Build AI talent & character" },
    { n: "03", icon: <FaShirt />, lbl: "Outfit & styling" },
    { n: "04", icon: <FaFilm />, lbl: "Storyboard & key visual" },
    { n: "05", icon: <FaVideo />, lbl: "Video generation" },
    { n: "06", icon: <FaHeadphones />, lbl: "Edit · pacing · VO" },
    { n: "07", icon: <FaRocket />, lbl: "Finalize & optimize" },
];
