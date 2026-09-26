"use client";

import { useEffect, useState } from "react";

interface PageLoaderProps {
  children: React.ReactNode;
}

const PageLoader = ({ children }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-3 w-3 animate-pulse rounded-full bg-[#CCFF00]" />

          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Loading workout data...
          </p>

          <div className="h-1 w-40 overflow-hidden rounded-full bg-gray-800">
            <div className="h-full w-1/2 animate-pulse rounded-full bg-[#CCFF00]" />
          </div>
        </div>
      </main>
    );
  }

  return <>{children}</>;
};

export default PageLoader;
