"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMotionValue, useTransform, motion, MotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [isMounted, setIsMounted] = useState(false);
  // Initialize input ranges with placeholder values
  const [inputRangeX, setInputRangeX] = useState([-100, 100]);
  const [inputRangeY, setInputRangeY] = useState([-100, 100]);

  useEffect(() => {
    setIsMounted(true);
    // Update input ranges once window object is available
    if (typeof window !== "undefined") {
      setInputRangeX([-window.innerWidth / 2, window.innerWidth / 2]);
      setInputRangeY([-window.innerHeight / 2, window.innerHeight / 2]);
    }
  }, []); // Empty dependency array ensures this runs once on mount

  // Define transforms at the top level using state-managed input ranges
  const rotateX = useTransform(y, inputRangeY, [10, -10]);
  const rotateY = useTransform(x, inputRangeX, [-10, 10]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMounted) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const elementX = event.clientX - rect.left;
    const elementY = event.clientY - rect.top;
    x.set(elementX - rect.width / 2);
    y.set(elementY - rect.height / 2);
  };

  const handleMouseLeave = () => {
    if (!isMounted) return;
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-primary/10 px-6 py-20 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://picsum.photos/seed/hero-bg/1920/1080"
          alt="Abstract background texture"
          fill
          objectFit="cover"
          priority
          data-ai-hint="abstract texture"
        />
      </div>
      <motion.div
        // Apply rotations directly; they are MotionValues.
        // Conditionally apply if initial placeholder ranges cause visual issues,
        // but direct application is often fine as ranges update quickly.
        style={{
          perspective: 1000,
          ...(isMounted ? { rotateX, rotateY } : {}) // Apply rotations only when mounted and ranges are set
        }}
        className="max-w-4xl mx-auto text-center z-10 p-8 rounded-xl bg-background/10 backdrop-blur-sm shadow-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
          Sidekick AIR: The Future of Portable Therapy Tables
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">Designed for Everything you Knead!</p>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          The revolutionary inflatable therapy table that combines extreme portability with professional-grade stability and durability.
        </p>
        <Button
          size="lg"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const problemSection = document.getElementById('problem');
            if (problemSection) {
              // Check if it's an anchor to prevent default, otherwise let button behave normally
              if ((e.target as HTMLElement).closest('a')) {
                e.preventDefault();
              }
              problemSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          asChild
        >
          <a href="#problem">
            Learn More / Explore Sidekick AIR
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
