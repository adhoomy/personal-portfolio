"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } as const;

  return (
    <div>
      {/* HERO: full viewport minus fixed navbar */}
      <section className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* Hero Text with Animation */}
          <div className="mb-12">
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Adham Mustafa – Software Engineer
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-[#555555] dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I design and build modern web applications with clean, scalable code.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#1034A6] text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-[#0d2a85] active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>

            {/* GitHub Button */}
            <motion.a
              href="https://github.com/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-orange-600 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-orange-700 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>

            {/* LinkedIn Button */}
            <motion.a
              href="https://linkedin.com/in/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0A66C2] text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-[#084a8a] active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mt-20 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-sm md:text-base text-secondary">A selection of my best work</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          >
            {featured.map((proj) => (
              <motion.article
                key={proj.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden bg-white dark:bg-neutral-900 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-0"
              >
                <div className="relative w-full h-44">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl text-gray-900 dark:text-white mb-3">{proj.title}</h3>
                  <p className="text-sm text-[#555555] dark:text-gray-300 line-clamp-2 mb-4 leading-relaxed">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                            className={`text-xs px-2.5 py-1 rounded-full ${getTechColor(t)}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-orange-700 active:scale-95"
                    >
                      GitHub
                    </a>
                    <a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-[#1034A6] text-white text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-[#0d2a85] active:scale-95"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
