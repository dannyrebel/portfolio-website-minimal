import { motion } from "framer-motion";
import AboutText from "./AboutText";
import AboutSkills from "./AboutSkills";
import Courses from "./Courses";

export default function AboutSection({ slidesCertificate }) {
  // Animation variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 px-6" id="about">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-slate-200 mb-12 font-jetbrains-mono"
        >
          About Me
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* About Text Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300"
          >
            <AboutText />
          </motion.div>

          {/* Skills Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300"
          >
            <AboutSkills />
          </motion.div>

          {/* Courses Card - Full Width */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-3 bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-lime-400/30 transition-all duration-300"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl font-bold text-center text-slate-200 mb-12 font-jetbrains-mono"
            >
              Courses & Certificates
            </motion.h2>
            <Courses>
              {slidesCertificate.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  alt={`Slide ${index}`}
                  className="rounded-lg"
                />
              ))}
            </Courses>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
