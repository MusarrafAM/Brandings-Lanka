import React from "react";

const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="grid grid-cols-3 mb-2">
      <div className="border-gray-400 border-2 grid grid-cols-3 items-center justify-center">
        <button
          onClick={onDecrement}
          className={`px-4 py-2 rounded-l ${
            count === 0 ? "cursor-not-allowed" : ""
          }`}
        >
          -
        </button>
        <span className="mx-auto text-xl">{count}</span>
        <button onClick={onIncrement} className="px-4 py-2 rounded-r">
          +
        </button>
      </div>
      <button className="col-span-2 bg-green-500 mx-6">
        Order on whatsapp
      </button>
    </div>
  );
};

export default Counter;
