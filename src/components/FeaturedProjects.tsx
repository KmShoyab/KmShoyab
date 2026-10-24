const projects = [
  {
    number: "01",
    title: "Study Buddy",
    description:
      "A smart platform that helps students discover compatible study partners and build productive learning communities.",
    technologies: ["Next.js", "React", "TypeScript"],
    category: "WEB APPLICATION",
    color: "from-blue-500/20 to-cyan-400/5",
  },
  {
    number: "02",
    title: "Hospital Management",
    description:
      "A digital hospital management project exploring how software can organize hospital information and improve workflows.",
    technologies: ["Python", "JavaScript", "Database"],
    category: "SOFTWARE DEVELOPMENT",
    color: "from-violet-500/20 to-fuchsia-400/5",
  },
  {
    number: "03",
    title: "Query Engine",
    description:
      "A project focused on SQL queries and database concepts, with an emphasis on understanding how structured data is handled.",
    technologies: ["SQL", "Database", "Programming"],
    category: "DATABASE SYSTEMS",
    color: "from-emerald-500/20 to-teal-400/5",
  },
  {
    number: "04",
    title: "Doddot",
    description:
      "A technology brand focused on building thoughtful digital experiences, websites, applications, and intelligent software.",
    technologies: ["React", "TypeScript", "UI/UX"],
    category: "DIGITAL PRODUCTS",
    color: "from-purple-500/20 to-pink-400/5",
  },
  {
    number: "05",
    title: "SabjiPhal",
    description:
      "A market-to-door delivery concept designed to make fresh fruits and vegetables easier to access.",
    technologies: ["Web Development", "E-commerce", "UX"],
    category: "PRODUCT CONCEPT",
    color: "from-lime-500/20 to-green-400/5",
  },
  {
    number: "06",
    title: "LeetCode Solutions",
    description:
      "A growing collection of programming problem solutions created to improve problem-solving skills and algorithmic thinking.",
    technologies: ["Python", "Algorithms", "DSA"],
    category: "PROBLEM SOLVING",
    color: "from-orange-500/20 to-amber-400/5",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-200/70 px-4 py-20 sm:px-10 sm:py-24 lg:px-16 dark:border-slate-800"
    >
      {/* Section heading */}
      <div className="mb-12 flex flex-col gap-5 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Selected work / 01—06
          </p>

          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Projects in focus<span className="text-blue-600">.</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
            A selection of projects, experiments, and ideas exploring software,
            databases, and thoughtful digital experiences.
          </p>
        </div>

        <span className="text-sm text-slate-500 dark:text-slate-400">
          A little progress, every day.
        </span>
      </div>

      {/* Project cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/5 dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-slate-700 dark:hover:shadow-black/20"
          >
            {/* Visual preview */}
            <div
              className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}
            >
              <span className="absolute left-5 top-5 text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400">
                PROJECT / {project.number}
              </span>

              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/70 bg-white/70 shadow-lg shadow-slate-900/5 transition-transform duration-500 group-hover:scale-110 dark:border-white/10 dark:bg-slate-950/50">
                <span className="text-3xl font-semibold tracking-tight text-slate-800 dark:text-white">
                  {project.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 3)}
                </span>
              </div>

              <span className="absolute bottom-5 right-5 text-xs font-medium tracking-wider text-slate-500 dark:text-slate-400">
                {project.category}
              </span>
            </div>

            {/* Project information */}
            <div className="p-5 sm:p-6">
              <h3 className="text-xl font-medium tracking-tight transition-colors duration-200 group-hover:text-blue-600">
                {project.title}
              </h3>

              <p className="mt-3 min-h-20 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex min-h-10 items-center gap-2 text-sm font-medium transition-all duration-200 hover:gap-3 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
                >
                  Explore project
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
