import React, { useState } from "react"; // Import useState
import { useLocation } from "react-router-dom";
import Counter from "../components/Counter";
import EachGlassCard from "../components/EachGlassCard";

const EachProduct = () => {
  const location = useLocation();
  const { url, price, productName } = location.state || {};
  const [count, setCount] = useState(1); // State for counter

  const images = url;
  const [image, setImage] = useState(images[0]);

  // Ensure price is a valid number, format with commas, and fallback to 0 if undefined
  const formattedPrice = Number(price)?.toLocaleString() || "0";

  const totalPrice = price * count;
  const formattedTotalPrice = Number(totalPrice)?.toLocaleString() || "0";
  const phoneNumber = "94720126063";
  const message = encodeURIComponent(
    `Hello! I want to buy this. *${productName}* *Price:* RS ${formattedTotalPrice} *Quantity:* ${count} Thank you!`
  );

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
            src={image}
            alt={productName}
            className="h-full w-full object-contain"
          />
          <div className="flex justify-evenly gap-4 px-10 pt-4">
            {images.map((eachImg, index) => {
              const isSelected = image === eachImg;
              return (
                <div
                  key={index}
                  className={`cursor-pointer max-w-[30%] flex items-center ${
                    isSelected ? "border-2 border-black" : "border"
                  }`}
                  onClick={() => setImage(images[index])}
                >
                  <img src={eachImg} alt={productName} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="px-8 h-screen">
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
            phoneNumber={phoneNumber}
            message={message}
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
          {/* url={url} price={price} productName={productName}  need to pass this later in eachGlassCard */}
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
