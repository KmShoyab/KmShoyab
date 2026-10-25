const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/KmShoyab",
    label: "Explore my code",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    label: "Connect professionally",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${social.name}: ${social.label}`}
          className="group inline-flex min-h-11 items-center gap-3 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:text-blue-600 hover:shadow-lg hover:shadow-slate-900/5 dark:border-slate-700 dark:hover:shadow-black/20"
        >
          {social.name}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            ↗
          </span>
        </a>
      ))}
    </div>
  );
}