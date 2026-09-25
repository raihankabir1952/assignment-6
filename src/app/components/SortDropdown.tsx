"use client";

interface SortDropdownProps {
  sortBy: "default" | "name" | "duration" | "calories" | "rating";
  setSortBy: (
    value: "default" | "name" | "duration" | "calories" | "rating"
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
            | "default"
            | "name"
            | "duration"
            | "calories"
            | "rating"
        )
      }
      className="rounded-lg border border-gray-800 bg-[#17181c] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-gray-300 outline-none focus:border-[#CCFF00]"
    >
      <option value="default">Sort By</option>
      <option value="name">Name (A-Z)</option>
      <option value="duration">Duration</option>
      <option value="calories">Calories</option>
      <option value="rating">Rating</option>
    </select>
  );
};

export default SortDropdown;