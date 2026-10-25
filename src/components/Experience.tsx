const experience = [
{
period: "2025 — Present",
role: "Lead Developer",
type: "Doddot.Inc",
description:
"Building experience with AI intigrated solutions, front-end technologies, and web development workflows while expanding my software engineering skills.",
skills: ["TypeScript", "PHP", "HTML", "CSS", "JavaScript"],
},
{
period: "Ongoing",
role: "Computer Science & Engineering",
type: "Southeast University · Bangladesh",
description:
"Studying computer science fundamentals and developing practical skills through programming, database work, and software projects.",
skills: ["Programming", "Databases", "Software Engineering"],
},
];

export default function Experience() {
return (
<section
   id="experience"
   className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-200/70 px-4 py-20 sm:px-10 sm:py-24 lg:px-16 dark:border-slate-800"
 >
<div className="mb-12 max-w-2xl sm:mb-16">
<p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
The journey so far
</p>

    <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
      Experience & education<span className="text-blue-600">.</span>
    </h2>
  </div>

  <div className="space-y-0">
    {experience.map((item, index) => (
      <article
        key={item.role}
        className="group grid grid-cols-1 gap-4 border-t border-slate-200/70 py-8 transition-colors duration-300 hover:border-blue-500/50 sm:gap-8 md:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] dark:border-slate-800"
      >
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          {item.period}
        </p>

        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
            {item.type}
          </p>

          <h3 className="mt-2 text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-blue-600 sm:text-2xl">
            {item.role}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            {item.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

);
}