"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterCategories = ["All", "Web", "Backend", "AI"];

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Frontend frameworks
    if (techLower.includes('react') || techLower.includes('next')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    if (techLower.includes('vue') || techLower.includes('angular')) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (techLower.includes('svelte')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    
    // Backend/APIs
    if (techLower.includes('node') || techLower.includes('express')) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (techLower.includes('python') || techLower.includes('django') || techLower.includes('flask')) return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
    if (techLower.includes('php') || techLower.includes('laravel')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    if (techLower.includes('java') || techLower.includes('spring')) return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    
    // Databases
    if (techLower.includes('postgres') || techLower.includes('postgresql')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    if (techLower.includes('mysql')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    if (techLower.includes('mongodb')) return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    if (techLower.includes('redis')) return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
    
    // AI/ML
    if (techLower.includes('openai') || techLower.includes('ai') || techLower.includes('ml')) return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
    if (techLower.includes('tensorflow') || techLower.includes('pytorch')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    
    // Cloud/DevOps
    if (techLower.includes('aws') || techLower.includes('vercel') || techLower.includes('netlify')) return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
    if (techLower.includes('docker') || techLower.includes('kubernetes')) return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
    
    // Styling
    if (techLower.includes('tailwind') || techLower.includes('css')) return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300';
    if (techLower.includes('sass') || techLower.includes('scss')) return 'bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300';
    
    // Default
    return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  } as const;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          All Projects
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          A complete collection of my software engineering work
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filterCategories.map((category) => {
          const getFilterColor = (cat: string) => {
            if (activeFilter !== cat) return "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600";
            
            switch (cat) {
              case "All": return "bg-gray-600 text-white shadow-lg";
              case "Web": return "bg-blue-600 text-white shadow-lg";
              case "Backend": return "bg-green-600 text-white shadow-lg";
              case "AI": return "bg-purple-600 text-white shadow-lg";
              default: return "bg-[#1034A6] text-white shadow-lg";
            }
          };

          return (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${getFilterColor(category)}`}
            >
              {category}
            </button>
          );
        })}
      </div>

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
            whileHover={{ scale: 1.02 }}
            className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-0"
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
              <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-sm text-[#555555] dark:text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`text-xs px-3 py-1 rounded-full ${getTechColor(tech)}`}
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
                  className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-orange-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#1034A6] text-white text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-[#0d2a85]"
                  whileHover={{ scale: 1.05 }}
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
        <div className="text-center py-12">
          <p className="text-lg text-secondary">
            No projects found for the selected filter.
          </p>
        </div>
      )}
    </div>
  );
}
