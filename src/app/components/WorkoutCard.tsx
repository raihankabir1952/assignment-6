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

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({ workout }: WorkoutCardProps) => {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-800 bg-[#17181c] transition-all duration-300 hover:-translate-y-1 hover:border-[#CCFF00]/40">
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#202126]">
        <img
          src={workout.image}
          alt={workout.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Difficulty */}
        <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
          {workout.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="mb-3 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-md bg-[#C2F800] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="mb-2 text-lg font-extrabold uppercase tracking-tight text-white">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mb-5 text-xs text-gray-500">
          Equipment:{" "}
          <span className="text-gray-300">
            {workout.equipment}
          </span>
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 border-t border-gray-800 pt-4">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration} min
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-500">
              Rating
            </p>
            <p className="mt-1 text-sm font-bold text-[#CCFF00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkoutCard;