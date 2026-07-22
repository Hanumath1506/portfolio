'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <nav className="sticky top-0 z-[60] mx-auto w-full max-w-[1100px] bg-transparent px-6 py-8 md:px-8">
        <div className="flex items-center justify-between">
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
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-[1.5px] w-6 bg-[#E8EDF2] transition-transform duration-300 ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-[#E8EDF2] transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-[#E8EDF2] transition-transform duration-300 ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>
      {open && (
        <div className="mobile-nav-overlay fixed inset-0 z-[55] flex flex-col items-center justify-center gap-8 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="type-h3 text-[#E8EDF2] nav-link"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
