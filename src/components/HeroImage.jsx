import React from "react";

function HeroImage({ image }) {
  const handleZoom = (e) => {
    const zoomer = e.currentTarget;
    const offsetX = e.nativeEvent.offsetX || e.touches?.[0]?.pageX;
    const offsetY = e.nativeEvent.offsetY || e.touches?.[0]?.pageY;
    const x = (offsetX / zoomer.offsetWidth) * 100;
    const y = (offsetY / zoomer.offsetHeight) * 100;
    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <figure
      className="relative border-4 border-white shadow-lg overflow-hidden cursor-zoom-in bg-no-repeat h-full w-full"
      onMouseMove={handleZoom}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "200%",
      }}
    >
      <img
        className="transition-opacity duration-500 block  hover:opacity-0 h-full w-full object-fill"
        src={image}
        alt="Zoomable"
      />
    </figure>
  );
}

export default HeroImage;
