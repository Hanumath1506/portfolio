const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 mx-auto flex w-full max-w-[1100px] items-center justify-between bg-transparent px-6 py-8 md:px-8">
      <a
        href="#"
        className="type-nav-brand text-[#E8EDF2] nav-link transition-colors duration-500"
      >
        Hanu Mandadi
      </a>
      <div className="hidden gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="type-nav text-[#E8EDF2] nav-link"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
