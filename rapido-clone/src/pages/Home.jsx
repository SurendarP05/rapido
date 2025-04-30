import React from 'react';
import Navbar from '../components/Navbar';
import OurServices from '../components/Ourservices';
import GetQuickRides from '../components/GetQuickRides';
import FlexibleEarnings from '../components/FlexibleEarnings';
import DownloadSection from '../components/DownloadSection';
// import SafetySection from '../components/SatetySection';
import HeroSection from '../components/Herosection';
import SafetySection from '../components/SafetySection';
import Footer from '../components/Footer';
import SocialMediaContainer from '../components/SocialMedia';

// import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <HeroSection/>
      <OurServices/>
      <GetQuickRides/>
      <FlexibleEarnings/>
      <SafetySection/>
      <DownloadSection/>
      <SocialMediaContainer/>
      <Footer/>
    </div>
  );
}

export default Home;
