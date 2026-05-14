import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiCheckCircle } from 'react-icons/hi';
import { useTheme } from '../../context/ThemeContext';
import Button from './Button';

const ServiceModal = ({ isOpen, onClose, data }) => {
  const { theme } = useTheme();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && data && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[2rem] border shadow-2xl flex flex-col ${
              theme === 'dark' ? 'bg-[#121212] border-gold/10 text-white' : 'bg-white border-gray-200 text-black'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Floating in Header) */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 text-white/70 hover:text-white transition-colors"
            >
              <HiX size={24} />
            </button>

            {/* Black Header Background */}
            <div className="bg-[#111111] text-white p-6 sm:p-8 flex items-start gap-4 sm:gap-6 shrink-0 border-b border-gold/20">
              {/* Icon */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
                {data.icon || <div className="w-8 h-8 rounded-full bg-gold" />}
              </div>
              
              <div className="pr-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 tracking-tight">{data.title}</h2>
                <p className="text-gold font-medium text-sm sm:text-base">{data.tagline}</p>
              </div>
            </div>

            {/* Scrollable Content: 2-Column Layout */}
            <div className="flex-1 overflow-y-auto p-6 sm:px-10 sm:py-8 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
              <div className="grid md:grid-cols-[1fr_320px] gap-8">
                
                {/* Left Column: Overview & Modules */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">Service Overview</h3>
                    <p className={`text-sm sm:text-base leading-relaxed ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {data.fullDescription}
                    </p>
                  </div>

                  <div className="border-t border-gold/10 pt-8">
                    <h3 className="text-xl font-bold mb-4">Key Capabilities</h3>
                    <div className="space-y-4">
                      {data.features?.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="mt-1 shrink-0 bg-gold rounded-full p-0.5" style={{ color: 'white' }}>
                            <HiCheckCircle size={16} />
                          </div>
                          <span className="text-sm sm:text-base font-medium opacity-90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Details Box & CTA */}
                <div>
                  <div className={`p-6 sm:p-7 rounded-2xl border ${
                    theme === 'dark' ? 'bg-[#1A1A1A] border-gold/10' : 'bg-[#FAFAFA] border-gold/20'
                  }`}>
                    <h3 className="text-lg font-bold mb-5 text-gold">Service Details</h3>

                    <div className="space-y-6">
                      {/* Status */}
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                          Availability
                        </div>
                        <div className="text-sm font-medium">Available Now</div>
                      </div>

                      {/* Target Audience */}
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider mb-1 flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                          Best For
                        </div>
                        <div className="text-sm font-medium">{data.targetAudience}</div>
                      </div>
                      
                      {/* Key Benefit */}
                      <div>
                        <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          Core Technologies
                        </div>
                        <div className={`p-3 rounded-lg text-sm text-gold border border-gold/20 font-medium ${theme === 'dark' ? 'bg-gold/5' : 'bg-gold/10'}`}>
                           {data.technologies?.join(', ') || 'Various Modern Stacks'}
                        </div>
                      </div>

                    </div>

                    <div className="mt-8 pt-2">
                      <Button href="#contact" variant="primary" className="w-full text-center justify-center !py-3 font-semibold shadow-lg shadow-gold/20" onClick={onClose}>
                        Request a Demo
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default ServiceModal;
