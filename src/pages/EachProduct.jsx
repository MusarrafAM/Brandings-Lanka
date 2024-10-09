import React, { useState } from "react"; // Import useState
import { useLocation } from "react-router-dom";
import Counter from "../components/Counter";
import EachGlassCard from "../components/EachGlassCard";

const EachProduct = () => {
  const location = useLocation();
  const { url, price, productName } = location.state || {};
  const [count, setCount] = useState(0); // State for counter

  // Ensure price is a valid number, format with commas, and fallback to 0 if undefined
  const formattedPrice = Number(price)?.toLocaleString() || "0";

  // Increment and decrement functions
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0)); // Prevent negative count
  };

  return (
    <div className="px-2 lg:px-[10%] py-10 ">
      <div className="grid md:grid-cols-2">
        <div className="h-[500px]">
          <img
            src={url}
            alt={productName}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="px-8 ">
          <h1 className="text-5xl">{productName}</h1>
          <p className="text-lg py-8">Rs {formattedPrice}.00 LKR</p>
          <div className="ItemDescription mb-8">
            <ul>
              <li>🔥Free Pouch🔥</li>
              <li>Gender: Unisex 🧔🏻‍♂️👩🏻</li>
              <li>Lenses: UV 400 protection 👓</li>
              <li>Size: Free Size 🆓</li>
              <li>Features: Lightweight Frame 🕶️</li>
              <li>Super Soft & Comfortable 😎</li>
              <li>All-day comfort 😎</li>
            </ul>
          </div>
          <p className="text-sm text-gray-400">Quantity</p>
          <Counter
            count={count}
            onIncrement={increment}
            onDecrement={decrement}
          />
          <button className="w-full border-black border-[1px] 300 py-2 my-2 text-center hover:text-white hover:bg-black duration-300">
            Add to Cart
          </button>
          <button className="w-full border-black border-2 py-2 my-2 text-center  bg-black text-white">
            Buy it now
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="my-10">
        <h3 className="ml-2 text-2xl mb-6">Related Products</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <EachGlassCard />
          <EachGlassCard />
          <EachGlassCard />
          <EachGlassCard />
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
