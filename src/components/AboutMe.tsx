export default function AboutMe() {
return (
<section
   id="about"
   className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-200/70 px-4 py-20 sm:px-10 sm:py-24 lg:px-16 dark:border-slate-800"
 >
<div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
{/* Section introduction */}
<div>
<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
A little about me
</p>

      <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        Curious by nature.
        <br />
        <span className="text-slate-400 dark:text-slate-500">
          Building with purpose.
        </span>
      </h2>
    </div>

    {/* Personal introduction */}
    <div>
      <p className="text-lg leading-8 text-slate-700 dark:text-slate-300 sm:text-xl sm:leading-9">
        I&apos;m KM Shoyab, a Computer Science and Engineering student at
        Southeast University, Bangladesh, interested in building useful
        software and understanding the technology behind it.
      </p>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
        My interests span software engineering, web applications, databases,
        and intelligent systems. I enjoy learning how individual
        technologies work and bringing them together to solve practical
        problems.
      </p>

      <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
        I&apos;m continuously developing my technical skills through
        projects, experimentation, and problem-solving. My goal is to turn
        what I learn into thoughtful digital products that are useful,
        reliable, and enjoyable to use.
      </p>

      {/* Areas of interest */}
      <div className="mt-9 flex flex-wrap gap-2">
        {[
          "Software Engineering",
          "Web Development",
          "Artificial Intelligence",
          "Database Systems",
          "UI/UX Design",
        ].map((interest) => (
          <span
            key={interest}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition-colors duration-200 hover:border-blue-500/50 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

);
}