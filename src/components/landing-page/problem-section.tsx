import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const problems = [
  "Therapists are bound by heavy, bulky, and unsteady traditional massage tables.",
  "Current options restrict ingenuity and portability.",
  "Physical strain from heavy tables, especially navigating stairs.",
  "Unstable or wobbly tables compromise treatment confidence and effectiveness.",
  "Durability issues like frame cracking, foam ruts, and upholstery tearing are common."
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">The Problem with Traditional Tables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <ul className="space-y-4 text-foreground/90">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start group">
                    <span className="mr-3 text-primary">•</span>
                    <span className="group-hover:text-primary transition-colors">{problem}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 aspect-[4/3]">
            <Image 
              src="https://picsum.photos/seed/table-struggle/800/600" 
              alt="Therapist struggling with a heavy traditional therapy table" 
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="heavy table"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
