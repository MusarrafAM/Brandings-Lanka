import React from "react";
import EachGlassCard from "../EachGlassCard";

const ScreenGlassesSection = () => {
  const screenGlassUrl =
    "https://peachmart.pk/wp-content/uploads/2023/11/k-614-1-500x500.jpeg";
  return (
    <div className="px-2 lg:px-[10%] py-10">
      <h3 className="pl-2 text-xl pb-8">Screen Glasses</h3>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
        <EachGlassCard url={screenGlassUrl} />
      </div>
    </div>
  );
};

export default ScreenGlassesSection;
