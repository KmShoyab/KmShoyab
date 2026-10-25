const skillGroups = [
  {
    number: "01",
    title: "Languages",
    description: "The foundations of software development.",
    skills: ["PHP", "JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
  },
  {
    number: "02",
    title: "Web Development",
    description: "Building responsive websites and applications.",
    skills: ["HTML", "CSS", "React", "Next.js", "WordPress"],
  },
  {
    number: "03",
    title: "Databases",
    description: "Working with structured data and queries.",
    skills: ["MySQL", "SQL", "Database Design"],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    description: "Tools for building, managing, and shipping software.",
    skills: ["Git", "GitHub", "Linux", "MATLAB"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-800 px-4 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mb-12 max-w-2xl sm:mb-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
          Skills & Technologies
        </p>

        <h2 className="text-3xl font-medium tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Tools of the trade
          <span className="text-blue-500">.</span>
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
          Technologies I have worked with while learning, experimenting, and
          building software projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <article
            key={group.number}
            className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-black/20"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest text-slate-500">
                {group.number}
              </span>

              <span className="text-xl text-blue-500 transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </div>

            <h3 className="text-lg font-medium tracking-tight text-slate-100">
              {group.title}
            </h3>

            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-400">
              {group.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300 transition-colors duration-200 hover:border-blue-500/50 hover:text-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
