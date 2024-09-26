import React from "react";

const EachGlassCard = () => {
  return (
    <div className="group bg-white p-2 rounded shadow hover:shadow-lg transition duration-200 cursor-pointer">
      <img
        src="https://simpletfa.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-8.18.47-PM-2-300x300.jpeg"
        alt="Classic Round Acetate Wayfarer"
        className="w-full h-auto rounded-sm duration-300 "
      />
      <p className="text-sm py-2 group-hover:underline  ">
        The Classic Round Acetate Wayfarer
      </p>
      <p>Rs 5,900.00 LKR</p>
    </div>
  );
};

export default EachGlassCard;
