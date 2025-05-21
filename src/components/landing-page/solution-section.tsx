import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Introducing Sidekick Air - The Breakthrough Solution</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-foreground/90 mb-8">
            Sidekick AIR is a breakthrough in portable therapeutic equipment. It uniquely integrates an inflatable tabletop with a collapsible support frame.
          </p>
          <p className="text-muted-foreground mb-10">
            This design eliminates significant weight and size compared to traditional tables while maintaining or exceeding current performance standards for sturdiness and reliability.
          </p>
          <Card className="overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl">
            <CardContent className="p-0 aspect-[2/1]">
              <Image 
                src="https://picsum.photos/seed/sidekickair-solution/800/400" 
                alt="Sidekick Air therapy table setup demonstrating portability and stability"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                data-ai-hint="portable table"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
