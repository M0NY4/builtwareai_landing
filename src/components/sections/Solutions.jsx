import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import SolutionModal from '../ui/SolutionModal';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { HiArrowRight } from 'react-icons/hi';
import { staggerContainer, staggerItem } from '../../hooks/useAnimations';

const solutions = [
  {
    badge: 'Popular',
    title: 'HRMS & Payroll',
    desc: 'Complete human resource management with automated payroll processing, attendance tracking, leave management, and employee self-service portal.',
    features: ['Employee Management', 'Payroll Automation', 'Attendance Tracking', 'Performance Reviews'],
    gradient: 'from-gold/20 to-gold/5',
    iconGradient: 'from-gold to-gold-light',
    
    // Modal specific data
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
    badges: ['Enterprise Software', 'Popular', 'Automated'],
    type: 'Solution',
    tagline: 'Transform your human resources into a seamless, automated operation.',
    fullDescription: 'Our comprehensive HRMS and Payroll platform centralizes all your employee data, removing silos and drastically reducing manual administrative workload. It automatically calculates taxes, tracks real-time attendance, and provides a polished self-service portal for your staff to manage leave applications and pay slips.',
    targetAudience: 'HR Managers, Payroll Administrators, Employees',
    leftTitle: 'Core Capabilities',
    rightTitle: 'Tech Stack',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS Cloud'],
    feeLabel: 'Starting Plan',
    fee: 'Custom',
    buttonText: 'Schedule Demo'
  },
  {
    badge: 'New',
    title: 'Recruitment Platform',
    desc: 'End-to-end hiring solution with job postings, applicant tracking, interview scheduling, and onboarding automation.',
    features: ['Job Board Integration', 'AI Resume Screening', 'Interview Scheduler', 'Onboarding Flow'],
    gradient: 'from-blue-500/10 to-blue-500/5',
    iconGradient: 'from-blue-400 to-blue-600',
    
    // Modal specific data
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop',
    badges: ['Hiring', 'AI-Powered', 'New'],
    type: 'Solution',
    tagline: 'Source, screen, and secure top talent with AI-driven precision.',
    fullDescription: 'Say goodbye to scattered resumes and endless email chains. Our Recruitment Platform acts as a centralized ATS (Applicant Tracking System), utilizing bespoke AI models to pre-screen candidates, autonomously schedule interviews based on calendar availability, and trigger automated onboarding flows the moment an offer is signed.',
    targetAudience: 'Recruiters, Talent Builders, HR Teams',
    leftTitle: 'Key Workflows',
    rightTitle: 'AI Integrations',
    technologies: ['OpenAI API', 'Next.js', 'MongoDB', 'SendGrid'],
    feeLabel: 'Deployment Time',
    fee: '3 Weeks',
    buttonText: 'Request a Demo'
  },
  {
    badge: 'Enterprise',
    title: 'RMC ERP',
    desc: 'Specialized ERP for ready-mix concrete plants with order management, dispatch, batching, quality control, and fleet tracking.',
    features: ['Order Management', 'Dispatch Planning', 'Quality Control', 'Fleet Tracking'],
    gradient: 'from-emerald-500/10 to-emerald-500/5',
    iconGradient: 'from-emerald-400 to-emerald-600',
    
    // Modal specific data
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
    badges: ['Industry Specific', 'ERP', 'Scalable'],
    type: 'Software',
    tagline: 'The ultimate operating system for Ready-Mix Concrete manufacturing.',
    fullDescription: 'Built from the ground up for the heavy construction materials industry. Our RMC ERP handles every phase of production: tracking raw material inventory, scheduling transport fleets via GPS, digitally certifying batch quality, and auto-generating compliant invoices the moment a load is poured.',
    targetAudience: 'RMC Plant Owners, Dispatch Managers',
    leftTitle: 'Actionable Insights',
    rightTitle: 'Hardware Integrations',
    technologies: ['IoT Sensors', 'GPS APIs', 'Java Spring', 'React Native'],
    feeLabel: 'License Type',
    fee: 'Enterprise',
    buttonText: 'Request Access'
  },
  {
    title: 'Workflow Automation',
    desc: 'Automate repetitive business processes with custom workflows, approvals, notifications, and integrations across your tech stack.',
    features: ['Custom Workflows', 'Smart Approvals', 'Integrations', 'Analytics Dashboard'],
    gradient: 'from-purple-500/10 to-purple-500/5',
    iconGradient: 'from-purple-400 to-purple-600',
    
    // Modal specific data
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    badges: ['Utility', 'No-code', 'Time Saver'],
    type: 'Solution',
    tagline: 'Connect your tools, eliminate manual data entry, and accelerate operations.',
    fullDescription: 'We build digital pipelines that connect your CRM, accounting software, and communication tools. Whenever a triggering event occurs, our engine instantly updates cross-platform data, notifies your team, and drafts necessary documents without any human intervention.',
    targetAudience: 'Operations Managers, Sales Teams',
    leftTitle: 'Automation Benefits',
    rightTitle: 'Supported APIs',
    technologies: ['Zapier', 'Make.com', 'Custom Webhooks', 'Stripe'],
    feeLabel: 'Pricing',
    fee: 'Tailored',
    buttonText: 'Automate Now'
  },
];

const featureItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, delay: i * 0.05 },
  }),
};

const Solutions = () => {
  const { theme } = useTheme();
  const [selectedSolution, setSelectedSolution] = useState(null);

  const closeModal = () => setSelectedSolution(null);

  return (
    <>
      <SolutionModal 
        isOpen={selectedSolution !== null} 
        onClose={closeModal} 
        data={selectedSolution} 
      />
      
      <SectionWrapper id="solutions">
        <SectionHeading
          label="Featured Solutions"
          title="Purpose-Built Products That Deliver"
          subtitle="Explore our flagship solutions designed to solve real-world business challenges with precision and efficiency."
        />
        
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid md:grid-cols-2 gap-5"
      >
        {solutions.map((solution) => (
          <motion.div
            key={solution.title}
            variants={staggerItem}
            onClick={() => setSelectedSolution(solution)}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            style={{ willChange: "transform" }}
            className={`relative group p-6 md:p-8 rounded-2xl border overflow-hidden cursor-pointer transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-dark-surface/60 backdrop-blur-md border-gold/[0.08] hover:border-gold/20 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]'
                : 'bg-light-surface/80 backdrop-blur-md border-light-border hover:border-gold/20 hover:shadow-lg'
            }`}
          >
            {/* Background gradient accent */}
            <motion.div
              className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${solution.gradient} rounded-full blur-3xl pointer-events-none transition-all duration-500 ${theme === 'dark' ? 'opacity-30 group-hover:opacity-60' : 'opacity-40 group-hover:opacity-80'}`}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              style={{ willChange: "transform" }}
            />

            <div className="relative pointer-events-none">
              {solution.badge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: 'backOut' }}
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gold/10 text-gold border border-gold/20 mb-4"
                >
                  {solution.badge}
                </motion.span>
              )}
              <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
              <p className={`text-sm leading-relaxed mb-5 min-h-[60px] ${
                theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
                {solution.desc}
              </p>

              <div className="grid grid-cols-2 gap-2 mb-6 pointer-events-auto">
                {solution.features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    custom={i}
                    variants={featureItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                     <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    <span className={`text-xs font-medium ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="overflow-hidden pointer-events-auto mt-2">
                <Button variant="ghost" className="!px-0 !text-xs group" onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSolution(solution);
                }}>
                  Learn More <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
    </>
  );
};

export default Solutions;
