"use client";
import { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaEnvelopeOpen,
} from "react-icons/fa";
import MotionWrapper from "../components/MotionWrapper";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("idle");
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFocus = (fieldName: string) => setFocusedField(fieldName);
  const handleBlur = () => setFocusedField(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus("loading");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmissionStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmissionStatus("error");
    }
  };

  const socialLinks = [
    { icon: FaEnvelope, href: "mailto:kavin@example.com", label: "Email" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/your-profile",
      label: "LinkedIn",
    },
    {
      icon: FaGithub,
      href: "https://github.com/your-profile",
      label: "GitHub",
    },
  ];

  const dotPositions = [
    { top: "10%", left: "15%" },
    { top: "20%", left: "80%" },
    { top: "30%", left: "25%" },
    { top: "40%", left: "70%" },
    { top: "50%", left: "10%" },
    { top: "60%", left: "90%" },
    { top: "70%", left: "30%" },
    { top: "80%", left: "60%" },
    { top: "90%", left: "20%" },
    { top: "15%", left: "50%" },
    { top: "35%", left: "85%" },
    { top: "65%", left: "40%" },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 overflow-hidden"
    >
      {/* Floating Social Nav */}
      <div className="hidden md:flex fixed lg:left-4 right-1 top-1/3 lg:top-3/4 flex-col space-y-4 z-50">
        {socialLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, x: 6 }}
              className="relative group flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 text-gray-700 hover:text-orange-600 transition-all duration-300"
            >
              <Icon className="text-xl" />
              <span className="absolute left-full ml-3 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg">
                {link.label}
              </span>
            </motion.a>
          );
        })}
      </div>

      {/* Mobile Bottom Nav */}
      <div className="flex md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 gap-4 z-50 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-xl border border-white/20">
        {socialLinks.map((link, i) => {
          const Icon = link.icon;
          return (
            <motion.a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-white to-gray-50 text-gray-700 hover:text-orange-600 transition-all duration-200 shadow-sm border border-white/50"
              title={link.label}
            >
              <Icon className="text-lg" />
            </motion.a>
          );
        })}
      </div>

      {/* Background Floating Icons */}
      {mounted && (
        <motion.div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {dotPositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
              style={{
                top: position.top,
                left: position.left,
              }}
              animate={{
                y: [0, 15, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + (i % 3) * 0.5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          ))}
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-gray-800 via-orange-600 to-amber-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ready to bring your ideas to life? Let&apos;s create something amazing
          together. I&apos;m always open to discussing new projects and
          opportunities.
        </motion.p>

        <MotionWrapper
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                <FaPaperPlane className="text-white text-lg" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Send a Message
                </h3>
                <p className="text-gray-600">
                  I&apos;ll get back to you within 24 hours
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <FaUser
                      className={`text-lg transition-colors duration-300 ${
                        focusedField === "name"
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus("name")}
                    onBlur={handleBlur}
                    placeholder="Your full name"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border-0 rounded-xl focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <FaEnvelopeOpen
                      className={`text-lg transition-colors duration-300 ${
                        focusedField === "email"
                          ? "text-orange-500"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus("email")}
                    onBlur={handleBlur}
                    placeholder="your.email@example.com"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-gray-50/80 border-0 rounded-xl focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus("message")}
                    onBlur={handleBlur}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    className="w-full px-4 py-4 bg-gray-50/80 border-0 rounded-xl focus:ring-2 focus:ring-orange-200 focus:bg-white transition-all duration-300 text-gray-900 placeholder-gray-500 shadow-sm resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submissionStatus === "loading"}
                whileHover={{
                  scale: submissionStatus !== "loading" ? 1.02 : 1,
                }}
                whileTap={{ scale: submissionStatus !== "loading" ? 0.98 : 1 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group relative overflow-hidden"
              >
                <div className="relative z-10 flex items-center justify-center gap-3">
                  {submissionStatus === "loading" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </>
                  )}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>

              {/* Status Messages */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity:
                    submissionStatus === "success" ||
                    submissionStatus === "error"
                      ? 1
                      : 0,
                  height:
                    submissionStatus === "success" ||
                    submissionStatus === "error"
                      ? "auto"
                      : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {submissionStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <div>
                      <p className="font-medium">Message sent successfully!</p>
                      <p className="text-sm">
                        I&apos;ll get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                )}
                {submissionStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 flex items-center gap-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">!</span>
                    </div>
                    <div>
                      <p className="font-medium">Something went wrong</p>
                      <p className="text-sm">
                        Please try again or contact me directly via email.
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            </form>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
