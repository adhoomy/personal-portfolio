"use client";

export default function Contact() {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12 space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">Let’s Connect</h1>
          <p className="text-lg text-secondary">Feel free to reach out via email or socials.</p>
        </div>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:adham@example.com"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#1034A6] hover:bg-[#0d2a85] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Email
          </a>
          <a
            href="https://github.com/adham-mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adham-mustafa"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-semibold text-white bg-[#0A66C2] hover:bg-[#084a8a] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            LinkedIn
          </a>
        </div>

        {/* Optional Contact Form */}
        <form
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
          className="bg-background border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/40"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/40"
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
              className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900/40"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-[#1034A6] hover:bg-[#0d2a85] transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
