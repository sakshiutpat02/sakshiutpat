import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="border-t border-ink/10 bg-ink/5 px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-ink/70">&copy; Sakshi Utpat</p>
        </div>
        <motion.div
          aria-hidden="true"
          className="h-3.5 w-20 rounded-full bg-gradient-to-r from-sage via-terracotta to-sky"
          animate={{ x: [0, 8, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </footer>
  );
};

export default Footer;
