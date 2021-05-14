import React from 'react';
import LandingSec1 from '../../components/pages/LandingSection1/LandingSec1';
import LandingSec2 from '../../components/pages/LandingSection1/LandingSec2';
import LandingSec3 from '../../components/pages/LandingSection1/LandingSec3';
import Crm from '../../components/shared/Crm/Crm';
import Footer from '../../components/shared/Footer/Footer';
import GrowFast from '../../components/shared/GrowFast/GrowFast';
import HostSaleBanner from '../../components/shared/HostSaleBanner/HostSaleBanner';
import Nav from '../../components/shared/Nav/Nav';
import TopFooter from '../../components/shared/TopFooter/TopFooter';
import UsersThink from '../../components/shared/UsersThink/UsersThink';
import WebApps from '../../components/shared/WebApps/WebApps';

function Landing() {
  return (
    <main>
      <Nav />
      <LandingSec1 />
      <LandingSec2 />
      <Crm />
      <LandingSec3 />
      <HostSaleBanner />
      <WebApps />
      <UsersThink />
      <GrowFast />
      <TopFooter />
      <Footer />
    </main>
  );
}

export default Landing;
