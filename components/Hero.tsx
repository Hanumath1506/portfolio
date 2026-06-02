'use client';

import { motion } from 'framer-motion';
import { fade } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="hero-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      <div className="mist" aria-hidden="true" />
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.p
          {...fade}
          transition={{ ...fade.transition, delay: 0.4 }}
          className="font-mono text-[10px] md:text-xs tracking-[0.35em] text-[#4A5568] uppercase mb-8 md:mb-10"
        >
          portfolio / 2026
        </motion.p>

        <motion.h1
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-[clamp(3rem,12vw,9rem)] leading-[0.88] tracking-tight text-[#E8EDF2] font-light"
        >
          Hanu
          <br />
          Mandadi
        </motion.h1>

        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 md:mt-14 font-mono text-sm md:text-base text-[#4A5568] tracking-wide"
        >
          data science · full-stack · ml · nlp
        </motion.p>

        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-4 font-mono text-xs text-[#4A5568]/80"
        >
          {`// 2025. still early.`}
        </motion.p>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 font-mono text-[10px] tracking-[0.3em] text-[#4A5568] uppercase hover:text-[#C8A96E] transition-colors duration-[600ms]"
        aria-label="Scroll to about section"
      >
        scroll
      </motion.a>
    </section>
  );
}
