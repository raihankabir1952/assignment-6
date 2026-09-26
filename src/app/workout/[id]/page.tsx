import { notFound } from "next/navigation";
import AddToPlanButton from "../../components/AddToPlanButton";
import SaveForLaterButton from "../../components/SaveForLaterButton";
import PageLoader from "../../components/PageLoader";

interface WorkoutDetailsProps {
  params: Promise<{ id: string }>;
}

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
  description: string;
  instructions: string[];
}

export default async function WorkoutDetails({
  params,
}: WorkoutDetailsProps) {
  const { id } = await params;

  const res = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workout: Workout = await res.json();

  return (
    <PageLoader>
      <main className="min-h-screen bg-[#0b0c0e] px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1300px]">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <div className="aspect-square overflow-hidden rounded-2xl bg-[#17181c]">
              <img
                src={workout.image}
                alt={workout.name}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex h-full flex-col text-white">
              <h1 className="font-sans text-3xl font-black uppercase tracking-wide text-white md:text-4xl">
                {workout.name}
              </h1>

              <p className="mt-3 text-sm font-normal leading-relaxed text-gray-400">
                {workout.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {workout.muscleGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full bg-[#CCFF00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <div className="mt-6 divide-y divide-gray-800/60 rounded-xl border border-gray-800/40 bg-[#131418] p-5 text-xs">
                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Equipment</span>
                  <span className="font-semibold text-gray-200">
                    {workout.equipment}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Difficulty</span>
                  <span className="font-semibold text-gray-200">
                    {workout.difficulty}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Duration</span>
                  <span className="font-semibold text-gray-200">
                    {workout.duration} min
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Calories</span>
                  <span className="font-semibold text-gray-200">
                    {workout.caloriesBurned} kcal
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Sets</span>
                  <span className="font-semibold text-gray-200">
                    {workout.sets}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Reps</span>
                  <span className="font-semibold text-gray-200">
                    {workout.reps}
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-gray-500">Rating</span>
                  <span className="font-semibold text-[#CCFF00]">
                    {workout.rating}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h2 className="mb-4 font-sans text-sm font-black uppercase tracking-widest text-white">
                  Instructions
                </h2>

                <ol className="list-decimal space-y-3 pl-4 text-xs leading-relaxed text-gray-400">
                  {workout.instructions.map((step, index) => (
                    <li key={index} className="pl-1">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <AddToPlanButton workout={workout} />

                <SaveForLaterButton workout={workout} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLoader>
  );
}
