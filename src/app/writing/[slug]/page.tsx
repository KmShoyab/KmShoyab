type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

const articles: Article[] = [
  {
    slug: "your-first-article",
    title: "Your First Article",
    category: "Blog",
    date: "October 24, 2026",
    readTime: "5 min read",
    content: [
      "abbu a aluta tiltilatol tol eheheheheh",
    ],
  },
  {
    slug: "a-piece-of-literature",
    title: "A Piece of Literature",
    category: "Literature",
    date: "October 24, 2026",
    readTime: "3 min read",
    content: [
      "This is a placeholder for your literature.",
      "Replace these paragraphs with your story, poem, or other creative writing.",
    ],
  },
  {
    slug: "ideas-worth-exploring",
    title: "Ideas Worth Exploring",
    category: "Essay",
    date: "October 24, 2026",
    readTime: "7 min read",
    content: [
      "This is a placeholder for your essay.",
      "Replace these paragraphs with your own ideas, opinions, and reflections.",
    ],
  },
];

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] px-6 text-center text-[#ededed]">
        <h1 className="text-3xl font-medium">Article not found.</h1>
        <p className="mt-4 text-slate-400">
          The article you are looking for does not exist.
        </p>
        <a
          href="/writing"
          className="mt-8 text-sm text-blue-400 hover:text-blue-300"
        >
          ← Back to writing
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-10 lg:px-16">
        <a href="/" className="text-lg font-semibold tracking-tight">
          KM SH<span className="text-blue-500">.</span>
        </a>

        <a
          href="/writing"
          className="text-sm text-slate-400 transition-colors hover:text-blue-400"
        >
          ← All writing
        </a>
      </header>

      <article className="mx-auto w-full max-w-3xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs text-slate-500">
          <span className="rounded-full border border-slate-700 px-3 py-1.5 text-blue-400">
            {article.category}
          </span>
          <span>{article.date}</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-4xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {article.title}
          <span className="text-blue-500">.</span>
        </h1>

        <div className="mt-10 border-t border-slate-800 pt-10">
          {article.content.map((paragraph, index) => (
            <p
              key={index}
              className="mb-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <a
            href="/writing"
            className="text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            ← Back to all writing
          </a>
        </div>
      </article>

      <footer className="border-t border-slate-800 px-4 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} KM Shoyab
      </footer>
    </main>
  );
}