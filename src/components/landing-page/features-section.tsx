import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Anchor, Accessibility, Puzzle, Zap, Truck } from 'lucide-react';

const features = [
  { title: "Portable & Lightweight", desc: "Weighs less than 30 lbs, fits in a small travel bag.", dataAiHint: "lightweight design", icon: Briefcase },
  { title: "Superior Stability", desc: "Supports over 600 lbs with rigid drop-stitch construction.", dataAiHint: "stable sturdy", icon: Anchor },
  { title: "Ergonomic Design", desc: "Adjustable height and contoured shape for therapist access.", dataAiHint: "ergonomic comfort", icon: Accessibility },
  { title: "Versatile Add-ons", desc: "D-rings, Velcro, face cradle, and modular attachments.", dataAiHint: "modular accessories", icon: Puzzle },
  { title: "Rapid Setup", desc: "Inflates and folds in minutes with minimal effort.", dataAiHint: "quick setup", icon: Zap },
  { title: "Professional Transport", desc: "Rolling case with optional electric pump and Bluetooth speaker.", dataAiHint: "travel case", icon: Truck },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // Stagger the animation for each card
      duration: 0.5,
    },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Key Features & Professional Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card 
                className="bg-card hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1 hover:scale-103 duration-300 h-full flex flex-col border-2 border-transparent hover:border-accent focus:border-accent focus:outline-none"
                data-ai-hint={feature.dataAiHint}
              >
                <CardHeader className="items-center text-center"> {/* Centering header content */}
                  <feature.icon className="w-12 h-12 text-accent mb-3" />
                  <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow"> {/* Ensure content takes available space if needed */}
                  <p className="text-muted-foreground text-center">{feature.desc}</p> {/* Centered description */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
