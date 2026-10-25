import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-7xl scroll-mt-8 border-t border-slate-200/70 px-4 py-20 sm:px-10 sm:py-24 lg:px-16 dark:border-slate-800"
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-end">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
            Get in touch
          </p>

          <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Have an idea?
            <br />
            <span className="text-slate-400 dark:text-slate-500">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="mt-6 max-w-lg leading-7 text-slate-600 dark:text-slate-400">
            Interested in software development, collaborating on projects, or
            discussing an idea? Feel free to reach out.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-start md:pl-8">
          <a
            href="mailto:kmshoyabofficial@gmail.com?subject=Project%20Inquiry"
            className="group inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-full bg-slate-900 px-6 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600 dark:bg-white dark:text-slate-900 dark:hover:bg-blue-500 dark:hover:text-white"
          >
            Start a conversation
            <span
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            I&apos;m always interested in meaningful ideas and collaborations.
          </p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
