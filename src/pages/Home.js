import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ExclusivesSection from "../components/sections/ExclusivesSection";
import BestSellerSection from "../components/sections/BestSellerSection";
import ScreenGlassesSection from "../components/sections/ScreenGlassesSection";
import OtherBrandsSection from "../components/sections/OtherBrandsSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExclusivesSection />
      <BestSellerSection />
      <ScreenGlassesSection />
      <OtherBrandsSection />
      <Footer />
    </div>
  );
};

export default Home;
