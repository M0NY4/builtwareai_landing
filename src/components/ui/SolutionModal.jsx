// import { useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { HiX, HiCheckCircle } from 'react-icons/hi';
// import { useTheme } from '../../context/ThemeContext';
// import Button from './Button';

// const SolutionModal = ({ isOpen, onClose, data }) => {
//   const { theme } = useTheme();

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isOpen]);

//   if (!isOpen || !data) return null;

//   return (
//     <AnimatePresence>
//         <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={onClose}
//             className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
//           />

//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 20 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 20 }}
//             transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
//             className={`relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col ${
//               theme === 'dark' ? 'bg-[#121212] border border-gold/10 text-white' : 'bg-white border border-gray-200 text-black'
//             }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={onClose}
//               className="absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur-md text-black rounded-full shadow-lg hover:bg-white transition-colors"
//             >
//               <HiX size={20} />
//             </button>

//             <div className="flex-1 overflow-y-auto hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
//               <div className="h-48 sm:h-72 relative bg-gray-200 dark:bg-gray-800 shrink-0 overflow-hidden group">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
//                 <img
//                   src={data.image || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"}
//                   alt={data.title}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                 />
//               </div>

//               <div className="p-6 sm:px-10 sm:py-8">
//                 <div className="flex flex-wrap gap-2 mb-6">
//                 {data.badges?.map((badge, idx) => (
//                   <span
//                     key={idx}
//                     className={`px-3 py-1 rounded-full text-xs font-bold border ${
//                       idx === 0
//                         ? 'border-gold text-gold bg-gold/10'
//                         : theme === 'dark'
//                           ? 'bg-white/5 border-white/10 text-white'
//                           : 'bg-black/5 border-black/10 text-black'
//                     }`}
//                   >
//                     {badge}
//                   </span>
//                 ))}
//               </div>

//               <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">{data.title}</h2>

//               <h3 className="text-xl font-bold mb-2">About this {data.type || 'Program'}</h3>
//               <p className="text-gold font-bold mb-4">{data.tagline}</p>

//               <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
//                 theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
//               }`}>
//                 {data.fullDescription}
//               </p>

//               <p className="font-semibold mb-8 text-sm sm:text-base">
//                 Target Audience: <span className={`font-normal ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{data.targetAudience}</span>
//               </p>

//               <div className="grid sm:grid-cols-2 gap-8 border-t border-gold/10 py-8">
//                 <div>
//                   <h3 className="text-xl font-bold mb-5">{data.leftTitle || "What you'll learn"}</h3>
//                   <ul className="space-y-4">
//                     {data.features?.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-medium">
//                         <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
//                           <HiCheckCircle size={16} />
//                         </div>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-bold mb-5">{data.rightTitle || "Tools you'll master"}</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {data.technologies?.map((tech, i) => (
//                       <span
//                         key={i}
//                         className={`px-3 py-1.5 rounded-full text-xs font-bold ${
//                           theme === 'dark' ? 'bg-white/10 text-gray-200' : 'bg-black/5 text-gray-700'
//                         }`}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className={`shrink-0 mx-4 mb-4 sm:mx-8 sm:mb-8 rounded-2xl p-5 sm:px-8 sm:py-5 flex items-center justify-between relative shadow-lg ${
//               theme === 'dark' ? 'bg-[#1A1A1A] border-gold/20 border' : 'bg-[#FAFAFA] border-gray-200 border'
//             }`}>
//               <div>
//                 <div className={`text-xs font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>{data.feeLabel || 'Program Fee'}</div>
//                 <div className="text-2xl sm:text-3xl font-bold text-gold">{data.fee || '₹2,499'}</div>
//               </div>
//               <Button href="#contact" variant="primary" className="!px-8 !py-3 shadow-gold/20 shadow-lg text-sm sm:text-base" onClick={onClose}>
//                 {data.buttonText || 'Enroll Now'}
//               </Button>
//             </div>

//           </motion.div>
//         </div>
//     </AnimatePresence>
//   );
// };

// export default SolutionModal;

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiCheckCircle } from "react-icons/hi";
import { useTheme } from "../../context/ThemeContext";
import Button from "./Button";

const SolutionModal = ({ isOpen, onClose, data }) => {
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || !data) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        {/* BACKDROP */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-pointer"
        />

        {/* MODAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl flex flex-col ${
            theme === "dark"
              ? "bg-[#121212] border border-gold/10 text-white"
              : "bg-white border border-gray-200 text-black"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur-md text-black rounded-full shadow-lg hover:bg-white transition"
          >
            <HiX size={20} />
          </button>

          {/* SCROLL AREA */}
          <div
            className="flex-1 overflow-y-auto hide-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {/* IMAGE HEADER */}
            <div className="h-48 sm:h-72 relative bg-gray-200 dark:bg-gray-800 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <img
                src={
                  data.image ||
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                }
                alt={data.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* CONTENT */}
            <div className="p-6 sm:px-10 sm:py-8">
              {/* BADGES */}
              <div className="flex flex-wrap gap-2 mb-6">
                {data.badges?.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 rounded-full text-xs font-bold border ${
                      idx === 0
                        ? "border-gold text-gold bg-gold/10"
                        : theme === "dark"
                          ? "bg-white/5 border-white/10 text-white"
                          : "bg-black/5 border-black/10 text-black"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* TITLE */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
                {data.title}
              </h2>

              {/* ABOUT */}
              <h3 className="text-xl font-bold mb-2">
                About this {data.type || "Program"}
              </h3>

              <p className="text-gold font-bold mb-4">{data.tagline}</p>

              <p
                className={`text-sm sm:text-base leading-relaxed mb-6 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {data.fullDescription}
              </p>

              <p className="font-semibold mb-8 text-sm sm:text-base">
                Target Audience:{" "}
                <span
                  className={`font-normal ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {data.targetAudience}
                </span>
              </p>

              {/* GRID */}
              <div className="grid sm:grid-cols-2 gap-8 border-t border-gold/10 py-8">
                {/* LEFT */}
                <div>
                  <h3 className="text-xl font-bold mb-5">
                    {data.leftTitle || "What you'll learn"}
                  </h3>
                  <ul className="space-y-4">
                    {data.features?.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm sm:text-base font-medium"
                      >
                        <div className="h-5 w-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                          <HiCheckCircle size={16} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT */}
                <div>
                  <h3 className="text-xl font-bold mb-5">
                    {data.rightTitle || "Tools you'll master"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {data.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                          theme === "dark"
                            ? "bg-white/10 text-gray-200"
                            : "bg-black/5 text-gray-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* ✅ FIXED: properly closed content div */}
          </div>

          {/* FOOTER */}
          <div
            className={`shrink-0 mx-4 mb-4 sm:mx-8 sm:mb-8 rounded-2xl p-5 sm:px-8 sm:py-5 flex items-center justify-between shadow-lg ${
              theme === "dark"
                ? "bg-[#1A1A1A] border-gold/20 border"
                : "bg-[#FAFAFA] border-gray-200 border"
            }`}
          >
            <div>
              <div
                className={`text-xs font-semibold ${
                  theme === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {data.feeLabel || "Program Fee"}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-gold">
                {data.fee || "₹2,499"}
              </div>
            </div>

            <Button
              href="#contact"
              variant="primary"
              className="!px-8 !py-3 shadow-gold/20 shadow-lg text-sm sm:text-base"
              onClick={onClose}
            >
              {data.buttonText || "Request a Demo"}
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default SolutionModal;
