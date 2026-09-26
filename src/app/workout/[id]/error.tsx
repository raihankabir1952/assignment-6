"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-widest text-red-500">
          Error
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
          Something Went Wrong
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          We couldn&apos;t load this workout right now. Please try again.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-[#CCFF00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-lg border border-gray-700 px-6 py-3 text-xs font-bold uppercase tracking-wider text-gray-300 transition-colors hover:border-[#CCFF00] hover:text-[#CCFF00]"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;