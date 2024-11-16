import React from "react";
import Hero from "../components/Hero";
import ExclusivesSection from "../components/sections/ExclusivesSection";
import BestSellerSection from "../components/sections/BestSellerSection";
import ScreenGlassesSection from "../components/sections/ScreenGlassesSection";
import OtherBrandsSection from "../components/sections/OtherBrandsSection";
import PopularProduct from "../components/PopularProduct";
import Collections from "../components/sections/Collections";
import Shop from "./Shop";
import { useRef } from "react";

const Home = () => {
  const shopRef = useRef(null);

  const scrollToShop = () => {
    shopRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const popular1 = {
    url: "https://simpletfa.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-8.18.47-PM-2-300x300.jpeg",
    productName: "The Classic Round Acetate Wayfarer",
    price: 5900,
  };

  const popular2 = {
    url: "https://simpletfa.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-8.30.24-PM-768x768.jpeg",
    productName: "The Screen Glass",
    price: 5500,
  };

  return (
    <div>
      <Hero scrollToShop={scrollToShop} />
      <div ref={shopRef}>
        <Shop />
      </div>
      <ExclusivesSection />
      <BestSellerSection />
      <Collections />
      <PopularProduct {...popular1} />
      <ScreenGlassesSection />
      <PopularProduct {...popular2} />
      <OtherBrandsSection />
    </div>
  );
};

export default Home;
