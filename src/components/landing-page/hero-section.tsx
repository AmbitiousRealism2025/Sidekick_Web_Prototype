"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Set initial values
      window.addEventListener('resize', handleResize);
    }
    
    setIsMounted(true); 

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Define rotateX and rotateY using useTransform.
  // Fallback to default values if window dimensions are not yet available or are zero.
  const rotateX_sensitivity = 5;
  const rotateY_sensitivity = 5;

  const currentWindowHeight = windowHeight || 1080; // Default to 1080 if 0
  const currentWindowWidth = windowWidth || 1920;   // Default to 1920 if 0
  
  const rotateX = useTransform(
    y,
    [-currentWindowHeight / 2, currentWindowHeight / 2],
    [rotateX_sensitivity, -rotateX_sensitivity]
  );

  const rotateY = useTransform(
    x,
    [-currentWindowWidth / 2, currentWindowWidth / 2],
    [-rotateY_sensitivity, rotateY_sensitivity]
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // isMounted check is technically not needed here if x/y are always valid MotionValues
    // but doesn't hurt. The main guard is for rotateX/Y in the style prop.
    const rect = event.currentTarget.getBoundingClientRect();
    const elementX = event.clientX - rect.left;
    const elementY = event.clientY - rect.top;
    x.set(elementX - rect.width / 2);
    y.set(elementY - rect.height / 2);
  };

  const handleMouseLeave = () => {
    // isMounted check is technically not needed here if x/y are always valid MotionValues
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gradient-blue/15 to-primary/15 px-6 py-20 relative overflow-hidden"
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
        style={{
          perspective: 1000,
          // Guard against applying rotation if dimensions aren't set, to prevent initial weird state
          rotateX: isMounted && windowWidth > 0 && windowHeight > 0 ? rotateX : 0,
          rotateY: isMounted && windowWidth > 0 && windowHeight > 0 ? rotateY : 0,
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
          className="bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:brightness-105"
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
