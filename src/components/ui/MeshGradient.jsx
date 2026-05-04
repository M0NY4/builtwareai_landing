import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const MeshGradient = () => {
  const { theme } = useTheme();

  const colors = theme === 'dark' 
    ? {
        primary: 'rgba(212, 175, 55, 0.35)',    // Gold
        secondary: 'rgba(79, 70, 229, 0.25)',  // Indigo
        accent: 'rgba(212, 175, 55, 0.15)',    // Gold
        glow: 'rgba(79, 70, 229, 0.1)',      // Indigo
        bg: 'rgb(3, 7, 18)'                   // Darkest Blue/Black
      }
    : {
        primary: 'rgba(212, 175, 55, 0.2)',
        secondary: 'rgba(79, 70, 229, 0.15)',
        accent: 'rgba(212, 175, 55, 0.1)',
        glow: 'rgba(79, 70, 229, 0.05)',
        bg: 'rgb(255, 255, 255)'
      };

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-transparent">
      {/* Base Background - Optimized transition */}
      <div 
        className="absolute inset-0 transition-colors duration-1000"
        style={{ backgroundColor: colors.bg }}
      />

      {/* Optimized Blobs with translateZ(0) for GPU acceleration */}
      {/* 1. TOP-LEFT Blob */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -30, 60, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-25"
        style={{ 
          backgroundColor: colors.primary,
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />

      {/* 2. TOP-RIGHT Blob */}
      <motion.div
        animate={{
          x: [0, -80, 40, 0],
          y: [0, 40, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -top-[5%] -right-[5%] w-[45%] h-[45%] rounded-full blur-[90px] opacity-20"
        style={{ 
          backgroundColor: colors.secondary,
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />

      {/* 3. BOTTOM-LEFT Blob */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, 60, 30, 0],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[0%] -left-[5%] w-[40%] h-[40%] rounded-full blur-[110px] opacity-15"
        style={{ 
          backgroundColor: colors.glow,
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />

      {/* 4. BOTTOM-RIGHT Blob */}
      <motion.div
        animate={{
          x: [0, -40, 80, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -bottom-[5%] -right-[5%] w-[35%] h-[35%] rounded-full blur-[90px] opacity-20"
        style={{ 
          backgroundColor: colors.accent,
          transform: "translateZ(0)",
          willChange: "transform"
        }}
      />

      {/* Grain Overlay - Replaced expensive SVG with a performant CSS version or removed if too heavy */}
      {/* We'll use a very subtle static noise pattern for smoothness */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default MeshGradient;
