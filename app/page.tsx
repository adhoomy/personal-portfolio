"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
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
    </div>
  );
}
