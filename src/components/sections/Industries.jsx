import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const industries = [
  { name: 'Billing Software', icon: '🧾', desc: 'GST-compliant invoicing & billing systems' },
  { name: 'Manufacturing ERP', icon: '🏭', desc: 'Production planning & inventory management' },
  { name: 'Milk Industry', icon: '🥛', desc: 'Dairy supply chain & collection automation' },
  { name: 'Construction', icon: '🏗️', desc: 'Project management & cost tracking' },
  { name: 'RMC Plant', icon: '🏢', desc: 'Ready-mix concrete operations & delivery' },
  { name: 'Crusher Plant', icon: '⚙️', desc: 'Aggregate production & fleet management' },
  { name: 'Resort & Hospitality', icon: '🏨', desc: 'Booking, POS & property management' },
  { name: 'Education Management', icon: '🎓', desc: 'School, college & academic automation systems' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const Industries = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="industries">
      <SectionHeading
        label="Industries We Serve"
        title="Solutions Tailored for Every Industry"
        subtitle="Deep domain expertise across diverse sectors ensures our software fits your industry's unique challenges."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {industries.map((industry) => (
          <motion.div
            key={industry.name}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
            style={{ willChange: "transform" }}
            className={`relative p-5 rounded-2xl border text-center cursor-default transition-all duration-300 group overflow-hidden ${
              theme === 'dark'
                ? 'bg-dark-surface/40 border-gold/[0.06] hover:border-gold/20 hover:bg-dark-surface/70 hover:shadow-[0_8px_30px_rgba(212,175,55,0.06)]'
                : 'bg-light-surface/60 border-light-border hover:border-gold/20 hover:shadow-lg'
            }`}
          >
            {/* Subtle radial glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <motion.div
              className="text-3xl mb-3 inline-block"
              whileHover={{ scale: 1.3, rotate: [0, -15, 15, 0], transition: { duration: 0.5 } }}
            >
              {industry.icon}
            </motion.div>
            <h3 className="font-semibold text-sm mb-1 relative">{industry.name}</h3>
            <p className={`text-xs relative ${
              theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}>
              {industry.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Industries;
