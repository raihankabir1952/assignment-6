"use client";

import { useContext } from "react";
import FitLogContext from "../context/FitLogContext";

interface Workout {
  id: number;
  name: string;
  image: string;
  duration: number;
  caloriesBurned: number;
  rating: number;
  equipment: string;
}

const AddToPlanButton = ({ workout }: { workout: Workout }) => {
  const context = useContext(FitLogContext);

  const handleAddToPlan = () => {
    if (!context) return;

    const alreadyAdded = context.planWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      context.showToast(
        "Workout is already in today's plan!",
        "error"
      );
      return;
    }

    if (context.planWorkouts.length >= 5) {
      context.showToast(
        "Today's plan can contain up to 5 workouts.",
        "error"
      );
      return;
    }

    context.addToPlan(workout);
    context.showToast("Workout added to today's plan!");
  };

  return (
    <button
      type="button"
      onClick={handleAddToPlan}
      className="rounded-lg border border-[#CCFF00] bg-[#CCFF00] px-5 py-3 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-transparent hover:text-[#CCFF00]"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlanButton;