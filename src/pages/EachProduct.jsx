import React from "react";
import { useLocation } from "react-router-dom";

const EachProduct = () => {
  const location = useLocation();
  const { url, price, productName } = location.state || {};

  return (
    <div className="px-2 lg:px-[10%] py-10 grid grid-cols-2">
      <div className="h-[500px]">
        <img
          src={url}
          alt={productName}
          className="h-full w-full object-contain"
        />
      </div>
      <div>
        <h1 className="text-2xl my-4">{productName}</h1>
        <p className="text-lg">{price}</p>
        <p className="mt-4">
          Detailed description of the product will go here...
        </p>
      </div>
    </div>
  );
};

export default EachProduct;
