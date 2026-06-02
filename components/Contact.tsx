'use client';

import { motion } from 'framer-motion';
import { fadeInView } from '@/lib/motion';

const links = [
  {
    label: 'hanumath2304@gmail.com',
    href: 'mailto:hanumath2304@gmail.com',
  },
  {
    label: 'github.com/Hanumath1506',
    href: 'https://github.com/Hanumath1506',
  },
  {
    label: 'linkedin.com/in/hanumathchowdary',
    href: 'https://linkedin.com/in/hanumathchowdary',
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-pad min-h-[75vh] flex flex-col items-center justify-center text-center divider-t"
    >
      <motion.div {...fadeInView} className="max-w-3xl mx-auto w-full">
        <h2 className="font-serif text-[clamp(2.25rem,5.5vw,4rem)] text-light font-light leading-tight tracking-tight">
          Let&apos;s build something.
        </h2>

        <div className="mt-20 md:mt-24 flex flex-col gap-5">
          {links.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={
                link.href.startsWith('http')
                  ? 'noopener noreferrer'
                  : undefined
              }
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.4,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="font-mono text-sm text-muted hover:text-moon transition-colors duration-slow tracking-wide"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <p className="mt-28 font-mono text-[10px] text-muted/50 tracking-[0.25em]">
          © {new Date().getFullYear()} Hanu Mandadi
        </p>
      </motion.div>
    </section>
  );
}
