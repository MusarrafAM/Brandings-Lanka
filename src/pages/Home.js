import React from "react";
import Hero from "../components/Hero";
import ExclusivesSection from "../components/sections/ExclusivesSection";
import BestSellerSection from "../components/sections/BestSellerSection";
import ScreenGlassesSection from "../components/sections/ScreenGlassesSection";
import OtherBrandsSection from "../components/sections/OtherBrandsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <ExclusivesSection />
      <BestSellerSection />
      <ScreenGlassesSection />
      <OtherBrandsSection />
    </div>
  );
};

export default Home;
