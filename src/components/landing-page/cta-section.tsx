"use client";

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function CtaSection() {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic email validation
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    toast({
      title: "Subscription Successful!",
      description: `Thank you for signing up. We'll keep you updated on ${email}.`,
    });
    setEmail(''); // Reset email input
  };

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-primary to-gradient-purple text-primary-foreground">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Be the First to Know When Sidekick AIR Launches</h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto text-primary-foreground/90">
          Sign up for exclusive updates on product development, features, and launch plans.
        </p>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-6 py-4 rounded-full focus:outline-none text-foreground bg-background"
            required
            aria-label="Email for updates"
          />
          <Button
            type="submit"
            size="lg"
            className="px-8 py-4 bg-background text-primary rounded-full font-semibold shadow-lg hover:bg-background/90 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
          >
            Sign Up for Updates
          </Button>
        </form>
        <p className="mt-6 text-sm opacity-90 text-primary-foreground/80">Join the movement toward truly portable, professional therapy equipment.</p>
      </div>
    </section>
  );
}
