import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const FloatingBadge = ({ icon: Icon, title, subtitle, className = "", delay = 0 }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      style={{ willChange: "transform" }}
      className={`absolute z-30 pointer-events-none ${className}`}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.5
        }}
        style={{ willChange: "transform" }}
        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border backdrop-blur-md shadow-xl ${
          theme === 'dark' 
            ? 'bg-dark-surface/80 border-gold/20 shadow-gold/5' 
            : 'bg-white/90 border-gray-200 shadow-black/5'
        }`}
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
          theme === 'dark' ? 'bg-gold/10 text-gold' : 'bg-gold/5 text-gold'
        }`}>
          <Icon className="text-xl" />
        </div>
        
        <div className="flex flex-col">
          <span className={`text-sm font-bold leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </span>
          {subtitle && (
            <span className={`text-[10px] uppercase tracking-wider font-semibold opacity-60 ${
              theme === 'dark' ? 'text-gold-light' : 'text-gold-dark'
            }`}>
              {subtitle}
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FloatingBadge;
