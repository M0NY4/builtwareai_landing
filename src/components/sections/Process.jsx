import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { HiOutlineSearch, HiOutlineClipboardList, HiOutlineCode, HiOutlineCloudUpload } from 'react-icons/hi';

const steps = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We deeply understand your business goals, challenges, user needs, and technical requirements.',
    icon: <HiOutlineSearch size={24} />,
    color: 'from-blue-500/20 to-blue-500/5',
  },
  {
    step: '02',
    title: 'Planning',
    desc: 'Define architecture, create wireframes, set milestones, and plan the technical roadmap.',
    icon: <HiOutlineClipboardList size={24} />,
    color: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    step: '03',
    title: 'Development',
    desc: 'Agile sprints with continuous feedback loops, code reviews, and quality assurance at every step.',
    icon: <HiOutlineCode size={24} />,
    color: 'from-purple-500/20 to-purple-500/5',
  },
  {
    step: '04',
    title: 'Deployment',
    desc: 'Launch with CI/CD pipelines, monitoring, performance optimization, and ongoing support.',
    icon: <HiOutlineCloudUpload size={24} />,
    color: 'from-gold/20 to-gold/5',
  },
];

const Process = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="process">
      <SectionHeading
        label="Our Process"
        title="From Vision to Reality"
        subtitle="A proven, transparent development process that delivers results on time, every time."
      />
      <div className="relative mt-8 pt-4">
        {/* Bold Connection Line (desktop) */}
        <div className="hidden lg:block absolute top-1/2 left-[12.5%] right-[12.5%] -translate-y-1/2 z-0">
          <div className="h-2 w-full rounded-full bg-gold/15"></div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: "transform" }}
              className="absolute top-0 left-0 h-2 w-full rounded-full bg-gradient-to-r from-gold via-gold-light to-gold origin-left drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]"
            />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10"
            >
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                style={{ willChange: "transform" }}
                className={`relative p-6 rounded-2xl border text-center transition-all duration-300 group ${
                  theme === 'dark'
                    ? 'bg-dark-surface/90 border-gold/10 hover:border-gold/30 hover:shadow-[0_12px_30px_rgba(212,175,55,0.1)]'
                    : 'bg-light-surface/95 border-light-border hover:border-gold/30 hover:shadow-xl'
                }`}
              >
                {/* Background glow correctly constrained so card doesn't need overflow-hidden */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-tl ${step.color} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
                </div>

                {/* Step number badge - now fully visible outside the box */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease: 'backOut' }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold to-gold-light text-[#0D0D0D] text-xs font-bold shadow-[0_4px_15px_rgba(212,175,55,0.4)] whitespace-nowrap z-20"
                >
                  Step {step.step}
                </motion.div>

                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                  className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mx-auto mt-6 mb-5 group-hover:bg-gold/20 transition-all duration-300 relative z-10"
                >
                  {step.icon}
                </motion.div>

                <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
                <p className={`text-sm leading-relaxed relative z-10 ${
                  theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}>
                  {step.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Process;
