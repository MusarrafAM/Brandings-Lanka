import React from "react";
import HeroImage2 from "../assets/b.jpg";
// import { Link } from "react-router-dom";

const absoluteCentre =
  "bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2";

const Hero = ({ scrollToShop }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full h-screen relative">
        {/* <Link to="/shop">
          <button
            className={`absolute md:bottom-[28%] ${absoluteCentre} px-6 py-2 border-black border-[1px] hover:text-white hover:bg-black text-center duration-500`}
          >
            Show Now
          </button>
        </Link> */}
        <button
          className={`absolute md:bottom-[28%] ${absoluteCentre} px-6 py-2 border-black border-[1px] hover:text-white hover:bg-black text-center duration-500`}
          onClick={scrollToShop}
        >
          Show Now
        </button>
        <img src={HeroImage2} className="z-0 h-full w-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Hero;
