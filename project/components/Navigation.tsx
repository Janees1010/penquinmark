'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Testimonials' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand Name */}
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-brand-primary' : 'text-white'
              }`}
            >
              Penquinmark
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-300 hover:text-brand-highlight ${
                  isScrolled ? 'text-brand-primary' : 'text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            {/* Amazon Badge - Desktop */}
            <div className="flex items-center space-x-2">
              <Image
                src="/amazon-logo.png"
                alt="Amazon logo"
                width={20}
                height={20}
                className="grayscale opacity-80"
              />
              <span
                className={`text-xs font-semibold ${
                  isScrolled ? 'text-brand-primary' : 'text-white'
                }`}
              >
                Authorized Amazon Partner
              </span>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors duration-300 ${
                isScrolled
                  ? 'text-brand-primary hover:text-brand-highlight'
                  : 'text-white hover:text-brand-highlight'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-brand-primary hover:text-brand-highlight hover:bg-brand-background/50 rounded-md transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}

            {/* Amazon Badge - Mobile */}
            <div className="flex items-center justify-end space-x-2 px-3 pt-2">
              <Image
                src="/amazon-logo.png"
                alt="Amazon logo"
                width={18}
                height={18}
                className="grayscale opacity-80"
              />
              <span className="text-xs  font-semibold text-brand-primary">
                Authorized Amazon Partner
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
