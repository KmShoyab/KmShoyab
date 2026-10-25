"use client";

import { useState } from "react";
import { articles } from "@/data/articles";

export default function WritingPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Blog", "Literature", "Essay"];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-[#ededed]">
      {/* Navigation */}
      <header className="relative z-50 mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-5 sm:px-10 sm:py-6 lg:px-16">
        <a
          href="/"
          className="text-lg font-semibold tracking-tight"
          aria-label="KM Shoyab home"
        >
          KM SH<span className="text-blue-500">.</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-4 sm:gap-6"
        >
          <a
            href="/#home"
            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="/#skills"
            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="/writing"
            aria-current="page"
            className="text-sm text-blue-400"
          >
            Writing
          </a>

          <a
            href="/#contact"
            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Introduction */}
      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-16 sm:px-10 sm:pb-20 sm:pt-24 lg:px-16">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
          Words, thoughts &amp; ideas
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
          Writing
          <br />
          beyond code<span className="text-blue-500">.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          A personal collection of blogs, literature, essays, and reflections. A
          place to explore ideas, tell stories, and put thoughts into words.
        </p>
      </section>

      {/* Writing collection */}
      <section className="mx-auto w-full max-w-7xl border-t border-slate-800 px-4 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-500">
              The collection
            </p>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Selected writing<span className="text-blue-500">.</span>
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            {filteredArticles.length} of {articles.length} pieces
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-6">
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search articles..."
            aria-label="Search articles"
            className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-blue-500 sm:max-w-md"
          />
        </div>

        {/* Category buttons */}
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                activeCategory === category
                  ? "border-blue-500 bg-blue-500/10 text-blue-400"
                  : "border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Article cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.length === 0 && (
            <p className="col-span-full py-12 text-center text-sm text-slate-500">
              No articles found. Try another search.
            </p>
          )}

          {filteredArticles.map((article) => (
            <article
              key={article.number}
              className="group flex min-h-72 flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900 sm:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs tracking-widest text-slate-500">
                  {article.number}
                </span>

                <span className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-400">
                  {article.category}
                </span>
              </div>

              <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-blue-400 sm:text-2xl">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                {article.description}
              </p>

              <div className="mt-8 flex items-center justify-between border-t border-slate-800 pt-5">
                <span className="text-xs text-slate-500">{article.date}</span>

                <span className="text-xs text-slate-500">
                  {article.readTime}
                </span>
              </div>

              <a
                href={`/writing/${article.slug}`}
                className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
              >
                Read article <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto mt-8 flex w-full max-w-7xl flex-col gap-3 border-t border-slate-800 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
        <a href="/" className="transition-colors hover:text-blue-400">
          © {new Date().getFullYear()} KM Shoyab
        </a>

        <a
          className="transition-colors hover:text-blue-400"
          href="mailto:kmshoyabofficial@gmail.com"
        >
          Get in touch ↗
        </a>
      </footer>
    </main>
  );
}
