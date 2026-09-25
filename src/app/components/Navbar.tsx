"use client";

import React, { FC, useContext } from "react";
import Link from "next/link";
import FitLogContext from "../context/FitLogContext";

const Navbar: FC = () => {
    const context = useContext(FitLogContext);

    return (
        <nav className="w-full bg-[#111214] px-6 py-4 flex items-center justify-between border-b border-gray-800">

            {/* Left Side: Logo */}
            <Link href="/" className="flex items-center space-x-2">
                <img
                    src="/assets/logo.png"
                    alt="FITLOG Logo"
                    className="h-6 w-auto object-contain"
                />
                <span className="text-white font-black text-xl tracking-wider font-sans">
                    FITLOG
                </span>
            </Link>

            {/* Center: Navigation Links */}
            <div className="flex items-center space-x-6 text-sm font-medium">
                <Link
                    href="/"
                    className="text-gray-400 hover:text-[#CCFF00] transition-colors"
                >
                    Workouts
                </Link>

                <Link
                    href="/my-plan"
                    className="text-gray-400 hover:text-[#CCFF00] transition-colors"
                >
                    My Plan
                </Link>
            </div>

            {/* Right Side: Plan & Saved Status */}
            <div className="flex items-center space-x-4 text-xs font-semibold tracking-wide uppercase">

                {/* Plan Status */}
                <Link
                    href="/my-plan"
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors"
                >
                    <span>Plan</span>

                    <span className="w-5 h-5 rounded-full bg-[#CCFF00] text-black flex items-center justify-center font-bold text-[10px]">
                        {context?.planWorkouts.length ?? 0}
                    </span>
                </Link>

                {/* Saved Status */}
                <Link
                    href="/my-plan"
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-white transition-colors"
                >
                    <span>Saved</span>

                    <span className="w-5 h-5 rounded-full bg-gray-800 text-gray-400 flex items-center justify-center font-bold text-[10px]">
                        {context?.savedWorkouts.length ?? 0}
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
