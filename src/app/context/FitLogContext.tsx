"use client"

import React, { createContext, useState } from "react";

interface Workout {
    id: number;
    name: string;
    duration: number;
    caloriesBurned: number;
}

interface FitLogContextType {
    planWorkouts: Workout[];
    savedWorkouts: Workout[];

    setPlanWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;

    addToPlan: (workout: Workout) => void;
    saveForLater: (workout: Workout) => void;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

const FitLogProvider = ({ children }: { children: React.ReactNode }) => {
    const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([])
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([])
    // add plan button
    const addToPlan = (workout: Workout) => {
        setPlanWorkouts((prev) => [...prev, workout]);
    };

    //save for letter
    const saveForLater = (workout: Workout) => {
    setSavedWorkouts((prev) => [...prev, workout]);
};

    return (
        <FitLogContext.Provider
            value={{
                planWorkouts, savedWorkouts, setPlanWorkouts, setSavedWorkouts, addToPlan,saveForLater,
            }}
        >
            {children}
        </FitLogContext.Provider>
    )
}

export { FitLogProvider };
export default FitLogContext
