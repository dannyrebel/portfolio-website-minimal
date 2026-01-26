// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import portfolioImage1 from "../../assets/portfolio1.png";
import portfolioImage2 from "../../assets/autoaurathumbnail.png";

const portfolioProjects = [
  {
    id: 1,
    title: "This website",
    description:
      "A modern portfolio website built with React, Vite, and Tailwind CSS. Framer motion animations, responsive design, CI/CD through Cloudflare.",
    image: portfolioImage1,
    liveUrl: "https://danieldanchev.com",
    githubUrl:
      "https://github.com/dannyrebel/portfolio-website-minimal/tree/main/portfolio-minimal",
    tags: ["React", "Tailwind CSS", "Vite", "Framer motion"],
  },
  {
    id: 2,
    title: "AutoAura Car Detailing",
    description:
      "Car detailing service built with React, Vite and Tailwind CSS. Framer motion animations, responsive design, CI/CD through Github Actions.",
    image: portfolioImage2,
    liveUrl: "https://autoaura.bg/",
    githubUrl: "https://github.com/dannyrebel/autoaura-car-detailing",
    tags: [
      "React",
      "Tailwind CSS",
      "Vite",
      "Framer motion",
      "Github Actions",
      "Github Pages",
    ],
  },
  {
    id: 3,
    title: "Project Coming Soon",
    description: "Exciting new project in development. Check back soon!",
    image: null,
    liveUrl: null,
    githubUrl: null,
    tags: ["TBA"],
  },
];

export default function PortfolioCards() {
  const handleLiveClick = (url) => {
    window.open(url, "_blank");
  };

  const handleRepoClick = (url) => {
    window.open(url, "_blank");
  };

  // Animation variants
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

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-4xl font-bold text-slate-200 mb-4 font-jetbrains-mono">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of projects I've worked on, showcasing my skills in web
            development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-lime-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-lime-400/10"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-slate-900/50 overflow-hidden">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-contain"
                    whileHover={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-slate-600">
                      <svg
                        className="w-16 h-16"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 px-8 pt-4">
                {project.liveUrl && (
                  <motion.button
                    onClick={() => handleLiveClick(project.liveUrl)}
                    className="flex-1 text-center bg-lime-400 text-slate-900 py-1.5 rounded-lg font-medium hover:bg-lime-300 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.button>
                )}
                {project.githubUrl && (
                  <motion.button
                    onClick={() => handleRepoClick(project.githubUrl)}
                    className="flex-1 text-center bg-slate-700 text-slate-200 py-1.5 rounded-lg font-medium hover:bg-slate-600 transition-colors text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Repository
                  </motion.button>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-200 mb-2 font-jetbrains-mono">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      className="text-xs px-3 py-1 bg-slate-700/50 text-lime-400 rounded-full border border-slate-600/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
