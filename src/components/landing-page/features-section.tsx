import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  { title: "Portable & Lightweight", desc: "Weighs less than 30 lbs, fits in a small travel bag.", dataAiHint: "lightweight design" },
  { title: "Superior Stability", desc: "Supports over 600 lbs with rigid drop-stitch construction.", dataAiHint: "stable sturdy" },
  { title: "Ergonomic Design", desc: "Adjustable height and contoured shape for therapist access.", dataAiHint: "ergonomic comfort" },
  { title: "Versatile Add-ons", desc: "D-rings, Velcro, face cradle, and modular attachments.", dataAiHint: "modular accessories" },
  { title: "Rapid Setup", desc: "Inflates and folds in minutes with minimal effort.", dataAiHint: "quick setup" },
  { title: "Professional Transport", desc: "Rolling case with optional electric pump and Bluetooth speaker.", dataAiHint: "travel case" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Key Features & Professional Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card 
              key={i} 
              className="bg-card hover:shadow-xl transition-shadow cursor-pointer transform hover:-translate-y-1 duration-300"
              data-ai-hint={feature.dataAiHint}
            >
              <CardHeader>
                <CardTitle className="text-xl text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
