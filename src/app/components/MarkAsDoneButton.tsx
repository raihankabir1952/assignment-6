"use client";

import { useContext } from "react";
import FitLogContext from "../context/FitLogContext";
import { Check } from "lucide-react";

interface MarkAsDoneButtonProps {
  workoutId: number;
}

const MarkAsDoneButton = ({
  workoutId,
}: MarkAsDoneButtonProps) => {
  const context = useContext(FitLogContext);

  const handleMarkAsDone = () => {
    context?.markAsDone(workoutId);
    context?.removeFromPlan(workoutId);
    context?.showToast("Workout completed!");
  };

  return (
    <button
      type="button"
      onClick={handleMarkAsDone}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-[#CCFF00] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]"
    >
      <Check size={15} />
      <span>Mark as Done</span>
    </button>
  );
};

export default MarkAsDoneButton;