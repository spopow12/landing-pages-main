import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 blur-3xl animate-pulse" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 blur-3xl animate-pulse delay-150" />
      </div>

      <div className="mx-auto max-w-3xl px-6">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 text-center border border-gray-200/60 dark:border-gray-800">
          <div className="mx-auto mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white grid place-items-center shadow-lg">
            <span className="text-3xl font-bold">404</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">
            Page not found
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Sorry, we couldn’t find the page you’re looking for.
            It may have been moved, renamed, or no longer exists.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center">
            <Link
              href="https://app.ofclock.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              Go to Home
            </Link>
            <Link
              href="https://app.ofclock.com/pricing"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              View Pricing
            </Link>
            <Link
              href="https://app.ofclock.com/help"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-white/70 dark:bg-gray-900/70 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-900/40 hover:bg-white/90 dark:hover:bg-gray-900/90"
            >
              Get Help
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
