import React from "react";
import { useNavigate } from "react-router-dom";

const EachGlassCard = ({ url, productName, price }) => {
  const defaultUrl = [
    "https://simpletfa.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-20-at-8.18.47-PM-2-300x300.jpeg",
  ];
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(`/products/${productName}`, {
      state: {
        url: url || defaultUrl,
        price: price,
        productName: productName,
      },
    });
  };

  // Ensure price is a valid number, format with commas, and fallback to 0 if undefined
  const formattedPrice = Number(price)?.toLocaleString() || "0";

  return (
    <div
      className="group bg-white p-2 rounded shadow hover:shadow-lg transition duration-200 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={url || defaultUrl}
        alt={productName}
        className="w-full h-auto rounded-sm duration-300"
      />
      <p className="text-sm py-2 group-hover:underline">{productName}</p>
      <p>Rs {formattedPrice}.00 LKR</p>
    </div>
  );
};

export default EachGlassCard;
