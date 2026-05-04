import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = '', dark = false, delay = 0 }) => {
  return (
    <section
      id={id}
      style={{ 
        contentVisibility: 'auto', 
        containIntrinsicSize: '1px 500px',
        contain: 'paint' 
      }}
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ 
          duration: 0.8, 
          delay: delay,
          ease: [0.16, 1, 0.3, 1] // Custom ease-out expo
        }}
        style={{ willChange: 'transform, opacity' }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
