import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className="w-full bg-[#111214] px-6 md:px-16 py-8 flex items-center justify-between border-t border-gray-800/40">
            {/* Left Side: Logo (Rotated to look straight/horizontal) */}
            <div className="flex items-center space-x-2">
                <img 
                    src="/assets/logo.png" 
                    alt="FITLOG Logo" 
                    className="h-5 w-auto object-contain -rotate-45" 
                />
                <span className="text-white font-black text-lg tracking-wider font-sans">
                    FITLOG
                </span>
            </div>

            {/* Right Side: Copyright Text */}
            <div className="text-gray-500 text-xs font-medium tracking-wide">
                © 2026 FitLog — Workout Library. Train hard, log honest.
            </div>
        </footer>
    );
};

export default Footer;
