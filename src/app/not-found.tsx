import Link from "next/link";

export default function NotFound() {
return (
<main className="flex min-h-screen items-center justify-center bg-white px-6 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
<div className="w-full max-w-lg text-center">
<p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
Error / 404
</p>

    <h1 className="mt-6 text-7xl font-medium tracking-tighter sm:text-9xl">
      Lost<span className="text-blue-600">.</span>
    </h1>

    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
      This page doesn't exist, or it may have moved somewhere else.
    </p>

    <Link
      href="/"
      className="mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
    >
      Back to homepage <span aria-hidden="true">↗</span>
    </Link>

    <p className="mt-12 text-xs tracking-widest text-slate-400">
      KM SHOYAB · DIGITAL SPACE
    </p>
  </div>
</main>

);
}