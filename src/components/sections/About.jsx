import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { HiOutlineCode, HiOutlineCube, HiOutlineLightningBolt, HiOutlineGlobe, HiOutlineDeviceMobile, HiOutlineTemplate } from 'react-icons/hi';
import useCountUp from '../../hooks/useCountUp';
import { staggerContainer, staggerItem } from '../../hooks/useAnimations';

const features = [
  { icon: <HiOutlineCode size={28} />, title: 'SaaS Products', desc: 'End-to-end SaaS platforms built for scale' },
  { icon: <HiOutlineCube size={28} />, title: 'ERP Systems', desc: 'Industry-specific enterprise resource planning' },
  { icon: <HiOutlineLightningBolt size={28} />, title: 'AI Solutions', desc: 'Intelligent automation and machine learning' },
  { icon: <HiOutlineGlobe size={28} />, title: 'Web Development', desc: 'Modern, responsive web applications' },
  { icon: <HiOutlineDeviceMobile size={28} />, title: 'Mobile Apps', desc: 'Cross-platform iOS and Android solutions' },
  { icon: <HiOutlineTemplate size={28} />, title: 'UI/UX Design', desc: 'Premium, user-centric interface design' },
];

const AnimatedStat = ({ value, label }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');
  const { count, ref } = useCountUp(numericValue, 2000);
  return (
    <div className="text-center" ref={ref}>
      <div className="text-3xl font-bold text-gold">{count}{suffix}</div>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-2"
      />
      <div className="text-xs text-dark-text-secondary">{label}</div>
    </div>
  );
};

const About = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <SectionHeading
            label="About Us"
            title="Engineering Powerful Digital Solutions for Modern Businesses"
            subtitle="At BuiltwareAI, we craft enterprise-grade software solutions that drive business transformation. From SaaS platforms to AI-powered automation, we build technology that scales with your ambitions."
            align="left"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-6 mt-4"
          >
            <AnimatedStat value="5+" label="Years Experience" />
            <div className={`w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
            <AnimatedStat value="3" label="Countries Served" />
            <div className={`w-px ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`} />
            <AnimatedStat value="50+" label="Projects Completed" />
          </motion.div>
        </div>

        {/* Right - Feature Cards with stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 gap-4"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              style={{ willChange: "transform" }}
              className={`p-6 rounded-2xl border transition-all duration-300 group cursor-default ${
                theme === 'dark'
                  ? 'bg-dark-surface/50 border-gold/[0.06] hover:border-gold/20 hover:bg-dark-surface/80 hover:shadow-[0_8px_30px_rgba(212,175,55,0.08)]'
                  : 'bg-light-surface/60 border-light-border hover:border-gold/20 hover:shadow-lg'
              }`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
                className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/20 transition-colors"
              >
                {feature.icon}
              </motion.div>
              <h3 className="font-semibold text-base mb-1">{feature.title}</h3>
              <p className={`text-sm ${
                theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default About;
