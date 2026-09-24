"use client";

import { useContext } from "react";
import FitLogContext from "../context/FitLogContext";

interface Workout {
    id: number;
    name: string;
    duration: number;
    caloriesBurned: number;
}

const AddToPlanButton = ({ workout }: { workout: Workout }) => {
    const context = useContext(FitLogContext);

    return (
        <button
            className="rounded-lg border border-[#CCFF00] bg-[#CCFF00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#CCFF00]"
            onClick={() => context?.addToPlan(workout)}
        >
            Add to todays plan
        </button>
    );
};

export default AddToPlanButton;