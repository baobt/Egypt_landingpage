import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import PainPointsSection from './components/sections/PainPointsSection';
import IntroSection from './components/sections/IntroSection';
import ProductShowcaseSection from './components/sections/ProductShowcaseSection';
import MediaGallerySection from './components/sections/MediaGallerySection';
import ServicesSection from './components/sections/ServicesSection';
import WorkflowSection from './components/sections/WorkflowSection';
import PartnerMarketSection from './components/sections/PartnerMarketSection';
import WhyChooseSection from './components/sections/WhyChooseSection';
import CaseStudySection from './components/sections/CaseStudySection';
import ConsultationSection from './components/sections/ConsultationSection';
import FinalCtaSection from './components/sections/FinalCtaSection';
import FloatingContact from './components/common/FloatingContact';
import Footer from './components/layout/Footer';
import { i18n } from './data/content';

function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('site_lang') || 'vi');

  useEffect(() => {
    const safeLang = lang === 'en' ? 'en' : 'vi';
    localStorage.setItem('site_lang', safeLang);
    document.documentElement.lang = safeLang;
  }, [lang]);

  const dictionary = useMemo(() => i18n[lang] || i18n.vi, [lang]);

  return (
    <>
      <Navbar
        navLinks={dictionary.navLinks}
        ctaFull={dictionary.navbar.ctaFull}
        ctaCompact={dictionary.navbar.ctaCompact}
        languageLabel={dictionary.navbar.languageLabel}
        lang={lang}
        onChangeLang={setLang}
      />
      <main>
        <HeroSection content={dictionary.hero} />
        <PainPointsSection content={dictionary.painPoints} />
        <IntroSection content={dictionary.intro} />
        <ProductShowcaseSection content={dictionary.productsSection} />
        <MediaGallerySection content={dictionary.mediaGallerySection} />
        <ServicesSection content={dictionary.servicesSection} />
        <WorkflowSection content={dictionary.workflowSection} />
        <PartnerMarketSection content={dictionary.partnerMarketSection} />
        <WhyChooseSection content={dictionary.whyChooseSection} />
        <CaseStudySection content={dictionary.caseStudySection} />
        <ConsultationSection content={dictionary.consultation} />
        <FinalCtaSection content={dictionary.finalCta} />
      </main>
      <Footer content={dictionary.footer} />
      <FloatingContact />
    </>
  );
}

export default App;
