"use client";

import { useContext } from "react";
import FitLogContext from "../context/FitLogContext";

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
  };

  return (
    <button
      type="button"
      onClick={handleMarkAsDone}
      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-[#CCFF00] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]"
    >
      Mark as Done
    </button>
  );
};

export default MarkAsDoneButton;