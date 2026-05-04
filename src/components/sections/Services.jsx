import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import ServiceModal from '../ui/ServiceModal';
import { motion } from 'framer-motion';
import { HiOutlineCloud, HiOutlineCode, HiOutlineCube, HiOutlineLightningBolt, HiOutlineGlobe, HiOutlineCog, HiArrowRight } from 'react-icons/hi';
import { staggerContainer, staggerItem } from '../../hooks/useAnimations';

const services = [
  {
    icon: <HiOutlineCode size={28} />,
    title: 'SaaS Product Development',
    desc: 'Build multi-tenant, scalable SaaS platforms with modern tech stacks, subscription management, and analytics dashboards.',
    color: 'from-blue-500/20 to-blue-500/5',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    badges: ['Software', 'Enterprise', 'Scalable'],
    tagline: 'Build next-generation software products with limitless scale.',
    fullDescription: 'Our SaaS development service covers the entire product lifecycle. From architecting secure multi-tenant backends to crafting flawless, intuitive frontends, we ensure your platform is built for high availability and rapid user growth.',
    targetAudience: 'Startups, SMEs, Enterprises',
    features: ['Multi-tenant architecture', 'Subscription billing integrated', 'Analytics dashboards', 'Role-based access control'],
    technologies: ['React/Vite', 'Node.js', 'AWS', 'PostgreSQL'],
  },
  {
    icon: <HiOutlineCube size={28} />,
    title: 'ERP Software Development',
    desc: 'Custom ERP solutions tailored to your industry — manufacturing, construction, RMC, and more with complete business automation.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    badges: ['ERP', 'Automation', 'Industry'],
    tagline: 'Unify your business operations under one powerful system.',
    fullDescription: 'We build custom ERP systems designed specifically for your industry layout. Whether it is manufacturing, heavy machinery, or retail, our ERP solutions centralize your data, automate administrative tasks, and provide real-time operational visibility.',
    targetAudience: 'Manufacturing, Construction, Logistics',
    features: ['Inventory & Supply Chain', 'HRMS modules', 'Automated reporting', 'Cross-department visibility'],
    technologies: ['Next.js', 'Spring Boot', 'Azure', 'MongoDB'],
  },
  {
    icon: <HiOutlineLightningBolt size={28} />,
    title: 'AI Integration Solutions',
    desc: 'Leverage AI and machine learning to automate processes, generate insights, and build intelligent business applications.',
    color: 'from-purple-500/20 to-purple-500/5',
    image: 'https://images.unsplash.com/photo-1620712948343-008423992b95?q=80&w=2069&auto=format&fit=crop',
    badges: ['AI', 'Machine Learning', 'Innovative'],
    tagline: 'Turn your passive data into predictive intelligence.',
    fullDescription: 'Transform your business with cutting-edge AI. We integrate generative language models, computer vision, and predictive machine learning directly into your standard workflows, automating complex decision making and supercharging your productivity.',
    targetAudience: 'Any data-driven business',
    features: ['LLM Integration (GPT, Claude)', 'Predictive analytics algorithms', 'Automated customer support', 'Data sanitization pipelines'],
    technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Pinecone'],
  },
  {
    icon: <HiOutlineGlobe size={28} />,
    title: 'Website Development',
    desc: 'High-performance, responsive websites and web apps with cutting-edge design, SEO optimization, and lightning-fast load times.',
    color: 'from-orange-500/20 to-orange-500/5',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop',
    badges: ['Web', 'Creative', 'SEO'],
    tagline: 'Exceptional digital experiences that capture audiences.',
    fullDescription: 'Your website is your storefront. We craft ultra-fast, premium web experiences using edge computing and headless architectures, delivering beautiful pixel-perfect UIs with zero compromise to your global search ranking.',
    targetAudience: 'Brands, Agencies, Service Providers',
    features: ['Responsive UI/UX design', 'Headless CMS setup', 'Edge networking', 'SEO & Web Vitals optimized'],
    technologies: ['React/Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
  {
    icon: <HiOutlineCloud size={28} />,
    title: 'Cloud & DevOps',
    desc: 'Cloud infrastructure setup, CI/CD pipelines, containerization, and monitoring for reliable, scalable deployments.',
    color: 'from-cyan-500/20 to-cyan-500/5',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    badges: ['Cloud', 'Infrastructure', 'Security'],
    tagline: 'Bulletproof infrastructure engineered for infinite scale.',
    fullDescription: 'We modernize your backend. By migrating your monoliths to microservices, implementing robust CI/CD pipelines, and establishing enterprise-grade security protocols, we ensure your servers never sleep and deployments are automatic.',
    targetAudience: 'Tech teams, Growth-stage SaaS',
    features: ['Kubernetes cluster management', 'Automated CI/CD pipelines', 'Zero-downtime deployments', '24/7 Server monitoring'],
    technologies: ['Docker', 'Kubernetes', 'AWS/GCP', 'GitHub Actions'],
  },
  {
    icon: <HiOutlineCog size={28} />,
    title: 'Automation Solutions',
    desc: 'Workflow automation, business process optimization, and custom integrations to eliminate manual tasks and boost efficiency.',
    color: 'from-gold/20 to-gold/5',
    image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?q=80&w=2070&auto=format&fit=crop',
    badges: ['Workflow', 'Time-Saver', 'ROI'],
    tagline: 'Stop doing manual work. Let the bots take over.',
    fullDescription: 'We connect all your disparate software tools into unified, automated pipelines. Whether it is triggering invoices off emails or syncing CRM data to marketing engines, we save your staff thousands of hours per year via seamless robotic workflows.',
    targetAudience: 'HR, Finance, Operations teams',
    features: ['API mapping & integration', 'Scheduled job runners', 'Zapier/Make custom apps', 'Data sync bridging'],
    technologies: ['Node.js', 'Webhooks', 'REST APIs', 'GraphQL'],
  },
];

const Services = () => {
  const { theme } = useTheme();
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => setSelectedService(null);

  return (
    <SectionWrapper id="services">
      <SectionHeading
        label="Our Services"
        title="End-to-End Software Solutions"
        subtitle="From ideation to deployment, we deliver comprehensive technology services that transform your business operations."
      />

      {/* The new modal component */}
      <ServiceModal 
        isOpen={selectedService !== null} 
        onClose={closeModal} 
        data={selectedService} 
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={staggerItem}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            style={{ willChange: "transform" }}
            onClick={() => setSelectedService(service)}
            className={`relative p-8 rounded-3xl border cursor-pointer transition-all duration-500 group overflow-hidden ${
              theme === 'dark'
                ? 'bg-dark-surface/60 backdrop-blur-md border-gold/[0.08] hover:border-gold/20 hover:shadow-[0_8px_40px_rgba(212,175,55,0.08)]'
                : 'bg-light-surface/80 backdrop-blur-md border-light-border hover:border-gold/20 hover:shadow-lg'
            }`}
          >
            {/* Accent gradient on hover */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            {/* Glow effect */}
            <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-bl ${service.color} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

            <div className="relative pointer-events-none">
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5, transition: { duration: 0.3 } }}
                className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold/20 transition-colors duration-300"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className={`text-sm leading-relaxed mb-4 ${
                theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
              }`}>
                {service.desc}
              </p>
              <div className="flex items-center gap-1 text-gold text-xs font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn more <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Services;
