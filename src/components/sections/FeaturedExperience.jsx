import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import PremiumVisualCard from "../ui/PremiumVisualCard";
import saas2Vid from "../../assets/Saas2 (online-video-cutter.com).mp4";
import saas3Vid from "../../assets/Saas3 (online-video-cutter.com).mp4";
import { HiLightningBolt, HiShieldCheck, HiOutlineCube } from "react-icons/hi";

const FloatingWidget = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        },
        opacity: { duration: 0.5, delay: delay },
      }}
      className={`absolute z-30 p-4 rounded-2xl border backdrop-blur-md shadow-2xl ${className}`}
    >
      {children}
    </motion.div>
  );
};

const FeaturedExperience = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="experience" className="bg-gradient-to-b from-transparent to-gold/5">
      <SectionHeading
        label="Ecosystem Preview"
        title="Scalable Solutions for Every Scale"
        subtitle="Explore our specialized modules for human resources, automation, and industrial operations."
        align="center"
      />

      <div className="mt-8 lg:mt-12 relative max-w-6xl mx-auto">
        {/* Dual Video Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 relative z-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <PremiumVisualCard
              videoSrc={saas2Vid}
              className="w-full shadow-2xl shadow-gold/5"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PremiumVisualCard
              videoSrc={saas3Vid}
              className="w-full shadow-2xl shadow-indigo-500/5"
            />
          </motion.div>
        </div>

        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-40" />

        {/* Interactive Floating Widgets */}
        
        {/* Analytics Widget */}
        <FloatingWidget 
          className={`-top-6 -right-4 lg:-top-10 lg:-right-10 w-44 ${
            theme === 'dark' ? 'bg-dark-surface/90 border-gold/20' : 'bg-white/90 border-gray-200'
          }`}
          delay={0.4}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold">
              <HiLightningBolt />
            </div>
            <div>
              <div className="text-[9px] uppercase tracking-wider text-dark-text-secondary">Uptime</div>
              <div className="text-xs font-bold text-gold">99.9% Reliable</div>
            </div>
          </div>
          <div className="flex gap-1 h-6 items-end">
            {[30, 60, 45, 80, 50, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gold/40 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </FloatingWidget>

        {/* Security Widget */}
        <FloatingWidget 
          className={`-bottom-6 left-1/2 -translate-x-1/2 lg:-bottom-10 w-52 ${
            theme === 'dark' ? 'bg-dark-surface/90 border-gold/20' : 'bg-white/90 border-gray-200'
          }`}
          delay={0.7}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
              <HiShieldCheck className="text-lg" />
            </div>
            <div>
              <div className="text-sm font-bold">Secure Infrastructure</div>
              <div className="text-[10px] text-dark-text-secondary">Enterprise AES Encryption</div>
            </div>
          </div>
        </FloatingWidget>

        {/* Module Widget */}
        <FloatingWidget 
          className={`hidden xl:block top-1/2 -left-20 -translate-y-1/2 w-40 ${
            theme === 'dark' ? 'bg-dark-surface/90 border-gold/20' : 'bg-white/90 border-gray-200'
          }`}
          delay={1.0}
        >
          <div className="text-center">
            <HiOutlineCube className="text-2xl text-gold mx-auto mb-2" />
            <div className="text-xs font-semibold">Modular UI</div>
            <div className="text-[9px] text-dark-text-secondary mt-1">Plug & Play Experience</div>
          </div>
        </FloatingWidget>
      </div>

      {/* Hero CTA below showcase */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 text-center"
      >
        <p className={`text-lg mb-8 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
        }`}>
          Ready to revolutionize your business workflow? Experience our full suite of enterprise tools today.
        </p>
        <a href="#contact" className="inline-block">
          <button className="px-8 py-4 rounded-full font-bold text-[#0D0D0D] bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] hover:shadow-[0_8px_32px_rgba(212,175,55,0.4)] transition-all duration-300 scale-110">
            Book a Live Demo
          </button>
        </a>
      </motion.div>
    </SectionWrapper>
  );
};

export default FeaturedExperience;
