import Header from '@/components/landing-page/header';
import HeroSection from '@/components/landing-page/hero-section';
import { motion } from 'framer-motion';
import ProblemSection from '@/components/landing-page/problem-section';
import SolutionSection from '@/components/landing-page/solution-section';
import HowItWorksSection from '@/components/landing-page/how-it-works-section';
import FeaturesSection from '@/components/landing-page/features-section';
import TestimonialsSection from '@/components/landing-page/testimonials-section'; // Import TestimonialsSection
import CtaSection from '@/components/landing-page/cta-section';
import Footer from '@/components/landing-page/footer';


const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ProblemSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <SolutionSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HowItWorksSection />
        </motion.div>
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeaturesSection />
        </motion.div>
        <motion.div // Wrap TestimonialsSection with motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <TestimonialsSection />
        </motion.div>
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
