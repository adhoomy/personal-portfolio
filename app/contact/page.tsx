"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 space-y-3"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h1>
          <p className="text-lg text-secondary">Feel free to reach out via email or socials.</p>
        </motion.div>

        {/* Contact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <motion.a
            href="https://github.com/adhoomy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-orange-600 hover:bg-orange-500 transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow active:scale-95 border border-black"
            whileTap={{ scale: 0.95 }}
          >
            GitHub
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/adham-mustafa-"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#0A66C2] hover:bg-[#0077b5] transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow active:scale-95 border border-black"
            whileTap={{ scale: 0.95 }}
          >
            LinkedIn
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);
            // eslint-disable-next-line no-console
            console.log({
              name: formData.get('name'),
              email: formData.get('email'),
              message: formData.get('message'),
            });
            form.reset();
          }}
          className="bg-background border border-black rounded-xl p-6 hard-shadow-sm diagonal-hover hover:hard-shadow transition-all duration-200 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-black bg-white  px-4 py-2 focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-black bg-white  px-4 py-2 focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-200"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-black bg-white  px-4 py-3 focus:outline-none focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-200"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <motion.button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-royal-blue hover:bg-royal-blue-light transition-all duration-200 hard-shadow-sm diagonal-hover hover:hard-shadow active:scale-95 border border-black"
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
