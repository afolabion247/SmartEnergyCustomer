
import React from 'react';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import PricingPlans from './components/PricingPlans';
import AppPreview from './components/AppPreview';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Success from './Success';
import Cancel from './Cancel';
import './index.css';

function App() {
  // Simple routing based on pathname
  const pathname = window.location.pathname;
  
  if (pathname === '/success') {
    return <Success />;
  }
  
  if (pathname === '/cancel') {
    return <Cancel />;
  }

  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <HowItWorks />
      <PricingPlans />
      <AppPreview />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
