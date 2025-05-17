
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import DonationSection from '../components/DonationSection';
import ProgressSection from '../components/ProgressSection';
import TeamSection from '../components/TeamSection';
import FaqSection from '../components/FaqSection';
import Footer from '../components/Footer';

const Index = () => {
  React.useEffect(() => {
    document.title = "Khalid & Siraj | Support Islamic Historical Cinema";
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <DonationSection />
      <ProgressSection />
      <TeamSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
