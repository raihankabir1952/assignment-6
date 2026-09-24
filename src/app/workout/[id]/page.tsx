import { Calendar, Bookmark } from 'lucide-react'; 

interface WorkoutDetailsProps {
  params: Promise<{
    id: string;
  }>;
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

  if (!res.ok) {
    throw new Error("Failed to fetch workout details");
  }

  const workout: Workout = await res.json();

  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1300px]">

        {/* Details Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">

          {/* Left - Image (Perfect Square to match UI) */}
          <div className="overflow-hidden rounded-2xl bg-[#17181c] aspect-square">
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right - Details */}
          <div className="text-white flex flex-col h-full">

            {/* Name */}
            <h1 className="text-3xl font-black uppercase tracking-wide md:text-4xl text-white font-sans">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 text-sm leading-relaxed text-gray-400 font-normal">
              {workout.description}
            </p>

            {/* Muscle Groups Badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              {workout.muscleGroups.map((group) => (
                <span
                  key={group}
                  className="rounded-full bg-[#CCFF00] px-3 py-1 text-[11px] font-bold text-black uppercase tracking-wide"
                >
                  {group}
                </span>
              ))}
            </div>

            {/* Specs Table Layer */}
            <div className="mt-6 bg-[#131418] rounded-xl p-5 border border-gray-800/40 text-xs divide-y divide-gray-800/60">
              
              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Equipment</span>
                <span className="text-gray-300 font-medium">{workout.equipment}</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Difficulty</span>
                <span className="text-gray-300 font-medium">{workout.difficulty}</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Sets</span>
                <span className="text-gray-300 font-medium">{workout.sets}</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Reps</span>
                <span className="text-gray-300 font-medium">{workout.reps}</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Duration</span>
                <span className="text-gray-300 font-medium">{workout.duration} min</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Calories</span>
                <span className="text-gray-300 font-medium">{workout.caloriesBurned} kcal</span>
              </div>

              <div className="flex justify-between items-center py-2.5">
                <span className="uppercase text-gray-500 tracking-wider font-semibold">Rating</span>
                <span className="text-gray-300 font-medium">{workout.rating}</span>
              </div>

            </div>

            {/* Instructions Section */}
            <div className="mt-8">
              <h2 className="text-sm font-black uppercase tracking-widest text-white font-sans mb-4">
                Instructions
              </h2>
              <ol className="space-y-3 text-xs leading-relaxed text-gray-400 list-decimal pl-4">
                {workout.instructions.map((step, index) => (
                  <li key={index} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Action Buttons Layer */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="flex items-center gap-2 bg-[#CCFF00] hover:bg-opacity-90 text-black text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all">
                <Calendar className="w-4 h-4 text-black" strokeWidth={2.5} />
                Add to today&apos;s plan
              </button>
              
              <button className="flex items-center gap-2 border border-gray-700 bg-transparent hover:bg-gray-800 text-gray-300 text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all">
                <Bookmark className="w-4 h-4 text-gray-400" />
                Save for later
              </button>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
