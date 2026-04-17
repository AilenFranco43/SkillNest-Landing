
declare global {
  interface Window {
    TestimonialsWidget: {
      init: (config: {
        containerId: string;
        apiUrl: string;
        widgetUrl: string;
        theme?: string;
        testimonials?: {
          limit?: string;
          mode?: 'grid' | 'carousel';
        };
      }) => void;
    };
    TestimonialWidget: {
      init: (config: {
        containerId: string;
        apiUrl: string;
        widgetUrl: string;
        theme?: string;
      }) => void;
    };
  }
}

import { HeroSection } from './sections/HeroSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { CoursesSection } from './sections/CoursesSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { CTASection } from './sections/CTASection';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <FeaturesSection />
      <CoursesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

