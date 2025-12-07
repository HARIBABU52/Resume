import HeroSection from '../components/HeroSection';
import TemplatesShowcase from '../components/TemplatesShowcase';
import HowItWorksSection from '../components/HowItWorksSection';
import ResumeExamplesSection from '../components/ResumeExamplesSection';
import WhyUseBuilderSection from '../components/WhyUseBuilderSection';
import AiExperienceSection from '../components/AiExperienceSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TemplatesShowcase />
      <HowItWorksSection />
      <ResumeExamplesSection />
      <AiExperienceSection />
      <WhyUseBuilderSection />
      <FaqSection />
      <Footer />
    </>
  )
}
