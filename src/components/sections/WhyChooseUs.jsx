import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { HiOutlineShieldCheck, HiOutlineLightningBolt, HiOutlineLockClosed, HiOutlineAcademicCap, HiOutlineAdjustments } from 'react-icons/hi';

const reasons = [
  {
    icon: <HiOutlineAdjustments size={24} />,
    title: 'Scalable Architecture',
    desc: 'Systems designed to grow with your business, from startup to enterprise scale.',
    stat: '10x',
    statLabel: 'Growth Ready',
  },
  {
    icon: <HiOutlineLightningBolt size={24} />,
    title: 'Fast Delivery',
    desc: 'Agile development methodology ensures rapid iteration and on-time delivery.',
    stat: '2x',
    statLabel: 'Faster Delivery',
  },
  {
    icon: <HiOutlineLockClosed size={24} />,
    title: 'Secure Systems',
    desc: 'Enterprise-grade security with encryption, authentication, and compliance built-in.',
    stat: '100%',
    statLabel: 'Secure',
  },
  {
    icon: <HiOutlineAcademicCap size={24} />,
    title: 'Industry Expertise',
    desc: 'Deep domain knowledge across manufacturing, construction, dairy, and more.',
    stat: '7+',
    statLabel: 'Industries',
  },
  {
    icon: <HiOutlineShieldCheck size={24} />,
    title: 'Custom Solutions',
    desc: 'Tailored software that fits your exact business processes and workflows.',
    stat: '100%',
    statLabel: 'Custom Built',
  },
];

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const WhyChooseUs = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="why-us">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionHeading
            label="Why Choose Us"
            title="Built for Performance. Designed for Scale."
            subtitle="We don't just build software — we engineer solutions that become the backbone of your business operations."
            align="left"
          />

          {/* Animated progress bars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4 mt-2"
          >
            {[
              { label: 'Client Satisfaction', value: 98 },
              { label: 'On-Time Delivery', value: 95 },
              { label: 'Code Quality', value: 99 },
            ].map((bar) => (
              <div key={bar.label}>
                <div className="flex justify-between mb-1.5">
                  <span className={`text-xs font-medium ${
                    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>{bar.label}</span>
                  <span className="text-xs font-semibold text-gold">{bar.value}%</span>
                </div>
                <div className={`h-1.5 rounded-full overflow-hidden ${
                  theme === 'dark' ? 'bg-white/5' : 'bg-black/5'
                }`}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${bar.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-gold to-gold-light"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              style={{ willChange: "transform" }}
              className={`flex gap-4 p-5 rounded-2xl border transition-all duration-300 group cursor-default ${
                theme === 'dark'
                  ? 'bg-dark-surface/30 border-gold/[0.04] hover:border-gold/15 hover:bg-dark-surface/60 hover:shadow-[0_4px_20px_rgba(212,175,55,0.06)]'
                  : 'bg-light-surface/40 border-light-border hover:border-gold/15 hover:shadow-md'
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors"
              >
                {reason.icon}
              </motion.div>
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-0.5">{reason.title}</h3>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}>
                  {reason.desc}
                </p>
              </div>
              <div className="text-right shrink-0 hidden sm:block">
                <div className="text-lg font-bold text-gold">{reason.stat}</div>
                <div className={`text-[10px] ${
                  theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                }`}>
                  {reason.statLabel}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default WhyChooseUs;
