import React from "react";
// import HeroImage1 from "../assets/a.jpg";
import HeroImage2 from "../assets/b.jpg";

const Hero = () => {
  return (
    <div className="bg-blue-100 flex items-center justify-center">
      <div className="text-2xl w-full h-screen">
        <img src={HeroImage2} className="h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Hero;
