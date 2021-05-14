import React from 'react';
import LandingSec2 from '../../components/pages/LandingSection1/LandingSec2';
import Nav from '../../components/shared/Nav/Nav';
import ProductPricing from '../../components/shared/ProductPricing/ProductPricing';
import GrowFast from '../../components/shared/GrowFast/GrowFast';
import TopFooter from '../../components/shared/TopFooter/TopFooter';
import Footer from '../../components/shared/Footer/Footer';
import AccordionSection from '../../components/pages/Pricing/AccordionSection';
import PricingTestimional from '../../components/pages/Pricing/PricingTestimional';

function Pricing() {
  return (
    <main>
      <Nav isWhite />
      <ProductPricing />
      <LandingSec2 />
      <AccordionSection />
      <PricingTestimional />
      <GrowFast />
      <TopFooter />
      <Footer />
    </main>
  );
}

export default Pricing;
