import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import SectionWrapper from "../ui/SectionWrapper";
import SectionHeading from "../ui/SectionHeading";
import { FiLinkedin as Linkedin, FiGithub as Github } from "react-icons/fi";
import { staggerContainer, staggerItem } from "../../hooks/useAnimations";
import logo from "../../assets/Builtware-LOGO.png";
import ayubImg from "../../assets/AyubMulla.png";
import riyajImg from "../../assets/Riyaj Mujawar.jpeg";
import danish from "../../assets/image.png";

const team = [
  {
    name: "Ayub Mulla",
    role: "Founder & Architect",
    image: ayubImg,
    linkedin: "https://www.linkedin.com/in/ayub-mulla-5796b53ab/",
    bio: "Driving the technical vision of BuiltwareAI. Over a decade of experience in engineering ERP solutions that transform industrial operations across various sectors.",
  },
  {
    name: "Danish Shaikh",
    role: "Founder & Architect",
    image: danish,
    bio: "Master of seamless user experiences and complex web logic. Bridges the gap between pixel-perfect UI and powerful server-side functionality with modern frameworks.",
  },
  {
    name: "Riyaj Mujawar",
    role: "Founder & Architect",
    image: riyajImg,
    bio: "Specialized in architecting high-performance distributed systems. Expert in scaling cloud infrastructure and building robust backend engines for enterprise SaaS products.",
  },
];

const TeamCard = ({ member }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      variants={staggerItem}
      className={`group relative h-[420px] sm:h-[480px] w-full overflow-hidden rounded-[2rem] border transition-all duration-500
        ${
          theme === "dark"
            ? "bg-[#0D0D0D] border-gold/[0.1] hover:border-gold/30"
            : "bg-white border-gray-100 shadow-xl hover:shadow-2xl hover:border-gold/30"
        }`}
    >
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          style={{ willChange: "transform" }}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/40 to-transparent transition-opacity duration-500 
          ${theme === "dark" ? "opacity-90 group-hover:opacity-100" : "opacity-80 group-hover:opacity-95"}`}
        />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
        {/* Info that shifts up on hover */}
        <div className="transform transition-transform duration-500 ease-[0.22, 1, 0.36, 1] group-hover:-translate-y-4" style={{ willChange: "transform" }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-gold font-bold text-[10px] uppercase tracking-[0.2em] mb-3 px-3 py-1.5 bg-gold/10 backdrop-blur-sm inline-block rounded-full border border-gold/20"
          >
            {member.role}
          </motion.div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
            {member.name}
          </h3>
        </div>

        {/* Bio and Socials (Reveal on Hover) */}
        <div className="max-h-0 overflow-hidden opacity-0 transform translate-y-6 transition-all duration-500 ease-[0.22, 1, 0.36, 1] group-hover:max-h-[250px] group-hover:opacity-100 group-hover:translate-y-0" style={{ willChange: "transform, opacity, max-height" }}>
          <p className="text-gray-300 text-sm leading-relaxed mb-8 pr-4">
            {member.bio}
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href={member.linkedin || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-gold hover:border-gold hover:text-[#0D0D0D] transition-all duration-300 shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="flex items-center justify-center h-11 w-11 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-gold hover:border-gold hover:text-[#0D0D0D] transition-all duration-300 shadow-lg"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Subtle border glow effect on hover */}
      <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 rounded-[2rem] transition-colors duration-500 pointer-events-none" />
      <div className="absolute -inset-px bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl pointer-events-none" />
    </motion.div>
  );
};

const Team = () => {
  return (
    <SectionWrapper id="team">
      <SectionHeading
        label="Visionaries"
        title="Meet the Minds Behind BuiltwareAI"
        subtitle="Our team combines engineering excellence with industrial insight to build software that moves the world."
        align="center"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16 px-4"
      >
        {team.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-gold/5 blur-[120px] rounded-full pointer-events-none opacity-50 z-0" />
    </SectionWrapper>
  );
};

export default Team;
