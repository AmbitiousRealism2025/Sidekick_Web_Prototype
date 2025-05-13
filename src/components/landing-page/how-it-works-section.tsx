import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const inflatableTabletopFeatures = [
  "Woven PVC Drop-Stitch technology",
  "High-pressure rigidity like SUPs and kayaks",
  "Reduced weight and enhanced rigidity",
  "Collapses into a small carry bag"
];

const collapsibleFrameFeatures = [
  "Lightweight aluminum or carbon fiber",
  "Supports up to 2500 lbs",
  "Click/lock tab mechanism",
  "Interchangeable feet for all surfaces"
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">How It Works - Innovative Technology & Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Card className="bg-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">The Inflatable Tabletop</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/90">
                {inflatableTabletopFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>{feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-primary">The Collapsible Frame</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-foreground/90">
                {collapsibleFrameFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-primary">•</span>{feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="relative w-full max-w-4xl aspect-[5/2] rounded-lg shadow-md overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/tech-diagram/1000/400" 
              alt="Technical diagram of Sidekick Air's inflatable tabletop and collapsible frame" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="technical diagram"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
