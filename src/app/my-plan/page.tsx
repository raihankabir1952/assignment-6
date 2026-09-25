"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { Clock3, Flame, Star } from "lucide-react";
import FitLogContext from "../context/FitLogContext";

export default function MyPlanPage() {
  const context = useContext(FitLogContext);

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const plannedWorkouts = context?.planWorkouts ?? [];
  const savedWorkouts = context?.savedWorkouts ?? [];

  const displayedWorkouts =
    activeTab === "today" ? plannedWorkouts : savedWorkouts;

  const totalExercises = displayedWorkouts.length;

  const totalMinutes = displayedWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = displayedWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="min-h-screen bg-[#0b0c0e] p-10 text-white">
      {/* Header */}
      <h1 className="text-3xl font-bold">MY PLAN</h1>

      <p className="mt-2 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      {/* Summary */}
      <div className="mt-6 grid grid-cols-1 rounded-lg border border-dashed border-gray-700 p-6 sm:grid-cols-3 sm:divide-x sm:divide-gray-700">
        <div className="sm:px-6 first:pl-0">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Exercises
          </p>

          <p className="mt-2 text-3xl font-black text-[#CCFF00]">
            {totalExercises}
          </p>
        </div>

        <div className="mt-4 sm:mt-0 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Minutes
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {totalMinutes}
          </p>
        </div>

        <div className="mt-4 sm:mt-0 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Calories
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {totalCalories}
          </p>
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="mt-8 flex w-fit items-center gap-1 rounded-lg border border-gray-800 bg-[#17181c] p-1">
        <button
          onClick={() => setActiveTab("today")}
          className={`rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "today"
              ? "border border-gray-800 bg-[#111214] text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Today&apos;s Plan
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-md px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all ${
            activeTab === "saved"
              ? "border border-gray-800 bg-[#111214] text-white"
              : "text-gray-500 hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>

      {/* Empty State */}
      {displayedWorkouts.length === 0 ? (
        <div className="mt-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-bold text-white">
            NOTHING HERE YET
          </h2>

          <p className="mt-2 text-sm text-gray-400">
            {activeTab === "today"
              ? "Browse the library and add a workout to your plan."
              : "Save a workout to see it here later."}
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-lg bg-[#CCFF00] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition-all hover:bg-[#b8e600]"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        /* Workout Cards */
        <div className="mt-6 space-y-4">
          {displayedWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="flex flex-col gap-4 rounded-lg border border-gray-700 p-4 sm:flex-row sm:items-center"
            >
              {/* Image */}
              <div className="h-24 w-full shrink-0 overflow-hidden rounded-lg bg-gray-900 sm:h-20 sm:w-28">
                <img
                  src={workout.image}
                  alt={workout.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-xl font-bold">
                  {workout.name}
                </h2>

                <p className="mt-1 font-bold text-gray-400">
                  {workout.equipment}
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-5">
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock3 size={16} />
                    <span>{workout.duration} min</span>
                  </div>

                  {/* Calories */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <Flame size={16} />
                    <span>{workout.caloriesBurned} kcal</span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 text-[#CCFF00]">
                    <Star size={16} fill="currentColor" />
                    <span>{workout.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}