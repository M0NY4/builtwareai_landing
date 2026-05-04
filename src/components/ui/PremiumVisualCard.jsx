import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const PremiumVisualCard = ({ imageSrc, videoSrc, alt = "Visual", className = "" }) => {
  const { theme } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
      className={`group relative p-3 rounded-3xl border ${
        theme === 'dark' 
          ? 'bg-dark-surface/40 border-white/10' 
          : 'bg-white/40 border-black/5 shadow-2xl'
      } backdrop-blur-md transition-all duration-500 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] ${className}`}
    >
      {/* Light Sweep Effect */}
      <motion.div 
        animate={{
          x: ['-100%', '200%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          repeatDelay: 4
        }}
        className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            title={alt}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            style={{ transform: "translateZ(20px)" }}
          />
        ) : (
          <motion.img 
            src={imageSrc} 
            alt={alt}
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
            style={{ transform: "translateZ(20px)" }}
          />
        )}
        
        {/* Glow Overlay */}
        <div className={`absolute inset-0 mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-500 bg-gradient-to-br ${
          theme === 'dark' ? 'from-gold/20 via-transparent to-indigo-500/20' : 'from-gold/10 via-transparent to-indigo-500/10'
        }`} />
      </div>

      {/* Decorative Border Glow */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl border-2 border-gold/30 blur-sm pointer-events-none" />
    </motion.div>
  );
};

export default PremiumVisualCard;
