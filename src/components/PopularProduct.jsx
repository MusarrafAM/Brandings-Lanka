import React, { useState } from "react"; // Import useState
import Counter from "../components/Counter";

const PopularProduct = ({ url, price, productName }) => {
  const [count, setCount] = useState(1); // State for counter

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
        <div className="h-full ">
          <img
            src={url}
            alt={productName}
            className="h-full w-full object-fit"
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
    </div>
  );
};

export default PopularProduct;
