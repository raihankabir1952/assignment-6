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

type ToastType = "success" | "error";

interface FitLogContextType {
    planWorkouts: Workout[];
    savedWorkouts: Workout[];
    completedWorkouts: number[];

    setPlanWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;
    setSavedWorkouts: React.Dispatch<React.SetStateAction<Workout[]>>;

    addToPlan: (workout: Workout) => void;
    saveForLater: (workout: Workout) => void;
    removeFromPlan: (id: number) => void;
    removeFromSaved: (id: number) => void;
    markAsDone: (id: number) => void;

    toastMessage: string;
    toastType: ToastType;
    showToast: (message: string, type?: ToastType) => void;
    clearToast: () => void;
}

const FitLogContext = createContext<FitLogContextType | null>(null);

const FitLogProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [planWorkouts, setPlanWorkouts] = useState<Workout[]>([]);
    const [savedWorkouts, setSavedWorkouts] = useState<Workout[]>([]);
    const [completedWorkouts, setCompletedWorkouts] = useState<number[]>([]);

    const [toastMessage, setToastMessage] = useState("");
    const [toastType, setToastType] = useState<ToastType>("success");

    // Add workout to plan
    const addToPlan = (workout: Workout) => {
        setPlanWorkouts((prev) => {
            if (prev.some((item) => item.id === workout.id)) {
                return prev;
            }

            if (prev.length >= 5) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    // Save workout for later
    const saveForLater = (workout: Workout) => {
        setSavedWorkouts((prev) => {
            if (prev.some((item) => item.id === workout.id)) {
                return prev;
            }

            return [...prev, workout];
        });
    };

    // Remove workout from plan
    const removeFromPlan = (id: number) => {
        setPlanWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    // Remove workout from saved
    const removeFromSaved = (id: number) => {
        setSavedWorkouts((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    // Mark workout as done
    const markAsDone = (id: number) => {
        setCompletedWorkouts((prev) => {
            if (prev.includes(id)) {
                return prev;
            }

            return [...prev, id];
        });
    };

    // Show toast notification
    const showToast = (
        message: string,
        type: ToastType = "success"
    ) => {
        setToastMessage(message);
        setToastType(type);

        setTimeout(() => {
            setToastMessage("");
        }, 2000);
    };

    // Clear toast
    const clearToast = () => {
        setToastMessage("");
    };

    return (
        <FitLogContext.Provider
            value={{
                planWorkouts,
                savedWorkouts,
                completedWorkouts,

                setPlanWorkouts,
                setSavedWorkouts,

                addToPlan,
                saveForLater,
                removeFromPlan,
                removeFromSaved,
                markAsDone,

                toastMessage,
                toastType,
                showToast,
                clearToast,
            }}
        >
            {children}
        </FitLogContext.Provider>
    );
};

export { FitLogProvider };
export default FitLogContext;