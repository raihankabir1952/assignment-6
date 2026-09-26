"use client";

import { ChevronDown } from "lucide-react";

interface SortDropdownProps {
  sortBy: "duration" | "calories" | "rating";
  setSortBy: (
    value: "duration" | "calories" | "rating"
  ) => void;
}

const SortDropdown = ({
  sortBy,
  setSortBy,
}: SortDropdownProps) => {
  return (
    <div className="relative">
      <select
        value={sortBy}
        onChange={(e) =>
          setSortBy(
            e.target.value as
            | "duration"
            | "calories"
            | "rating"
          )
        }
        className="w-36 appearance-none rounded-lg border border-gray-800 bg-[#17181c] py-2.5 pl-4 pr-10 text-xs font-bold uppercase tracking-wider text-gray-300 outline-none focus:border-[#CCFF00]"      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>

      <ChevronDown
        size={10}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
      />
    </div>
  );
};

export default SortDropdown;