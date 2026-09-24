"use client";

import React, { FC, useContext } from "react";
import FitLogContext from "../context/FitLogContext";

const Navbar: FC = () => {
    const context = useContext(FitLogContext);

    return (
        <nav className="w-full bg-[#111214] px-6 py-4 flex items-center justify-between border-b border-gray-800">

            {/* Left Side: Logo */}
            <div className="flex items-center space-x-2">
                <img
                    src="/assets/logo.png"
                    alt="FITLOG Logo"
                    className="h-6 w-auto object-contain"
                />
                <span className="text-white font-black text-xl tracking-wider font-sans">
                    FITLOG
                </span>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex items-center space-x-6 text-sm font-medium">
                <a
                    href="#workouts"
                    className="text-[#CCFF00] hover:opacity-90 transition-opacity"
                >
                    Workouts
                </a>

                <a
                    href="#my-plan"
                    className="text-gray-400 hover:text-white transition-colors"
                >
                    My Plan
                </a>
            </div>

            {/* Right Side: Plan & Saved Status */}
            <div className="flex items-center space-x-4 text-xs font-semibold tracking-wide uppercase">

                {/* Plan Status */}
                <div className="flex items-center space-x-1.5 text-gray-400">
                    <span>Plan</span>

                    <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black flex items-center justify-center font-bold text-[10px]">
                        {context?.planWorkouts.length ?? 0}
                    </span>
                </div>

                {/* Saved Status */}
                <div className="flex items-center space-x-1.5 text-gray-400">
                    <span>Saved</span>

                    <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center font-bold text-[10px]">
                        {context?.savedWorkouts.length ?? 0}
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;