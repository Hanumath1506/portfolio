export const fade = {
  initial: { opacity: 1 },
  animate: { opacity: 1 },
  transition: { duration: 1.6, ease: [0.25, 0.1, 0.25, 1] },
};

export const fadeInView = {
  initial: { opacity: 1 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 1.4, ease: [0.25, 0.1, 0.25, 1] },
};
