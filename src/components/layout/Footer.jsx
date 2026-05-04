import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { staggerContainer, staggerItem } from '../../hooks/useAnimations';
import logo from '../../assets/Builtware-LOGO.png';

const footerLinks = {
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#team' },
    { name: 'Our Process', href: '#process' },
    { name: 'Solutions', href: '#solutions' },
  ],
  Services: [
    { name: 'SaaS Development', href: '#services' },
    { name: 'ERP Solutions', href: '#services' },
    { name: 'AI Integration', href: '#services' },
    { name: 'Cloud & DevOps', href: '#services' },
  ],
  Industries: [
    { name: 'Manufacturing', href: '#industries' },
    { name: 'Construction', href: '#industries' },
    { name: 'Billing Software', href: '#industries' },
    { name: 'Hospitality', href: '#industries' },
  ],
  Support: [
    { name: 'Contact Us', href: '#contact' },
    { name: 'Request Demo', href: '#contact' },
  ],
};

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`relative pt-20 pb-8 overflow-hidden ${
      theme === 'dark' ? 'bg-dark-bg' : 'bg-light-bg'
    }`}>
      {/* Top gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16"
        >
          {/* Brand */}
          <motion.div variants={staggerItem} className="col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.03 }}
            >
            <span className="text-2xl font-black tracking-tighter">
              BUILTWARE<span className="text-gold">AI</span>
            </span>
            </motion.a>
            <p className={`text-sm leading-relaxed max-w-xs ${
              theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}>
              Your Trusted Partner for ERP, SaaS, Automation & Website Development.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { Icon: FiTwitter, label: 'Twitter' },
                { Icon: FiLinkedin, label: 'LinkedIn' },
                { Icon: FiGithub, label: 'GitHub' },
                { Icon: FiMail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                    theme === 'dark'
                      ? 'bg-white/5 text-dark-text-secondary hover:bg-gold/10 hover:text-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.15)]'
                      : 'bg-black/5 text-light-text-secondary hover:bg-gold/10 hover:text-gold hover:shadow-md'
                  }`}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={staggerItem}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 4 }}
                      className={`text-sm transition-colors duration-200 inline-block ${
                        theme === 'dark'
                          ? 'text-dark-text-secondary hover:text-gold'
                          : 'text-light-text-secondary hover:text-gold'
                      }`}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            theme === 'dark' ? 'border-white/5' : 'border-black/5'
          }`}
        >
          <p className={`text-sm ${
            theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
          }`}>
            © 2026 BuiltwareAI. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm">
            <span className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
              Built with
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gold"
            >
              ♥
            </motion.span>
            <span className={theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'}>
              by BuiltwareAI
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
