'use client';

import { motion } from 'framer-motion';
const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'work' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.6, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-0 left-0 right-0 z-[1] flex items-center justify-between px-6 md:px-14 lg:px-24 py-7 md:py-9 bg-transparent"
    >
      <a
        href="#"
        className="font-serif text-sm md:text-base text-[#E8EDF2]/90 tracking-wide hover:text-[#C8A96E] transition-colors duration-[600ms]"
      >
        Hanu Mandadi
      </a>
      <nav className="flex gap-5 md:gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-[10px] tracking-[0.2em] text-[#4A5568] uppercase hover:text-[#C8A96E] transition-colors duration-[600ms]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
