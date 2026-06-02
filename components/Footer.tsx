const links = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hanumathchowdary',
  },
  { label: 'Github', href: 'https://github.com/Hanumath1506' },
  { label: 'Email', href: 'mailto:hanumath2304@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative z-50 mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between border-t border-[#1e2429] px-6 py-12 pt-32 md:flex-row md:px-8">
      <div className="type-label-md mb-4 normal-case tracking-normal text-[#E8EDF2] md:mb-0">
        © <span suppressHydrationWarning>{new Date().getFullYear()}</span> Hanu
        Mandadi. Built in the quiet.
      </div>
      <div className="flex gap-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="type-label nav-link transition-colors duration-500"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
