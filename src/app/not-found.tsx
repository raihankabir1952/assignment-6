import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-6 text-center">
      <div className="max-w-md">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00]">
          404
        </p>

        <h1 className="mt-4 text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
          Page Not Found
        </h1>

        <p className="mt-4 text-sm leading-relaxed text-gray-500">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-7 inline-block rounded-lg bg-[#CCFF00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-colors hover:bg-[#b8e600]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;