import Header from '@/components/landing-page/header';
import HeroSection from '@/components/landing-page/hero-section';
import ProblemSection from '@/components/landing-page/problem-section';
import SolutionSection from '@/components/landing-page/solution-section';
import HowItWorksSection from '@/components/landing-page/how-it-works-section';
import FeaturesSection from '@/components/landing-page/features-section';
import CtaSection from '@/components/landing-page/cta-section';
import Footer from '@/components/landing-page/footer';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
