import React from "react";

const Counter = ({ count, onIncrement, onDecrement, phoneNumber, message }) => {
  return (
    <div className="grid grid-cols-3 mb-2">
      <div className="border-gray-400 border-2 grid grid-cols-3 items-center justify-center">
        <button
          onClick={onDecrement}
          className={`px-4 py-2 rounded-l ${
            count === 1 ? "cursor-not-allowed" : ""
          }`}
          disabled={count === 1} // Added to prevent the button click when count is 1
        >
          -
        </button>
        <span className="mx-auto text-xl">{count}</span>
        <button onClick={onIncrement} className="px-4 py-2 rounded-r">
          +
        </button>
      </div>

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="col-span-2 bg-green-500 mx-6 text-center py-2 rounded text-white"
      >
        Order on WhatsApp
      </a>
    </div>
  );
};

export default Counter;
