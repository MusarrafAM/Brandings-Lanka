import React from "react";
import EachGlassCard from "../EachGlassCard";
import products from "../../data/products.json";

const ExclusivesSection = () => {
  return (
    <div className="px-2 lg:px-[10%] py-10">
      <h3 className="pl-2 text-xl pb-8">Introducing Our Exclusive Premium Collections</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <EachGlassCard
            key={index}
            url={product.url}
            productName={product.productName}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ExclusivesSection;
