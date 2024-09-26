import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Exclusives from "../components/Exclusives";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Exclusives />
      <Footer />
    </div>
  );
};

export default Home;
