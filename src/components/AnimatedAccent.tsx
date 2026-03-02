import { motion } from 'framer-motion';

type AnimatedAccentProps = {
  className?: string;
  colorClass?: string;
  delay?: number;
};

const AnimatedAccent = ({ className = '', colorClass = 'bg-sage/45', delay = 0 }: AnimatedAccentProps) => {
  return (
    <motion.span
      aria-hidden="true"
      className={`absolute rounded-full blur-[2px] ${colorClass} ${className}`}
      // Slow ambient movement keeps sections feeling alive without distracting from text.
      animate={{ y: [0, -10, 0], x: [0, 6, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 7, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
};

export default AnimatedAccent;
