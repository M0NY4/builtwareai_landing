import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { HiXMark, HiChatBubbleLeftRight } from "react-icons/hi2";
import { BotMessageSquare, Sparkles } from "lucide-react";

// chatbotIcon removed in favor of vector icons

const QA_PAIRS = [
  {
    question: "What services do you offer?",
    answer:
      "We specialize in premium SaaS development, ERP solutions (like RMC), AI automation, and high-end web applications designed to scale your business.",
  },
  {
    question: "How can I book a consultation?",
    answer:
      "You can click the 'Book Free Consultation' button in the Hero section or use our contact form at the bottom of the page. We'll get back to you within 24 hours!",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of industries including Manufacturing, Real Estate, HR, Construction (RMC), and SaaS-based startups.",
  },
  {
    question: "Tell me about BuiltwareAI.",
    answer:
      "BuiltwareAI is a forward-thinking software agency. We combine cutting-edge technology with premium design to transform how industries operate in the digital age.",
  },
];

const ChatBot = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "Hello! I'm the Builtware AI assistant. How can I help you today?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleQuestionClick = (qa) => {
    if (isTyping) return;

    // Add user message
    setMessages((prev) => [...prev, { type: "user", text: qa.question }]);

    // Simulate AI thinking
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { type: "ai", text: qa.answer }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          style={{ willChange: "transform, scale, rotate" }}
          className={`relative group flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 overflow-hidden ${
            theme === "dark"
              ? "bg-gradient-to-br from-gold/20 via-gold-dark/40 to-black/40 border border-gold/30 hover:shadow-gold/20"
              : "bg-gradient-to-br from-gold to-gold-light border border-white/20 hover:shadow-black/10 shadow-lg"
          }`}
        >
          {/* Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-gold/20 animate-ping group-hover:animate-none" />

          <div className="relative flex items-center justify-center w-full h-full">
            <BotMessageSquare
              className={`w-8 h-8 drop-shadow-lg transition-transform duration-500 group-hover:scale-110 ${
                theme === "dark" ? "text-gold" : "text-white"
              }`}
            />
            <Sparkles
              className={`absolute top-2 right-2 w-4 h-4 animate-pulse ${
                theme === "dark" ? "text-gold/60" : "text-white/60"
              }`}
            />
          </div>

          <div className="absolute top-1 right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-dark-bg rounded-full shadow-sm" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
              scale: 0.8,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            style={{ willChange: "transform, opacity" }}
            className={`w-[350px] sm:w-[400px] h-[550px] rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-gold/20 ${
              theme === "dark"
                ? "bg-dark-surface/95 backdrop-blur-md"
                : "bg-white/95 backdrop-blur-md shadow-black/10"
            }`}
          >
            {/* Header */}
            <div
              className={`p-4 flex items-center justify-between border-b ${
                theme === "dark"
                  ? "border-gold/10 bg-dark-bg/50"
                  : "bg-gray-50 border-gray-100"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-inner overflow-hidden ${
                    theme === "dark"
                      ? "bg-gold/10 border border-gold/20"
                      : "bg-gold/5 border border-gold/10"
                  }`}
                >
                  <BotMessageSquare className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-sm leading-none">
                    Builtware AI
                  </h4>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-medium opacity-60">
                      Online • AI Assistant
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-full transition-colors ${
                  theme === "dark" ? "hover:bg-white/10" : "hover:bg-black/5"
                }`}
              >
                <HiXMark className="text-xl" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold/20">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{
                    opacity: 0,
                    x: msg.type === "ai" ? -20 : 20,
                    y: 10,
                  }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  className={`flex ${msg.type === "ai" ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.type === "ai"
                        ? theme === "dark"
                          ? "bg-dark-bg/50 border border-white/5 text-gray-200 rounded-tl-none"
                          : "bg-gray-100 text-gray-800 rounded-tl-none"
                        : "bg-gradient-to-br from-gold to-gold-dark text-white rounded-tr-none shadow-lg shadow-gold/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className={`px-4 py-3 rounded-2xl rounded-tl-none ${
                      theme === "dark" ? "bg-dark-bg/50" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex gap-1">
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                      />
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.2,
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                      />
                      <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          delay: 0.4,
                        }}
                        className="w-1.5 h-1.5 rounded-full bg-gold"
                      />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div
              className={`p-4 border-t ${
                theme === "dark"
                  ? "border-gold/10 bg-dark-bg/30"
                  : "border-gray-100 bg-gray-50/50"
              }`}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-3 px-1">
                Suggested Questions
              </p>
              <div className="grid grid-cols-1 gap-2">
                {QA_PAIRS.map((qa, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuestionClick(qa)}
                    disabled={isTyping}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-medium border transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-dark-bg/40 border-gold/10 hover:border-gold/40 hover:bg-gold/5 text-gray-300"
                        : "bg-white border-gray-200 hover:border-gold/40 hover:bg-gold/5 text-gray-700 shadow-sm"
                    }`}
                  >
                    {qa.question}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                disabled
                className={`flex-1 bg-transparent border-none focus:ring-0 text-sm opacity-50 cursor-not-allowed ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              />
              <button
                disabled
                className={`p-2 rounded-xl opacity-30 cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-gold/10 text-gold"
                    : "bg-gold/5 text-gold"
                }`}
              >
                <HiChatBubbleLeftRight className="text-lg" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;
