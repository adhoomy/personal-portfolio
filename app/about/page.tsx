"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { experience } from "@/data/experience";

export default function About() {
  const skills = {
    Languages: [
      { name: "Python", icon: "🐍" },
      { name: "C++", icon: "⚡" },
      { name: "HTML", icon: "🌐" },
      { name: "CSS", icon: "🎨" },
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Express", icon: "🚀" },
      { name: "Java", icon: "☕" },
    ],
    "Tools/Technologies": [
      { name: "Tkinter", icon: "🖥️" },
      { name: "Pandas", icon: "🐼" },
      { name: "GitHub", icon: "🐙" },
      { name: "Git", icon: "📦" },
      { name: "Firebase", icon: "🔥" },
      { name: "Next.js", icon: "▲" },
      { name: "Vercel", icon: "▲" },
      { name: "Bootstrap", icon: "🎨" },
      { name: "Tailwind", icon: "🎨" },
      { name: "MongoDB", icon: "🍃" },
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
    <div className="py-20">
      {/* About Me Section */}
      <section className="grid lg:grid-cols-2 gap-8 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h1>
          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-secondary">
              I'm a passionate software engineer with a focus on building modern web applications 
              and full-stack solutions. My journey spans from front-end development to full-stack 
              engineering, always driven by curiosity and a desire to create impactful digital experiences.
            </p>
            <p className="text-secondary">
              With experience in React, Next.js, Node.js, and MongoDB, I specialize in creating 
              responsive, scalable applications. I've worked on projects ranging from e-commerce 
              marketplaces to language learning platforms, always focusing on clean code and 
              user-centered design.
            </p>
            <p className="text-secondary">
              When I'm not coding, you'll find me exploring new technologies or working on 
              personal projects that challenge me to grow as a developer.
            </p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-80 h-80 rounded-2xl overflow-hidden hard-shadow-lg diagonal-hover">
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

      {/* Experience Timeline */}
      <section className="mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-2 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Experience Timeline
          </h2>
          <p className="text-lg text-secondary">
            My professional journey and key achievements
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 "></div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12"
            >
              {experience.map((role, index) => (
                <motion.div
                  key={role.id}
                  variants={cardVariants}
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
                    className="relative z-10 w-4 h-4 bg-royal-blue rounded-full border-4 border-background hard-shadow-sm"
                  ></motion.div>
                  
                  <div className="flex-1 bg-background border border-black rounded-lg p-6 hard-shadow-sm diagonal-hover hover:hard-shadow transition-all duration-200">
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
                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal-blue hover:text-white transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {experience.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
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
                
                <p className="text-secondary leading-relaxed">
                  {role.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {role.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full hover:bg-royal-blue hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Grid */}
      <section>
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-2 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-lg text-secondary">
            Tools and technologies I work with
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
      </section>
    </div>
  );
}
