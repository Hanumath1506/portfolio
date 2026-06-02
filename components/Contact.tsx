const links = [
  { label: 'Email', href: 'mailto:hanumath2304@gmail.com' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/hanumathchowdary',
  },
  { label: 'Github', href: 'https://github.com/Hanumath1506' },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-container stitch-section relative flex min-h-[614px] flex-col items-center justify-center"
    >
      <h2 className="type-display mb-4 text-center text-[#E8EDF2]">
        Let&apos;s build something.
      </h2>
      <p className="type-subtitle mb-16 text-center text-2xl">The next step</p>
      <div className="flex gap-8 md:gap-16">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={
              link.href.startsWith('http') ? 'noopener noreferrer' : undefined
            }
            className="type-label-md nav-link text-[#E8EDF2] transition-colors duration-500"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
