import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import PainPointsSection from './components/sections/PainPointsSection';
import IntroSection from './components/sections/IntroSection';
import ProductShowcaseSection from './components/sections/ProductShowcaseSection';
import ServicesSection from './components/sections/ServicesSection';
import WorkflowSection from './components/sections/WorkflowSection';
import PartnerMarketSection from './components/sections/PartnerMarketSection';
import WhyChooseSection from './components/sections/WhyChooseSection';
import CaseStudySection from './components/sections/CaseStudySection';
import ConsultationSection from './components/sections/ConsultationSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import FloatingContact from './components/common/FloatingContact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PainPointsSection />
        <IntroSection />
        <ProductShowcaseSection />
        <ServicesSection />
        <WorkflowSection />
        <PartnerMarketSection />
        <WhyChooseSection />
        <CaseStudySection />
        <ConsultationSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}

export default App;
