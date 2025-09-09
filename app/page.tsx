"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { projects as allProjects } from "@/data/projects";
import { experience } from "@/data/experience";

export default function Home() {
  const featured = allProjects.filter((p) => p.featured);
  const keyExperience = experience.slice(0, 3); // Top 3 key roles

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
    <div>
      {/* HERO SECTION */}
      <section id="hero" className="min-h-[calc(100vh-64px)] md:min-h-[calc(100vh-80px)] flex items-center justify-center scroll-mt-24">
        <div className="text-center max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <motion.h1
              className="text-2xl md:text-4xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ }}
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
              className="px-6 py-3 rounded-xl bg-royal-blue text-white font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow hover:bg-royal-blue-light active:scale-95 border border-black"
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
            <motion.a
              href="https://github.com/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-orange-600 text-white font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow hover:bg-orange-500 active:scale-95 border border-black"
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#0A66C2] text-white font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow hover:bg-[#0077b5] active:scale-95 border border-black"
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center space-y-2 mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Experience
            </h2>
            <p className="text-lg text-secondary">
              Key roles and achievements
            </p>
          </motion.div>

          {/* Condensed Experience Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {keyExperience.map((role, index) => (
              <motion.div
                key={role.id}
                variants={cardVariants}
                className="bg-background border border-black rounded-lg p-6 hard-shadow-sm diagonal-hover hover:hard-shadow transition-all duration-200"
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
                  
                  <p className="text-secondary leading-relaxed text-sm">
                    {role.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {role.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal-blue hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                    {role.tech.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-secondary">
                        +{role.tech.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PROJECTS SECTION */}
      <section id="featured" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                className="rounded-xl overflow-hidden bg-background border border-black hard-shadow-sm diagonal-hover hover:hard-shadow transition-all duration-200"
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
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal-blue hover:text-white transition-colors duration-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-orange-600 text-white text-sm font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:bg-orange-500 active:scale-95 border border-black"
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub
                    </motion.a>
                    <motion.a
                      href={proj.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-royal-blue text-white text-sm font-medium transition-all duration-200 hard-shadow-sm diagonal-hover hover:bg-royal-blue-light active:scale-95 border border-black"
                      whileTap={{ scale: 0.95 }}
                    >
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-20 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
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
                      className="group flex flex-col items-center p-4 rounded-lg bg-background border border-black hover:border-royal-blue hover:bg-royal-blue hover:text-white transition-all duration-200 cursor-pointer hard-shadow-sm diagonal-hover hover:hard-shadow"
                    >
                      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium transition-colors duration-200">
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
