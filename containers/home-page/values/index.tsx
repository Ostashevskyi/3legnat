import ValuesCard from "@/components/Cards/ValuesCard";
import { VALUES_CARDS } from "@/utils/constants";
import React from "react";

const Values = () => {
  return (
    <div className="p-mobile max-container flex flex-wrap gap-x-6 justify-center lg:gap-6">
      {VALUES_CARDS.map((card) => (
        <ValuesCard
          icon={card.icon}
          text={card.text}
          title={card.title}
          key={card.id}
        />
      ))}
    </div>
  );
};

export default Values;
