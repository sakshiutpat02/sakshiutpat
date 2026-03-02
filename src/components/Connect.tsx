import { motion } from 'framer-motion';

const Connect = () => {
  return (
    <section id="connect" className="px-6 pb-20 pt-12 lg:px-10 lg:pb-28 lg:pt-16">
      <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-2">
        <motion.article
          className="rounded-3xl border border-ink/10 bg-white/60 p-8 shadow-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-ink">LinkedIn</h3>
          <p className="mt-3 max-w-sm text-base leading-7 text-ink/75">
            Want to connect professionally or follow what I am exploring?
          </p>
          <a
            href="https://www.linkedin.com/in/sakshi-utpat/"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center justify-center rounded-full border border-sage/45 bg-sage/10 px-5 py-2.5 text-sm font-semibold text-sage transition duration-300 hover:-translate-y-0.5 hover:bg-sage hover:text-canvas focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
          >
            Find me on LinkedIn
          </a>
        </motion.article>

        <motion.article
          className="rounded-3xl border border-ink/10 bg-ink p-8 text-canvas shadow-card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h3 className="text-2xl font-semibold">Let&apos;s Connect</h3>
          <p className="mt-3 max-w-sm text-base leading-7 text-canvas/80">
            Curious conversations, ideas, questions, or just thinking out loud.
          </p>
          <a
            href="https://calendly.com/sakshiutpat2123/30min"
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#b6553d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book a 30-min conversation
          </a>
        </motion.article>
      </div>
    </section>
  );
};

export default Connect;
