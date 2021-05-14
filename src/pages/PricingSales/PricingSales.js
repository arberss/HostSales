import React from 'react';

import Nav from '../../components/shared/Nav/Nav';
import GrowFast from '../../components/shared/GrowFast/GrowFast';
import TopFooter from '../../components/shared/TopFooter/TopFooter';
import Footer from '../../components/shared/Footer/Footer';
import Cards from '../../components/pages/PricingSales/Cards';
import AllFeatures from '../../components/pages/PricingSales/AllFeatures';
import SellAnywhere from '../../components/pages/PricingSales/SellAnywhere';

function PricingSales() {
  return (
    <main>
      <Nav />
      <Cards />
      <AllFeatures />
      <SellAnywhere />
      <GrowFast />
      <TopFooter />
      <Footer />
    </main>
  );
}

export default PricingSales;
