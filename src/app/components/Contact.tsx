"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import { motion } from "framer-motion";

type SubmissionStatus = "idle" | "loading" | "success" | "error";

const socialLinks = [
  {
    icon: FaEnvelope,
    href: "mailto:kavin.balamurugan2k@gmail.com",
    label: "Email",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/vakbkavin/",
    label: "LinkedIn",
  },
  {
    icon: FaGithub,
    href: "https://github.com/kavin-dev-stack",
    label: "GitHub",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.message.trim() !== "";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmissionStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xrbypdbl", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmissionStatus("error");
      }
    } catch {
      setSubmissionStatus("error");
    }
  };

  return (
    <section
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
      className="relative isolate scroll-mt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 px-4 py-20 dark:from-gray-950 dark:via-gray-950 dark:to-purple-950 sm:px-6"
    >
      <div className="contact-dots" aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <span key={index} />)}
      </div>
      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-purple-800 dark:text-purple-300">
          Get in touch
        </p>
        <h2
          id="contact-heading"
          className="text-center text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white"
        >
          Let&apos;s talk engineering
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-2xl text-center leading-relaxed text-gray-700 dark:text-gray-300">
          For roles, collaborations, or questions about my work, send me a
          message or reach out through a professional profile.
        </p>

        <nav aria-label="Contact and professional profiles" className="mb-8">
          <ul className="flex flex-wrap justify-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => {
              const external = href.startsWith("https://");
              return (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="inline-flex min-h-12 min-w-12 items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-3 font-medium text-gray-900 shadow-sm transition hover:border-purple-400 hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-purple-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:border-purple-400 dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
                  >
                    <Icon aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="mx-auto max-w-2xl rounded-2xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur dark:border-gray-700 dark:bg-gray-900/90 sm:p-8"
        >
          <div className="mb-7 flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
              <FaPaperPlane aria-hidden="true" />
            </span>
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white sm:text-2xl">
              Send a message
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            aria-busy={submissionStatus === "loading"}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="min-h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-950 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:outline-purple-300"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="min-h-12 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-950 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:outline-purple-300"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help?"
                rows={5}
                required
                className="min-h-36 w-full resize-y rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-950 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:outline-purple-300"
              />
            </div>

            <button
              type="submit"
              disabled={submissionStatus === "loading" || !isFormValid}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:from-purple-700 hover:to-indigo-700 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:from-gray-400 disabled:to-gray-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-800 dark:focus-visible:outline-purple-200"
            >
              <FaPaperPlane aria-hidden="true" />
              {submissionStatus === "loading" ? "Sending…" : "Send message"}
            </button>

            <div
              aria-live="polite"
              aria-atomic="true"
              className="min-h-6"
            >
              {submissionStatus === "success" && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-900 dark:bg-green-950/70 dark:text-green-200">
                  Message sent successfully. Thank you for reaching out.
                </p>
              )}
              {submissionStatus === "error" && (
                <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-900 dark:bg-red-950/70 dark:text-red-200">
                  The message could not be sent. Please try again or email me
                  directly.
                </p>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
