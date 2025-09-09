'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = window.localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  });
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync theme to <html> data-theme for CSS variables
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      const stored = window.localStorage.getItem('theme');
      if (!stored) {
        setTheme(media.matches ? 'dark' : 'light');
      }
    };
    media.addEventListener?.('change', handleChange);
    return () => media.removeEventListener?.('change', handleChange);
  }, [theme]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black ${
              isScrolled
                ? 'bg-background/95 backdrop-blur hard-shadow-sm'
                : 'bg-transparent'
            }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-royal-blue transition-colors diagonal-hover"
          >
            Adham Mustafa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <motion.button
                  key={link.href}
                  onClick={() => {
                    const url = new URL(link.href, window.location.origin);
                    if (url.pathname === window.location.pathname && url.hash) {
                      const el = document.querySelector(url.hash);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    } else {
                      window.location.href = link.href;
                    }
                  }}
                  className={`rounded-md border border-black px-3 py-1 text-sm font-medium transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm ${
                    isActive
                      ? 'bg-royal-blue text-white'
                      : 'text-foreground hover:bg-royal-blue hover:text-white'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.label}
                </motion.button>
              );
            })}

            {/* Theme toggle */}
            <motion.button
              aria-label="Toggle dark mode"
              className="ml-4 rounded-md border border-black px-3 py-1 text-sm text-foreground hover:bg-royal-blue hover:text-white transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              whileTap={{ scale: 0.95 }}
            >
              {!mounted ? (
                <Sun size={16} className="opacity-0" />
              ) : theme === 'dark' ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
              <span className="hidden sm:inline">{mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Dark'}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-royal-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-4 py-4 border-t border-gray-100"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <button
                    key={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const url = new URL(link.href, window.location.origin);
                      if (url.pathname === window.location.pathname && url.hash) {
                        const el = document.querySelector(url.hash);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      } else {
                        window.location.href = link.href;
                      }
                    }}
                    className={`rounded-md border border-black px-3 py-1 text-sm font-medium transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm ${
                      isActive
                        ? 'bg-royal-blue text-white'
                        : 'text-foreground hover:bg-royal-blue hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <button
                aria-label="Toggle dark mode"
                className="mt-2 w-max rounded-md border border-black px-3 py-1 text-sm text-foreground hover:bg-royal-blue hover:text-white transition-colors flex items-center gap-2 diagonal-hover hard-shadow-sm"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              >
                {!mounted ? (
                  <Sun size={16} className="opacity-0" />
                ) : theme === 'dark' ? (
                  <Sun size={16} />
                ) : (
                  <Moon size={16} />
                )}
                <span>{mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Dark'} Mode</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
