import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background border-t border-black py-8 hard-shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <p className="text-secondary text-sm mb-4 md:mb-0">
            © 2025 Adham Mustafa
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/adhoomy"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black px-3 py-1 text-sm text-foreground hover:bg-royal-blue hover:text-white transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm"
              aria-label="GitHub"
            >
              <Github size={16} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/adham-mustafa-"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-black px-3 py-1 text-sm text-foreground hover:bg-royal-blue hover:text-white transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
