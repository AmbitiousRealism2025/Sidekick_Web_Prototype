import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Layers, Gauge, Scaling, Minimize2, Feather, WeightIcon, Lock, Replace } from 'lucide-react';

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
        
        <Tabs defaultValue="tabletop" className="w-full max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="tabletop">Inflatable Tabletop</TabsTrigger>
            <TabsTrigger value="frame">Collapsible Frame</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tabletop">
            <Card className="bg-primary/5 mt-4"> {/* Added mt-4 for spacing from TabsList */}
              <CardHeader>
                <CardTitle className="text-xl text-accent">The Inflatable Tabletop</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground/90">
                  {inflatableTabletopFeatures.map((feature, index) => {
                    let Icon;
                    if (index === 0) Icon = Layers;
                    else if (index === 1) Icon = Gauge;
                    else if (index === 2) Icon = Scaling;
                    else Icon = Minimize2;
                    return (
                      <li key={index} className="flex items-start">
                        <Icon className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="frame">
            <Card className="bg-primary/5 mt-4"> {/* Added mt-4 for spacing from TabsList */}
              <CardHeader>
                <CardTitle className="text-xl text-accent">The Collapsible Frame</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-foreground/90">
                  {collapsibleFrameFeatures.map((feature, index) => {
                    let Icon;
                    if (index === 0) Icon = Feather;
                    else if (index === 1) Icon = WeightIcon;
                    else if (index === 2) Icon = Lock;
                    else Icon = Replace;
                    return (
                      <li key={index} className="flex items-start">
                        <Icon className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

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
