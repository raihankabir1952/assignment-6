import { Clock3, Flame, Star } from "lucide-react";

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
                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-gray-300">
                        <Clock3 size={14} className="text-gray-500" />
                        <span className="text-sm font-semibold">
                            {workout.duration} min
                        </span>
                    </div>

                    {/* Calories */}
                    <div className="flex items-center gap-1.5 text-gray-300">
                        <Flame size={14} className="text-gray-500" />
                        <span className="text-sm font-semibold">
                            {workout.caloriesBurned} kcal
                        </span>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5">
                        <Star size={14} />
                        <span className="text-sm font-semibold">
                            {workout.rating}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default WorkoutCard;