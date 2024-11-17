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
      className="relative mx-auto my-36 border-4 border-white shadow-lg h-[300px] w-[500px] overflow-hidden cursor-zoom-in bg-cover bg-no-repeat bg-center"
      onMouseMove={handleZoom}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "200%",
      }}
    >
      <img
        className="transition-opacity duration-500 block w-full hover:opacity-0"
        src={image}
        alt="Zoomable"
      />
    </figure>
  );
}

export default HeroImage;
