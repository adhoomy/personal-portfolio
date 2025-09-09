"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Web", "Backend", "AI"];

  const getTechColor = (tech: string) => {
    return 'px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal-blue hover:text-white transition-colors duration-200';
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.tech.some((tech) =>
      tech.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, x: -20, y: 20 },
    show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          All Projects
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          A complete collection of my software engineering work
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {filterCategories.map((category) => {
          const getFilterColor = (cat: string) => {
            if (activeFilter !== cat) return "text-foreground hover:bg-royal-blue hover:text-white";
            
            switch (cat) {
              case "All": return "bg-royal-blue text-white";
              case "Web": return "bg-royal-blue text-white";
              case "Backend": return "bg-royal-blue text-white";
              case "AI": return "bg-royal-blue text-white";
              default: return "bg-royal-blue text-white";
            }
          };

          return (
            <motion.button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-md border border-black px-3 py-1 text-sm font-medium transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm ${getFilterColor(category)}`}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project) => (
          <motion.article
            key={project.id}
            variants={cardVariants}
            className="rounded-xl overflow-hidden bg-background border border-black hard-shadow-sm diagonal-hover hover:hard-shadow transition-all duration-200"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-xl text-foreground mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-secondary mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full ${getTechColor(tech)} hover:bg-royal-blue hover:text-white transition-colors duration-200`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow hover:bg-orange-500 border border-black"
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-royal-blue text-white text-sm font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow hover:bg-royal-blue-light border border-black"
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <p className="text-lg text-secondary">
            No projects found for the selected filter.
          </p>
        </motion.div>
      )}
    </div>
  );
}
