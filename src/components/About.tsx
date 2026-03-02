import { motion } from 'framer-motion';
import AnimatedAccent from './AnimatedAccent';

const paragraphs = [
  'Hello, I\'m Sakshi.',
  'I\'ve never really walked in a straight direction. I\'ve always been curious - the kind that can\'t help asking why, what if, what happens next?',
  'I like learning things just to understand them. I try stuff. I mess up. I try again. I notice how people think, how things work, how small choices can shift everything.',
  'I started working and figuring things out without really knowing what I was doing. I experimented, learned as I went, and honestly figured out more by stumbling through than by planning ahead. A lot of it only made sense later. Some of it, I\'m still piecing together.',
  'I graduated in Pharmaceutical Sciences, and somewhere along the way, curiosity pulled me into business development. Today, I work at an AI startup, exploring how ideas, people, and technology come together to create impact.',
  'What keeps me going is the process itself - learning out loud, testing things, watching what happens, letting curiosity lead even when I\'m not sure where it\'s going.',
  'Still figuring things out. Still asking questions. Still trying.',
  'I\'m just following whatever feels worth doing.'
];

const adoredThings = [
  'I love to sing, classical and western (although I\'m pretty shy in public)',
  'I write blogs, mostly about life and situational human instincts',
  'I like to read fiction and fantasies',
  'I listen to a lot of music and I\'m a hardcore Potterhead'
];

const About = () => {
  return (
    <section id="about" className="relative max-w-full overflow-hidden px-6 pb-12 pt-10 lg:px-10 lg:pb-16 lg:pt-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <h2 className="text-3xl font-semibold text-ink sm:text-4xl">About Me</h2>
          <div className="mt-7 space-y-5 text-base leading-8 text-ink/85 sm:text-lg">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-semibold text-ink sm:text-2xl">Some things I adore</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/80 sm:text-base">
              {adoredThings.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-sage/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative flex w-full items-center justify-center md:justify-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-ink/10 bg-white/55 p-3 shadow-card">
            <img
              src="/about-placeholder.svg"
              alt="Friendly illustration of Sakshi"
              className="w-full max-w-md rounded-2xl object-contain"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>

      <AnimatedAccent className="right-2 top-1/3 h-24 w-24" colorClass="bg-sky/40" delay={0.4} />
    </section>
  );
};

export default About;
