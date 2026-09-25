const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0c0e] px-6 py-12 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1300px]">
        {/* Loading Message */}
        <div className="mb-8 flex items-center gap-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-[#CCFF00]" />

          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Loading workout details...
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
          {/* Image Skeleton */}
          <div className="aspect-square animate-pulse rounded-2xl bg-gray-800" />

          {/* Details Skeleton */}
          <div className="space-y-5">
            {/* Title */}
            <div className="h-10 w-3/4 animate-pulse rounded bg-gray-800" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-2/3 animate-pulse rounded bg-gray-800" />
            </div>

            {/* Muscle Tags */}
            <div className="flex gap-2">
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-800" />
              <div className="h-7 w-24 animate-pulse rounded-full bg-gray-800" />
              <div className="h-7 w-20 animate-pulse rounded-full bg-gray-800" />
            </div>

            {/* Specifications */}
            <div className="h-64 animate-pulse rounded-xl bg-gray-800" />

            {/* Instructions */}
            <div className="space-y-3">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-gray-800" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-gray-800" />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 pt-3">
              <div className="h-11 w-40 animate-pulse rounded-lg bg-gray-800" />
              <div className="h-11 w-36 animate-pulse rounded-lg bg-gray-800" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;