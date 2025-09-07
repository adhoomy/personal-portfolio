"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/data/experience";

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

export default function About() {
  return (
    <div className="py-12 space-y-20">
      {/* About Me Section */}
      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
      </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-secondary">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/profile.svg"
              alt="Profile picture"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        className="space-y-12"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience
          </h2>
          <p className="text-lg text-secondary">
            Internships, work, and research roles
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
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
                  {/* Timeline dot */}
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
                  
                  {/* Content */}
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
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">
          Skills
        </h2>
        
        <div className="grid gap-8">
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.8 + categoryIndex * 0.1,
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
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 1.0 + categoryIndex * 0.1 + skillIndex * 0.05,
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
      </motion.section>
    </div>
  );
}
