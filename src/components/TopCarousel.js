import { useState } from "react";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

const TopCarousel = () => {
  const texts = [
    "Get a Free Leather Pouch on All orders",
    "Free shipping when you buy 2 sunglasses. T&C apply",
  ];

  const [isVisible, setIsVisible] = useState(true); // Control visibility
  const [currentIndex, setCurrentIndex] = useState(0); // Track current text index
  const [isAnimating, setIsAnimating] = useState(false); // Track animation state

  // Handle Next button click
  const handleNext = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length); // Loop forward
      setIsAnimating(false); // End animation
    }, 300); // Match animation duration
  };

  // Handle Previous button click
  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? texts.length - 1 : prevIndex - 1
      ); // Loop backward
      setIsAnimating(false);
    }, 300);
  };

  return (
    <>
      {isVisible && (
        <div className="top-Carousel px-2 lg:px-[10%] flex justify-between items-center relative">
          {/* Left Button (Previous) */}
          <button onClick={handlePrev}>
            <FaLessThan size={12} />
          </button>

          {/* Display current text with animation */}
          <h1
            className={`text-xs  md:text-sm py-1 transition-all duration-300 ease-in-out transform ${
              isAnimating ? "opacity-0 " : "opacity-100"
            }`}
          >
            {texts[currentIndex]}
          </h1>

          {/* Right Button (Next) */}
          <button onClick={handleNext}>
            <FaGreaterThan size={12} />
          </button>

          {/* Close Button */}
          <button
            className="absolute right-10 p-1"
            onClick={() => setIsVisible(false)}
          >
            <IoCloseSharp size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default TopCarousel;
