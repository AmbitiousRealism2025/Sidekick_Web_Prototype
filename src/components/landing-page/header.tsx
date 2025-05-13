"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'The Problem', id: 'problem' },
  { label: 'Solution', id: 'solution' },
  { label: 'How It Works', id: 'how-it-works' },
  { label: 'Features', id: 'features' },
  { label: 'Stay Updated', id: 'cta' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false); // Close mobile menu after click
  };

  if (!isMounted) {
    return null; // Avoid hydration mismatch for menuOpen state
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div
          className="text-xl font-bold text-primary cursor-pointer"
          onClick={() => scrollToSection('hero')}
          aria-label="Sidekick AIR Home"
        >
          Sidekick AIR
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <nav className="md:hidden bg-background border-t border-border px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left justify-start text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Button>
          ))}
        </nav>
      )}
    </header>
  );
}
