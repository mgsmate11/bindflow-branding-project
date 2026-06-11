import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Vékony olvasási progress-bar a fejléc alján. A teljes dokumentum görgetését
 * 0→100%-ig jelzi (scaleX), springgel simítva.
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary to-accent"
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
