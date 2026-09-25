const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-16 md:px-10 lg:px-16">
      <div className="mx-auto max-w-[1700px]">
        {/* Loading Message */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#CCFF00]" />

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Loading workout data...
          </p>
        </div>

        {/* Library Header Skeleton */}
        <div className="mb-10">
          <div className="h-10 w-48 animate-pulse rounded bg-gray-800" />

          <div className="mt-3 h-4 w-72 animate-pulse rounded bg-gray-800" />
        </div>

        {/* Workout Cards Skeleton */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-xl border border-gray-800 bg-[#17181c]"
            >
              {/* Image */}
              <div className="h-52 animate-pulse bg-gray-800" />

              {/* Content */}
              <div className="space-y-4 p-5">
                {/* Muscle Tag */}
                <div className="h-4 w-24 animate-pulse rounded bg-gray-800" />

                {/* Workout Name */}
                <div className="h-6 w-40 animate-pulse rounded bg-gray-800" />

                {/* Equipment */}
                <div className="h-4 w-32 animate-pulse rounded bg-gray-800" />

                {/* Stats */}
                <div className="flex gap-4 pt-2">
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
                  <div className="h-4 w-16 animate-pulse rounded bg-gray-800" />
                  <div className="h-4 w-12 animate-pulse rounded bg-gray-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Loading;