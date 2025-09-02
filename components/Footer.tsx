import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © 2025 Adham Mustafa
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-blue-600 hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/adham-mustafa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-blue-600 hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
