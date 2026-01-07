import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_kyp0kfm",
        "template_pq55qqq",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "elSORHa2gCMSJ6LeI"
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-slate-200 mb-4 font-jetbrains-mono"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-slate-400 text-lg mb-12 max-w-2xl mx-auto font-jetbrains-mono"
        >
          Have a project in mind or just want to chat? Drop me a message and
          I'll get back to you soon.
        </motion.p>
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name */}
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            whileFocus={{ scale: 1.01 }}
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white"
          />

          {/* Email */}
          <motion.input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            required
            whileFocus={{ scale: 1.01 }}
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white"
          />

          {/* Message */}
          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            rows="5"
            required
            whileFocus={{ scale: 1.01 }}
            className="w-full p-4 bg-transparent border border-slate-700 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-lime-400 text-white resize-none"
          />

          {/* Status Messages */}
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-lime-400/10 border border-lime-400 rounded-lg text-lime-400"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-400/10 border border-red-400 rounded-lg text-red-400"
            >
              Failed to send message. Please try again.
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: loading ? 1 : 1.02 }}
            whileTap={{ scale: loading ? 1 : 0.98 }}
            className="w-full p-4 bg-lime-400 text-slate-900 rounded-lg 
                       hover:bg-lime-500 transition-all duration-300 font-semibold font-jetbrains-mono
                       disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
