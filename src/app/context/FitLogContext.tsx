"use client";

import React, { createContext, useState } from "react";

interface Workout {
    id: number;
    name: string;
    image: string;
    duration: number;
    caloriesBurned: number;
    rating: number;
    equipment: string;
}

interface FitLogContextType {
    planWorkouts: Workout[];
    savedWorkouts: Workout[];

    setPlanWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;

    addToPlan: (workout: Workout) => void;
    saveForLater: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

const FitLogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);

    // Add workout to plan
    const addToPlan = (workout: Workout) => {
        setPlanWorkouts((prev) => [...prev, workout]);
    };

    // Save workout for later
    const saveForLater = (workout: Workout) => {
        setSavedWorkouts((prev) => [...prev, workout]);
    };

    //remove from plan
    const removeFromPlan = (id: number) => {
        setPlanWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    //remove from saved
    const removeFromSaved = (id: number) => {
        setSavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    return (
        <FitLogContext.Provider
            value={{
                planWorkouts,
                savedWorkouts,
                setPlanWorkouts,
                setSavedWorkouts,
                addToPlan,
                saveForLater,
                removeFromPlan,
                removeFromSaved

            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export { FitLogProvider };
export default FitLogContext;
