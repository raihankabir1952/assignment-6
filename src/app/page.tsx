import Hero from "./components/Hero";
import WorkoutCard from "./components/WorkoutCard";

interface Workout {
  id: number;
  name: string;
  image: string;
  muscleGroups: string[];
  equipment: string;
  difficulty: string;
  duration: number;
  caloriesBurned: number;
  sets: number;
  reps: string;
  rating: number;
}

export default async function Home() {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch workout data");
  }

  const workouts: Workout[] = await res.json();

  return (
    <>
      <Hero />

      <main
        id="library"
        className="bg-[#111214] px-6 py-16 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1700px]">
          {/* Section Header */}
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-4xl">
                THE LIBRARY
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Twelve lifts covering every major muscle group.
              </p>
            </div>

            <p className="text-xs font-semibold uppercase tracking-wider text-gray-600">
              {workouts.length} Exercises
            </p>
          </div>

          {/* Workout Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {workouts.map((workout) => (
              <WorkoutCard key={workout.id} workout={workout} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}