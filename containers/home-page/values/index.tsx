import ValuesCard from "@/components/Cards/ValuesCard";
import React from "react";

const Values = () => {
  return (
    <div className="p-mobile max-container flex flex-wrap gap-2 justify-center lg:gap-6">
      <ValuesCard />
      <ValuesCard />
      <ValuesCard />
      <ValuesCard />
    </div>
  );
};

export default Values;
