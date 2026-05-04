import { useTheme } from '../../context/ThemeContext';
import SectionWrapper from '../ui/SectionWrapper';
import SectionHeading from '../ui/SectionHeading';
import { motion } from 'framer-motion';

const techStack = [
  {
    category: 'Frontend',
    color: 'from-blue-500/20 to-blue-500/5',
    borderColor: 'hover:border-blue-500/30',
    techs: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Tailwind', icon: '🎨' },
    ],
  },
  {
    category: 'Backend',
    color: 'from-green-500/20 to-green-500/5',
    borderColor: 'hover:border-green-500/30',
    techs: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Python', icon: '🐍' },
      { name: 'Go', icon: '🔵' },
    ],
  },
  {
    category: 'Database',
    color: 'from-purple-500/20 to-purple-500/5',
    borderColor: 'hover:border-purple-500/30',
    techs: [
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🗄️' },
      { name: 'Redis', icon: '🔴' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    color: 'from-orange-500/20 to-orange-500/5',
    borderColor: 'hover:border-orange-500/30',
    techs: [
      { name: 'AWS', icon: '☁️' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
    ],
  },
  {
    category: 'AI & ML',
    color: 'from-gold/20 to-gold/5',
    borderColor: 'hover:border-gold/30',
    techs: [
      { name: 'OpenAI', icon: '🤖' },
      { name: 'LangChain', icon: '🔗' },
      { name: 'TensorFlow', icon: '🧠' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
};

const TechStack = () => {
  const { theme } = useTheme();

  return (
    <SectionWrapper id="tech-stack">
      <SectionHeading
        label="Technology Stack"
        title="Powered by Modern Technologies"
        subtitle="We use cutting-edge tools and frameworks to build robust, scalable solutions."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4"
        style={{ perspective: 800 }}
      >
        {techStack.map((group) => (
          <motion.div
            key={group.category}
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.03, transition: { duration: 0.25 } }}
            style={{ willChange: "transform" }}
            className={`relative p-5 rounded-2xl border overflow-hidden transition-all duration-300 group ${group.borderColor} ${
              theme === 'dark'
                ? 'bg-dark-surface/40 border-gold/[0.06]'
                : 'bg-light-surface/60 border-light-border hover:shadow-lg'
            }`}
          >
            {/* Top gradient bar */}
            <motion.div
              className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${group.color}`}
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Background glow on hover */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-bl ${group.color} rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

            <h3 className="font-semibold text-sm mb-4 text-gold relative">{group.category}</h3>
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              className="space-y-3 relative"
            >
              {group.techs.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={techItemVariants}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  style={{ willChange: "transform" }}
                  className={`flex items-center gap-3 p-1.5 rounded-lg -mx-1.5 transition-colors ${
                    theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-black/5'
                  }`}
                >
                  <motion.span
                    className="text-lg"
                    whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                  >
                    {tech.icon}
                  </motion.span>
                  <span className={`text-sm ${
                    theme === 'dark' ? 'text-dark-text-secondary' : 'text-light-text-secondary'
                  }`}>
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default TechStack;
