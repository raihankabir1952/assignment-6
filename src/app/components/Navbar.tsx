"use client";

import React, { FC, useContext } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FitLogContext from "../context/FitLogContext";

const Navbar: FC = () => {
  const context = useContext(FitLogContext);
  const pathname = usePathname();

  const isWorkoutActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
<nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-gray-800 bg-[#111214] px-6 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2">
        <img
          src="/assets/logo.png"
          alt="FITLOG Logo"
          className="h-6 w-auto object-contain"
        />

        <span className="font-sans text-xl font-black tracking-wider text-white">
          FITLOG
        </span>
      </Link>

      {/* Navigation */}
      <div className="flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/"
          className={`transition-colors ${
            isWorkoutActive
              ? "text-[#CCFF00]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>

        <Link
          href="/my-plan"
          className={`transition-colors ${
            isMyPlanActive
              ? "text-[#CCFF00]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </div>

      {/* Plan & Saved */}
      <div className="flex items-center space-x-4 text-xs font-semibold uppercase tracking-wide">
        {/* Plan */}
        <Link
          href="/my-plan"
          className="flex items-center space-x-1.5 text-gray-400 transition-colors hover:text-white"
        >
          <span>Plan</span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] font-bold text-black">
            {context?.planWorkouts.length ?? 0}
          </span>
        </Link>

        {/* Saved */}
        <Link
          href="/my-plan"
          className="flex items-center space-x-1.5 text-gray-400 transition-colors hover:text-white"
        >
          <span>Saved</span>

          <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-700 bg-transparent text-[10px] font-bold text-gray-400">
            {context?.savedWorkouts.length ?? 0}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;