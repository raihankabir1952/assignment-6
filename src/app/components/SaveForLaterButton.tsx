"use client";

import { useContext } from "react";
import { Bookmark } from "lucide-react";
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

const SaveForLaterButton = ({ workout }: { workout: Workout }) => {
  const context = useContext(FitLogContext);

  const handleSaveForLater = () => {
    if (!context) {
      return;
    }

    const alreadySaved = context.savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      context.showToast(
        "Workout is already saved!",
        "error"
      );
      return;
    }

    context.saveForLater(workout);
    context.showToast("Workout saved for later!", "success");
  };

  return (
    <button
      type="button"
      onClick={handleSaveForLater}
      className="flex items-center gap-2 rounded-lg border border-gray-700 bg-transparent px-5 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 transition-all hover:bg-gray-800"
    >
      <Bookmark className="h-4 w-4 text-gray-400" />

      Save for later
    </button>
  );
};

export default SaveForLaterButton;