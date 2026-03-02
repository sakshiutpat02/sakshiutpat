import { motion } from 'framer-motion';
import AnimatedAccent from './AnimatedAccent';

const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden px-6 pb-14 pt-20 lg:px-10 lg:pb-16 lg:pt-28">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="mb-4 inline-block rounded-full border border-sage/35 bg-sage/10 px-4 py-1 text-sm font-medium text-sage"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Personal Space
        </motion.p>
        <motion.h1
          className="max-w-3xl font-pacifico text-5xl leading-tight text-ink sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          Hello, I&apos;m Sakshi
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75 sm:text-xl"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
        >
          Curious. Learning out loud. Still figuring things out.
        </motion.p>

        <motion.div
          className="mt-10 h-[5px] w-44 rounded-full bg-terracotta/70"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 176, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.35, ease: 'easeOut' }}
        />
      </div>

      <AnimatedAccent className="-left-8 top-24 h-28 w-28" colorClass="bg-sky/45" delay={0.3} />
      <AnimatedAccent className="right-12 top-16 h-16 w-16" colorClass="bg-lavender/45" delay={0.9} />
      <AnimatedAccent className="bottom-10 right-24 h-24 w-24" colorClass="bg-terracotta/35" delay={1.3} />
    </section>
  );
};

export default Hero;
