import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import Button from "../ui/Button";
import AnimatedText from "../ui/AnimatedText";
import useCountUp from "../../hooks/useCountUp";
import { HiArrowRight, HiOutlineCalendar } from "react-icons/hi";
import Typewriter from "../ui/Typewriter";
import PremiumVisualCard from "../ui/PremiumVisualCard";
import FloatingBadge from "../ui/FloatingBadge";
import { 
  HiOutlineShieldCheck, 
  HiOutlineBolt, 
  HiOutlinePuzzlePiece, 
  HiOutlineChartBar 
} from "react-icons/hi2";

// Asset Imports
import premiumSaasImg from "../../assets/premium-saas.png";
import agenticAiImg from "../../assets/agentic-ai.png";
import mainSaasVid from "../../assets/Main SaaS (online-video-cutter.com).mp4";

const StatItem = ({ value, suffix = "", label }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const { count, ref } = useCountUp(numericValue, 2000);
  const displaySuffix = value.replace(/[0-9]/g, "");

  return (
    <div ref={ref}>
      <div className="text-2xl sm:text-3xl font-bold text-gold">
        {count}
        {displaySuffix || suffix}
      </div>
      <div className="text-xs sm:text-sm mt-1 text-dark-text-secondary">
        {label}
      </div>
    </div>
  );
};

const Hero = () => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-12 sm:pt-28 lg:pt-32 lg:pb-0"
    >
      <motion.div
        style={{ y, opacity, willChange: "transform, opacity" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 mb-4 sm:mb-6"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-gold"
              />
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-gold">
                Enterprise Software Solutions
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              <span className="block">
                <AnimatedText text="Transforming Industries with" delay={0.2} />
              </span>
              <span className="block my-1 sm:my-2">
                <Typewriter
                  texts={["Smart Software", "Custom SaaS", "Enterprise ERP"]}
                  className="text-gold"
                />
              </span>
              <span className="block">
                <AnimatedText text="Solutions" delay={0.7} />
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className={`mt-4 sm:mt-6 text-sm sm:text-lg leading-relaxed max-w-xl ${
                theme === "dark"
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Build scalable, secure, and high-performance digital systems for
              your business with our premium SaaS, ERP, automation, and website
              development services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
            >
              <Button href="#contact" variant="primary" className="w-full sm:w-auto">
                Request a Demo <HiArrowRight />
              </Button>
              <Button href="#contact" variant="secondary" className="w-full sm:w-auto">
                <HiOutlineCalendar /> Book Free Consultation
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className={`flex justify-between sm:justify-start sm:gap-12 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t ${
                theme === "dark" ? "border-white/5" : "border-black/5"
              }`}
            >
              <StatItem value="50+" label="Projects" />
              <StatItem value="98%" label="Satisfaction" />
              <StatItem value="24/7" label="Support" suffix="/7" />
            </motion.div>
          </div>

          {/* Right - Premium Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block lg:mt-8"
          >
            <div className="relative">
              {/* Primary Visual */}
              <PremiumVisualCard
                videoSrc={mainSaasVid}
                alt="Premium SaaS Dashboard"
                className="z-20 shadow-2xl shadow-gold/10"
              />

              {/* Floating Highlights */}
              <FloatingBadge 
                icon={HiOutlinePuzzlePiece}
                title="Modular UI"
                subtitle="Plug & Play"
                className="-top-12 -left-12 hidden xl:block"
                delay={0.8}
              />

              <FloatingBadge 
                icon={HiOutlineShieldCheck}
                title="Secure Infrastructure"
                subtitle="AES-256 Encryption"
                className="-bottom-8 -left-6 hidden xl:block"
                delay={1.2}
              />

              <FloatingBadge 
                icon={HiOutlineBolt}
                title="99.9% Uptime"
                subtitle="Highly Reliable"
                className="-top-10 -right-12 hidden xl:block"
                delay={1}
              />

              <FloatingBadge 
                icon={HiOutlineChartBar}
                title="Real-time Analytics"
                subtitle="Smart Insights"
                className="-bottom-12 -right-10 hidden xl:block"
                delay={1.4}
              />

              {/* Decorative Glows */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span
            className={`text-xs tracking-widest uppercase ${
              theme === "dark"
                ? "text-dark-text-secondary"
                : "text-light-text-secondary"
            }`}
          >
            Scroll
          </span>
          <div
            className={`w-5 h-8 rounded-full border-2 flex items-start justify-center p-1 ${
              theme === "dark" ? "border-white/20" : "border-black/20"
            }`}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-2 rounded-full bg-gold"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
