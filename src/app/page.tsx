import TechOrbit from "@/components/TechOrbit";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      {/* Navigation */}
      <header className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-10 sm:py-6 lg:px-16">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight"
          aria-label="KM Shoyab home"
        >
          KM SH<span className="text-blue-600">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-3 sm:gap-6"
        >
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </header>

      {/* Hero section */}
      <section
        id="home"
        className="mx-auto grid min-h-[75vh] w-full max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 md:grid-cols-2 lg:px-16"
      >
        <div className="relative z-10">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Developer · Computer Science
          </p>

          <h1 className="max-w-2xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Building
            <br />
            what&apos;s next<span className="text-blue-600">.</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            I&apos;m KM Shoyab, a computer science student and developer
            exploring the intersection of technology, thoughtful design, and
            intelligent software.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#work"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              Explore my work
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 px-6 text-sm font-medium transition hover:border-slate-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
            >
              About me
            </a>
          </div>
        </div>

        {/* Technology animation will go here in our next step. */}
        <TechOrbit />
      </section>

      {/* Work section */}
      <section
        id="work"
        className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-100 px-6 py-12 sm:px-10 lg:px-16"
      >
        <p className="text-sm text-slate-500">
          Selected work <span className="text-blue-600">/</span> Coming into
          focus
        </p>
      </section>

      {/* About section */}
      <section
        id="about"
        className="mx-auto w-full max-w-7xl scroll-mt-8 px-6 py-12 sm:px-10 lg:px-16"
      >
        <h2 className="text-2xl font-medium tracking-tight">
          Curiosity into creation.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-600">
          I&apos;m developing my skills in software engineering and exploring
          how thoughtful interfaces can make complex technology easier to use.
        </p>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="mx-auto mt-8 flex w-full max-w-7xl scroll-mt-8 flex-col gap-3 border-t border-slate-100 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16"
      >
        <span>© {new Date().getFullYear()} KM Shoyab</span>

        <a
          className="transition hover:text-blue-600"
          href="mailto:hello@kmshoyab.com"
        >
          Get in touch ↗
        </a>
      </footer>
    </main>
  );
}
