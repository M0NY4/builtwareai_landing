import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const GlassCard = ({ children, className = '', hover = true, delay = 0, ...props }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : {}}
      className={`
        relative rounded-2xl p-6 md:p-8 
        ${theme === 'dark'
          ? 'bg-dark-surface/60 backdrop-blur-md border border-gold/[0.08] hover:border-gold/20'
          : 'bg-light-surface/80 backdrop-blur-md border border-light-border hover:border-gold/20 shadow-sm'
        }
        transition-all duration-300
        ${hover ? 'hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
