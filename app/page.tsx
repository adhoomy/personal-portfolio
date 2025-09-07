"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";
import { experience } from "@/data/experience";

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);

  const skills = {
    Languages: [
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "Java", icon: "☕" },
      { name: "TypeScript", icon: "📘" },
      { name: "JavaScript", icon: "🟨" },
    ],
    Frameworks: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "Tailwind", icon: "🎨" },
      { name: "Node.js", icon: "🟢" },
    ],
    Tools: [
      { name: "Git", icon: "📦" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💻" },
    ],
    Cloud: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔵" },
      { name: "Vercel", icon: "▲" },
    ],
  };

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
      {/* HERO SECTION */}
      <section className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-6">
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
              className="text-lg md:text-xl text-secondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              I design and build modern web applications with clean, scalable code.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
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

      {/* EXPERIENCE SECTION */}
      <section className="pt-12 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <p className="text-lg text-secondary">
              Internships, work, and research roles
            </p>
          </motion.div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              
              <div className="space-y-12">
                {experience.map((role, index) => (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: "easeOut" 
                    }}
                    className="relative flex items-start space-x-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.2,
                        ease: "easeOut" 
                      }}
                      className="relative z-10 w-4 h-4 bg-foreground rounded-full border-4 border-background shadow-lg"
                    ></motion.div>
                    
                    <div className="flex-1 bg-background border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {role.role}
                          </h3>
                          <p className="text-lg font-medium text-foreground">
                            {role.company}
                          </p>
                          <p className="text-sm text-secondary">
                            {role.dates}
                          </p>
                        </div>
                        
                        <p className="text-secondary leading-relaxed">
                          {role.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {role.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {experience.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                className="bg-background border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">
                      {role.role}
                    </h3>
                    <p className="text-base font-medium text-foreground">
                      {role.company}
                    </p>
                    <p className="text-sm text-secondary">
                      {role.dates}
                    </p>
                  </div>
                  
                  <p className="text-secondary leading-relaxed">
                    {role.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {role.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Projects
            </h2>
            <p className="text-lg text-secondary">
              A selection of my best work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featured.map((proj) => (
              <motion.article
                key={proj.id}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden bg-background border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300"
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
                  <h3 className="font-semibold text-xl text-foreground mb-3">{proj.title}</h3>
                  <p className="text-sm text-secondary line-clamp-2 mb-4 leading-relaxed">{proj.description}</p>

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

      {/* SKILLS SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Skills
            </h2>
            <p className="text-lg text-secondary">
              Technologies and tools I work with
            </p>
          </motion.div>
          
          <div className="grid gap-8">
            {Object.entries(skills).map(([category, items], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: categoryIndex * 0.1,
                  ease: "easeOut" 
                }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        ease: "easeOut" 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className="group flex flex-col items-center p-4 rounded-lg bg-background border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-pointer"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
