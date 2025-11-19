"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [openModal, setOpenModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_piwkaoh",
        "template_m53b1vz",
        formData,
        "JOTMIUxaYKddTAfz4"
      );

      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setOpenModal(false);
    } catch {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>

        <p className="text-lg text-foreground/70 mb-8">
          I'm always open to opportunities, collaborations, and interesting
          conversations.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <a
            href="https://linkedin.com/in/krishnendu-sahoo"
            target="_blank"
            className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 hover:scale-110 transition"
          >
            Email
          </a>

          <a
            href="https://linkedin.com/in/krishnendu-sahoo"
            target="_blank"
            className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 hover:scale-110 transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/iKrishnendu"
            target="_blank"
            className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500/10 hover:scale-110 transition"
          >
            GitHub
          </a>
        </div>

        {/* Divider 1 */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-border/40" />
          <span className="text-sm text-foreground/50">OR</span>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        {/* Button to open popup */}
        <button
          onClick={() => setOpenModal(true)}
          className="px-8 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 hover:scale-110 transition"
        >
          Open Contact Form
        </button>

        {/* Divider 2 */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px bg-border/40" />
          <span className="text-sm text-foreground/50">OR</span>
          <div className="flex-1 h-px bg-border/40" />
        </div>

        {/* Contact info */}
        <p className="text-sm text-foreground/60 mb-1">📞 +91 8927488186</p>
        <p className="text-sm text-foreground/60">📍 Kolkata, India</p>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setOpenModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 40 }}
              transition={{ duration: 0.2 }}
              className="bg-background border border-border/40 rounded-xl shadow-xl p-6 w-full max-w-md"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Send me a message</h3>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-foreground/60 hover:text-foreground text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background focus:border-orange-500 outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background focus:border-orange-500 outline-none"
                  required
                />

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border/40 bg-background focus:border-orange-500 outline-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
