import React from 'react';
import '../../src/App.css';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';


function Home() {
  return (
  <>
    <HeroSection />
    <Cards/>
    <Footer />
  </>
  );
}

export default Home;
