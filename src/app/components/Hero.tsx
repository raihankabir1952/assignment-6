import React, { FC } from 'react';

const Hero: FC = () => {
    return (
        <section className="w-full min-h-[calc(100vh-64px)] bg-[#111214] text-white flex items-center justify-center px-6 md:px-16 py-12">
            {/* Main Container Dashboard Layer */}
            <div className="w-full max-w-[1700px] bg-[#17181c] rounded-2xl p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative overflow-hidden">
                
                {/* Left Side: Content Box */}
                <div className="flex flex-col items-start z-10">
                    {/* Subtitle */}
                    <span className="text-[#CCFF00] font-sans text-xs font-bold tracking-widest uppercase mb-4">
                        Workout Library
                    </span>
                    
                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-none mb-6 font-sans">
                        TRAIN WITH INTENT. <br />
                        LOG EVERY SET.
                    </h1>
                    
                    {/* Description Paragraph */}
                    <p className="text-gray-400 text-sm md:text-base max-w-sm leading-relaxed mb-8">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it 
                        into today&apos;s plan, and watch the week&apos;s work add up.
                    </p>
                    
                    {/* CTA Button */}
                    <button className="bg-[#CCFF00] text-black font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-md hover:bg-opacity-90 transition-all duration-200">
                        Browse Workouts
                    </button>
                </div>

                {/* Right Side: Visual Banner */}
                <div className="flex justify-center md:justify-end z-10">
                    <img 
                        src="/assets/banner.png" 
                        alt="Gym Workout Illustration" 
                        className="w-full max-w-[360px] h-auto object-contain object-right"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
