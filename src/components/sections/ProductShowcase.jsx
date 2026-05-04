import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { HiArrowRight } from "react-icons/hi";
import premiumSaasImg from "../../assets/premium-saas.png";
import agenticAiImg from "../../assets/agentic-ai.png";
import hrmsPreviewImg from "../../assets/hrms-preview.png";
import industryPreviewImg from "../../assets/industry-preview.png";

const slides = [
  {
    id: "erp",
    title: "Smart ERP for Modern Businesses",
    desc: "Manage operations, inventory, and analytics in one place.",
    image: premiumSaasImg,
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: "hrms",
    title: "Automate HR & Payroll",
    desc: "Track employees, attendance, and salaries effortlessly.",
    image: hrmsPreviewImg,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "ai",
    title: "AI That Runs Your Business",
    desc: "Automate workflows and decision-making using AI.",
    image: agenticAiImg,
    color: "from-gold/20 to-orange-500/20",
  },
  {
    id: "industry",
    title: "Built for Every Industry",
    desc: "Custom solutions for manufacturing, RMC, milk, and more.",
    image: industryPreviewImg,
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const ProductShowcase = () => {
  const { theme } = useTheme();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 second auto slide
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="showcase">
      <SectionHeading
        label="Product Showcase"
        title="Discover Our SaaS Solutions"
        subtitle="Experience premium, modular enterprise tools designed to perfectly align with your workflow."
        align="center"
      />

      <div className="mt-12 lg:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Text Layer */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="relative h-[250px] sm:h-[220px] lg:h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ willChange: "transform, opacity" }}
                  className="absolute inset-0"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    {slides[current].title}
                  </h3>
                  <p
                    className={`text-lg sm:text-xl mb-8 leading-relaxed max-w-lg ${
                      theme === "dark"
                        ? "text-dark-text-secondary"
                        : "text-light-text-secondary"
                    }`}
                  >
                    {slides[current].desc}
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href="#contact"
                      className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-[#0D0D0D] bg-gradient-to-r from-[#D4AF37] to-[#F5D76E] hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all duration-300"
                    >
                      Explore Solution
                      <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="flex gap-3 mt-8">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${
                    current === idx
                      ? "w-10 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                      : `w-2.5 ${theme === "dark" ? "bg-white/20 hover:bg-white/40" : "bg-black/20 hover:bg-black/40"}`
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Visual Frame (Layered UI) */}
          <div
            className="relative order-1 lg:order-2 h-[350px] sm:h-[450px] lg:h-[550px] w-full"
            style={{ perspective: "1000px" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateY: -10 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="absolute inset-0 flex items-center justify-center transform-style-3d"
              >
                {/* Glowing Backlight */}
                <div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[100px] bg-gradient-to-br ${slides[current].color} opacity-60 dark:opacity-40 transition-colors duration-1000`}
                />

                {/* Layer 1 (Back card: Rotated & Scaled Down) */}
                <div
                  className={`absolute w-[80%] h-[70%] rounded-2xl border backdrop-blur-sm -rotate-6 scale-95 translate-x-4 translate-y-6 ${
                    theme === "dark"
                      ? "bg-dark-surface/40 border-gold/10"
                      : "bg-white/40 border-gray-200"
                  }`}
                />

                {/* Layer 2 (Main Card) */}
                <motion.div
                  whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
                  transition={{ duration: 0.4 }}
                  className={`relative z-10 w-[90%] h-[80%] rounded-2xl overflow-hidden border shadow-2xl backdrop-blur-md ${
                    theme === "dark"
                      ? "bg-dark-surface/80 border-gold/20 shadow-gold/10"
                      : "bg-white border-white/40 shadow-black/5"
                  }`}
                >
                  {/* Mock Window Header */}
                  <div
                    className={`h-10 border-b flex items-center px-4 gap-2 ${
                      theme === "dark"
                        ? "bg-dark-bg/50 border-white/5"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>

                  {/* Image Container */}
                  <div className="w-full h-[calc(100%-40px)] relative bg-gray-100 dark:bg-[#1f1f1f] group overflow-hidden">
                    {/* Placeholder skeleton while loading or missing image */}
                    <div className="absolute inset-0 bg-gray-200 dark:bg-[#1a1a1a] animate-pulse" />
                    
                    <img
                      src={slides[current].image}
                      alt={slides[current].title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover object-left-top z-10 transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextElementSibling.style.display = "flex";
                      }}
                    />

                    {/* Fallback state when image is entirely missing */}
                    <div className="hidden absolute inset-0 z-20 items-center justify-center bg-gray-100 dark:bg-[#1f1f1f] flex-col gap-4 text-gray-400 border border-dashed border-gray-300 dark:border-gray-700 m-8 rounded-xl">
                      <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <span className="text-sm font-medium tracking-wide">
                        Product UI Preview
                      </span>
                    </div>
                  </div>

                  {/* Layer 3 (Floating Widget Element) */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute -right-4 -bottom-4 w-32 h-32 rounded-xl border backdrop-blur-md shadow-xl z-30 ${
                      theme === "dark"
                        ? "bg-dark-surface/90 border-gold/20"
                        : "bg-white/90 border-gray-200"
                    }`}
                  >
                    <div className="p-4 h-full flex flex-col justify-between">
                      <div className="w-8 h-8 rounded-full bg-green-400/20 flex items-center justify-center text-green-500 font-bold text-xs">
                        +12%
                      </div>
                      <div>
                        <div className="flex items-end gap-1 mb-2">
                          {[40, 60, 45, 80, 50].map((h, i) => (
                            <div
                              key={i}
                              className="w-3 rounded-t-sm bg-gradient-to-t from-gold/60 to-gold"
                              style={{ height: `${h}%` }}
                            ></div>
                          ))}
                        </div>
                        <div
                          className={`h-2 w-16 rounded ${theme === "dark" ? "bg-white/10" : "bg-black/10"}`}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProductShowcase;
