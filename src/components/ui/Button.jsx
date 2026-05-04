import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', onClick, className = '', href, ...props }) => {
  const base = 'relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 cursor-pointer overflow-hidden';

  const variants = {
    primary:
      'bg-gradient-to-r from-gold to-gold-light text-dark-bg hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] active:scale-[0.98]',
    secondary:
      'border border-gold/30 text-gold hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] active:scale-[0.98]',
    ghost:
      'text-gold hover:bg-gold/5',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
