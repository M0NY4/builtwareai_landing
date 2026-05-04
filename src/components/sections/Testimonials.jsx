import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';

const baseTestimonials = [
  {
    quote: "BuiltwareAI transformed our RMC operations with a custom ERP that reduced manual work by 70%. Their understanding of the industry is unmatched.",
    name: 'Rajesh Patel',
    role: 'Director, RMC Solutions Pvt Ltd',
    rating: 5,
  },
  {
    quote: "The manufacturing ERP delivered by BuiltwareAI streamlined our production from end to end. On-time delivery and exceptional quality — highly recommended.",
    name: 'Priya Sharma',
    role: 'COO, Industrial Manufacturing Co.',
    rating: 5,
  },
  {
    quote: "Working with BuiltwareAI on our SaaS platform was a game-changer. The scalable architecture and premium design exceeded all our expectations.",
    name: 'Amit Kumar',
    role: 'Founder, TechStart Solutions',
    rating: 5,
  },
  {
    quote: "Their AI automation tools saved us hundreds of hours in customer support. The integration was seamless and the results were immediate.",
    name: 'Ananya Iyer',
    role: 'Operations Lead, CloudNexus India',
    rating: 5,
  },
  {
    quote: "An absolute pleasure to work with. They took our vague requirements and built a robust, enterprise-grade HRMS system that scales beautifully.",
    name: 'Siddharth Malhotra',
    role: 'VP Engineering, Bharat Finserv',
    rating: 5,
  },
  {
    quote: "The team's dedication to quality is evident in every line of code. Our platform is faster, more secure, and stunning to look at.",
    name: 'Karan Mehra',
    role: 'CEO, Mehra Logistics Group',
    rating: 5,
  }
];

// Duplicate for infinite marquee effect loops seamlessly because -50% translation matches the original array boundary
const testimonials = [...baseTestimonials, ...baseTestimonials];

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="testimonials">
      <SectionHeading
        label="Testimonials"
        title="What Our Clients Say"
        subtitle="Don't just take our word for it — hear from businesses that have transformed with our solutions."
        align="center"
      />

      {/* Marquee Container with edge-blur mask */}
      <div 
        className="relative overflow-hidden mt-12 py-8 px-4"
        style={{ 
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 35 }}
          style={{ willChange: "transform" }}
          className="flex gap-6 w-max"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-6 md:p-8 rounded-2xl border w-[320px] md:w-[400px] shrink-0 transition-all duration-300 group ${
                theme === 'dark'
                  ? 'bg-dark-surface/60 backdrop-blur-md border-gold/[0.08] hover:border-gold/30 hover:shadow-[0_8px_40px_rgba(212,175,55,0.1)]'
                  : 'bg-light-surface/80 backdrop-blur-md border-light-border hover:border-gold/30 hover:shadow-lg'
              }`}
            >
              {/* Decorative Quote Mark */}
              <div
                className="absolute top-4 right-6 text-7xl font-serif text-gold opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500"
                style={{ willChange: "transform" }}
              >
                "
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <HiStar key={j} className="text-gold" size={18} />
                ))}
              </div>

              {/* Quote Content */}
              <p className={`text-sm md:text-base leading-relaxed flex-1 mb-6 relative ${
                theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author Info */}
              <div
                className={`pt-4 border-t ${
                  theme === 'dark' ? 'border-white/5' : 'border-black/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-[#0D0D0D] font-bold text-sm shadow-[0_4px_10px_rgba(212,175,55,0.3)]"
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className={`text-xs ${
                      theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
