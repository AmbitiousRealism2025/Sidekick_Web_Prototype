"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
// Removed: import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Sidekick AIR has revolutionized my mobile practice! It's so lightweight and easy to set up, yet incredibly stable. My clients love the comfort too.",
    name: "Dr. Alex Chen",
    title: "Chiropractor, FlexFit Mobile"
  },
  {
    quote: "As a therapist working at various sporting events, portability is key. The Sidekick AIR table is a game-changer. No more lugging heavy equipment!",
    name: "Sarah Miller, RMT",
    title: "Lead Sports Massage Therapist"
  },
  {
    quote: "I was skeptical about an inflatable table, but the Sidekick AIR's rigidity and professional feel are outstanding. Highly recommended for any on-the-go practitioner.",
    name: "John B. PTA",
    title: "Physical Therapist Assistant"
  },
  {
    quote: "The durability combined with the ease of transport makes Sidekick AIR an indispensable tool for my home visit physiotherapy sessions. My patients have noticed the upgrade!",
    name: "Dr. Emily Carter",
    title: "Mobile Physiotherapist"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          What Professionals Are Saying
        </h2>
        <Carousel 
          opts={{
            align: "start",
            loop: true, // Enable looping
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4"> {/* Show 1, 2 or 3 items */}
                <Card className="h-full flex flex-col justify-between shadow-lg bg-card"> {/* Added shadow and bg-card */}
                  <CardContent className="p-6 text-center flex flex-col flex-grow justify-between"> {/* Ensure content fills card */}
                    <div> {/* Wrapper for quote to separate from name/title for spacing */}
                      <p className="text-lg italic text-foreground/90 mb-6">&quot;{testimonial.quote}&quot;</p> {/* Increased bottom margin */}
                    </div>
                    <div>
                      <p className="font-semibold text-primary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" /> {/* Hide on xs screens */}
          <CarouselNext className="hidden sm:flex" /> {/* Hide on xs screens */}
        </Carousel>
      </div>
    </section>
  );
}
