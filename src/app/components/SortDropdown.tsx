"use client";

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
      className="rounded-lg border border-gray-800 bg-[#17181c] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 outline-none focus:border-[#CCFF00]"
    >
      <option value="duration">Sort By: Duration</option>
      <option value="calories">Sort By: Calories</option>
      <option value="rating">Sort By: Rating</option>
    </select>
  );
};

export default SortDropdown;