'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-black ${
              isScrolled
                ? 'bg-background/95 backdrop-blur hard-shadow-sm'
                : 'bg-transparent'
            }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-stretch justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-semibold text-foreground hover:text-royal-blue transition-colors diagonal-hover flex items-center"
          >
            Adham Mustafa
          </Link>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden md:flex items-stretch">
            {/* Navigation Links */}
            <div className="flex items-stretch">
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
                  className={`px-4 text-sm font-medium transition-colors flex items-center gap-2 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-foreground hover:bg-royal-blue hover:text-white'
                  }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.label}
                  </motion.button>
                );
              })}
            </div>

          </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden px-4 text-foreground hover:text-royal-blue transition-colors flex items-center"
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
                  <div className="flex flex-col">
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
                    className={`px-3 py-1 text-sm font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-foreground hover:bg-royal-blue hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
