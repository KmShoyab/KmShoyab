import TechOrbit from "@/components/TechOrbit";
import ThemeToggle from "@/components/ThemeToggle";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Experience from "@/components/Experience";
const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
      <FeaturedProjects />
      {/* About section */}
      <Skills />
      <Experience />
      {/* Footer */}
      <Contact />
      <footer className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-3 border-t border-slate-200/70 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16 dark:border-slate-800 dark:text-slate-400">
        <span>© {new Date().getFullYear()} KM Shoyab</span>

        <a
          className="transition-colors duration-200 hover:text-blue-600"
          href="mailto:kmshoyabofficial@gmail.com"
        >
          Get in touch ↗
        </a>
      </footer>
      
    </main>
  );
}
