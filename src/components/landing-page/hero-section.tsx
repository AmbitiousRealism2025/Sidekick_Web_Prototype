import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  // Client-side scroll initiation for the button
  const handleScrollToProblem = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const problemSection = document.getElementById('problem');
    if (problemSection) {
      problemSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-primary/10 px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image 
          src="https://picsum.photos/seed/hero-bg/1920/1080" 
          alt="Abstract background texture" 
          layout="fill" 
          objectFit="cover" 
          priority
          data-ai-hint="abstract texture"
        />
      </div>
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6 transform transition-transform duration-500 hover:scale-105">
          Sidekick AIR: The Future of Portable Therapy Tables
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8">Designed for Everything you Knead!</p>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          The revolutionary inflatable therapy table that combines extreme portability with professional-grade stability and durability.
        </p>
        <Button 
          size="lg"
          onClick={(e) => {
            // Prevent default if it's an anchor, then scroll
            e.preventDefault();
            const problemSection = document.getElementById('problem');
            if (problemSection) {
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
      </div>
    </section>
  );
}
