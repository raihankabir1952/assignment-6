"use client";

import { useContext } from "react";
import { Bookmark } from "lucide-react";
import FitLogContext from "../context/FitLogContext";

interface Workout {
    id: number;
    name: string;
    duration: number;
    caloriesBurned: number;
    rating : number;
}

const SaveForLaterButton = ({ workout }: { workout: Workout }) => {
    const context = useContext(FitLogContext);

    return (
        <button
            className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 transition-all hover:bg-gray-800"
            onClick={() => context?.saveForLater(workout)}
        >
            <Bookmark className="h-4 w-4 text-gray-400" />
            Save for later
        </button>
    );
};

export default SaveForLaterButton;