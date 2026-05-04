import { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import MagneticButton from "../ui/MagneticButton";
import {
  HiArrowRight,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiCheck,
  HiExclamationCircle,
} from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { emailConfig } from "../../utils/emailConfig";

const Contact = () => {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmailError(null);
    setIsSending(true);

    const waNumber = "919730016522";

    // 1. Send Background Email via EmailJS
    // Include both naming conventions so the template works regardless of setup
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      name: formData.name,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      }),
      to_email: "admin@builtwareai.info, heyperson07@gmail.com",
      reply_to: formData.email,
    };

    try {
      const response = await emailjs.send(
        emailConfig.SERVICE_ID,
        emailConfig.TEMPLATE_ID,
        templateParams,
        { publicKey: emailConfig.PUBLIC_KEY },
      );
      console.log("✅ Email sent successfully!", response.status, response.text);
    } catch (err) {
      console.error("❌ EmailJS Error:", err);
      const errMsg = err?.text || err?.message || "Unknown error. Check your EmailJS dashboard.";
      setEmailError(`Email failed: ${errMsg}`);
    } finally {
      setIsSending(false);
    }

    // 2. WhatsApp Redirection (always fires regardless of email status)
    const waMessage = `*🚀 New Lead - Builtware AI*\n\n*👤 Contact Details*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company}\n*Phone:* ${formData.phone}\n\n*💬 Message*\n${formData.message}\n\n_Sent from Builtware AI Portfolio_`;
    const encodedWaMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/${waNumber}?text=${encodedWaMessage}`;
    window.open(waUrl, "_blank");

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
      theme === "dark"
        ? `bg-dark-bg/60 border text-white placeholder:text-dark-text-secondary/50 ${
            focusedField === field
              ? "border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
              : "border-white/5"
          }`
        : `bg-gray-50 border text-light-text placeholder:text-light-text-secondary/50 ${
            focusedField === field
              ? "border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.08)]"
              : "border-black/5"
          }`
    }`;

  return (
    <SectionWrapper id="contact">
      <div className="relative">
        {/* Background effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute inset-0 -m-8 bg-gradient-to-b from-gold/[0.02] via-gold/[0.04] to-gold/[0.02] rounded-3xl pointer-events-none"
        />

        <div className="relative grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-gold/10 text-gold border border-gold/20 mb-4"
            >
              Get In Touch
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
            >
              Let's Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">
                Powerful
              </span>{" "}
              Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className={`text-base leading-relaxed mb-8 ${
                theme === "dark"
                  ? "text-dark-text-secondary"
                  : "text-light-text-secondary"
              }`}
            >
              Ready to transform your business with cutting-edge software? Get
              in touch with our team to discuss your project requirements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-4"
            >
              {[
                {
                  icon: <HiOutlineMail size={20} />,
                  label: "Email",
                  value: "admin@builtwareai.info",
                },
                {
                  icon: <HiOutlinePhone size={20} />,
                  label: "Phone",
                  value: "+917385229375",
                },
                {
                  icon: <HiOutlineLocationMarker size={20} />,
                  label: "Location",
                  value: "India",
                },
              ].map((info, i) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex items-center gap-4 cursor-default"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-gold bg-gold/10"
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <div
                      className={`text-xs ${
                        theme === "dark"
                          ? "text-dark-text-secondary"
                          : "text-light-text-secondary"
                      }`}
                    >
                      {info.label}
                    </div>
                    <div className="text-sm font-medium">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            style={{ perspective: 1000 }}
          >
            <div
              className={`p-8 rounded-2xl border transition-all duration-300 ${
                theme === "dark"
                  ? "bg-dark-surface/60 backdrop-blur-md border-gold/[0.08]"
                  : "bg-light-surface/80 backdrop-blur-md border-light-border shadow-lg"
              }`}
            >
              <h3 className="text-xl font-semibold mb-6">Request a Demo </h3>

              <motion.form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        theme === "dark"
                          ? "text-dark-text-secondary"
                          : "text-light-text-secondary"
                      }`}
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass("name")}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 }}
                  >
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        theme === "dark"
                          ? "text-dark-text-secondary"
                          : "text-light-text-secondary"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass("email")}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.38 }}
                  >
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        theme === "dark"
                          ? "text-dark-text-secondary"
                          : "text-light-text-secondary"
                      }`}
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Builtware AI"
                      className={inputClass("company")}
                      onFocus={() => setFocusedField("company")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <label
                      className={`block text-xs font-medium mb-1.5 ${
                        theme === "dark"
                          ? "text-dark-text-secondary"
                          : "text-light-text-secondary"
                      }`}
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className={inputClass("phone")}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label
                    className={`block text-xs font-medium mb-1.5 ${
                      theme === "dark"
                        ? "text-dark-text-secondary"
                        : "text-light-text-secondary"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className={inputClass("subject")}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.45 }}
                >
                  <label
                    className={`block text-xs font-medium mb-1.5 ${
                      theme === "dark"
                        ? "text-dark-text-secondary"
                        : "text-light-text-secondary"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className={`${inputClass("message")} resize-none`}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    variant="primary"
                    className={`w-full !py-3.5 ${submitted ? "!bg-green-500 !from-green-500 !to-green-400" : ""}`}
                    disabled={isSending}
                  >
                    {submitted ? (
                      <>
                        <HiCheck size={18} /> Message Sent!
                      </>
                    ) : isSending ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Request a Demo Today <HiArrowRight />
                      </>
                    )}
                  </Button>

                  {/* Email Error Display */}
                  {emailError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 flex items-start gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-xs"
                    >
                      <HiExclamationCircle size={16} className="shrink-0 mt-0.5" />
                      <span>{emailError} — Please check browser console for details.</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
