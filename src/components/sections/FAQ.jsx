import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { HiPlus, HiMinus } from 'react-icons/hi';

const faqs = [
  {
    question: "What types of software solutions does BuiltwareAI provide?",
    answer: "BuiltwareAI specializes in premium SaaS development, custom ERP systems (like RMC and Industrial ERPs), AI-powered business automation, and high-performance enterprise web applications."
  },
  {
    question: "How long does a typical custom software project take?",
    answer: "Project timelines vary depending on complexity. A custom MVP can take 4-8 weeks, while complex enterprise ERP or SaaS platforms may take 3-6 months. We follow an agile process with regular updates."
  },
  {
    question: "Do you provide ongoing support after deployment?",
    answer: "Yes, we offer comprehensive post-launch support and maintenance packages. This includes 24/7 monitoring, security updates, performance optimization, and feature enhancements."
  },
  {
    question: "Can you integrate AI into existing business workflows?",
    answer: "Absolutely. We specialize in AI integration, from custom LLM implementations to predictive analytics and process automation, helping businesses transform their existing operations."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have deep expertise in Manufacturing, Construction (RMC), Logistics, HR, and SaaS startups. However, our modular architecture allows us to build solutions for almost any industry."
  }
];

const FAQItem = ({ faq, isOpen, toggle }) => {
  const { theme } = useTheme();

  return (
    <div className={`mb-4 rounded-2xl border transition-all duration-300 ${
      theme === 'dark' 
        ? 'bg-dark-surface/40 border-gold/10' 
        : 'bg-white border-gray-200 shadow-sm'
    }`}>
      <button
        onClick={toggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {faq.question}
        </span>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isOpen ? 'bg-gold text-[#0D0D0D]' : 'bg-gold/10 text-gold'
        }`}>
          {isOpen ? <HiMinus /> : <HiPlus />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className={`px-6 pb-5 text-sm leading-relaxed ${
              theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
            }`}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <SectionWrapper id="faq">
      <SectionHeading
        label="FAQ"
        title="Common Questions"
        subtitle="Find answers to common questions about our services, process, and technical expertise."
        align="center"
      />

      <div className="max-w-3xl mx-auto mt-12">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>

      {/* Structured Data for FAQ */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </SectionWrapper>
  );
};

export default FAQ;
