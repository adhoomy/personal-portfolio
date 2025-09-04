"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);

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
              className="px-6 py-3 rounded-xl bg-gray-800 dark:bg-gray-700 text-white font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-gray-900 dark:hover:bg-gray-600 active:scale-95"
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
                className="rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800 shadow-sm hover:shadow-lg transition-shadow"
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
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{proj.title}</h3>
                  <p className="text-sm text-secondary line-clamp-2 mb-4">{proj.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-200/70 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
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
                      className="px-4 py-2 rounded-xl bg-gray-800 dark:bg-gray-700 text-white text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-gray-900 dark:hover:bg-gray-600 active:scale-95"
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
