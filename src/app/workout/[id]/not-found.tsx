import Link from "next/link";

const WorkoutNotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-widest text-[#CCFF00]">
          404
        </p>

        <h1 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
          Workout Not Found
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-gray-500">
          The workout you are looking for does not exist or may have been
          removed.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-[#CCFF00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default WorkoutNotFound;