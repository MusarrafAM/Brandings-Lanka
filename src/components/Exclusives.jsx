import React from "react";
import EachGlassCard from "./EachGlassCard";

const Exclusives = () => {
  return (
    <div className="px-2 lg:px-[10%] py-10">
      <h3 className="pl-2 text-xl pb-8">Introducing Our Exclusive Premium Collections</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
        <EachGlassCard />
      </div>
    </div>
  );
};

export default Exclusives;
