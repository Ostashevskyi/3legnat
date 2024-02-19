"use client";
import React, { useState } from "react";

import "@smastrom/react-rating/style.css";
import { ThinRoundedStar } from "@smastrom/react-rating";
import { Rating as ReactRating } from "@smastrom/react-rating";

type StarsRating = {
  readOnly: boolean;
};

const StarsRating = ({ readOnly }: StarsRating) => {
  const [rating, setRating] = useState(0);

  const StarsStyles = {
    itemShapes: ThinRoundedStar,
    activeStrokeColor: "#000",
    activeFillColor: "#000",
    inactiveFillColor: "#000",
    inactiveStrokeColor: "#000",
    itemStrokeWidth: 1,
  };

  return (
    <ReactRating
      style={{ maxWidth: 80 }}
      itemStyles={StarsStyles}
      value={rating}
      onChange={setRating}
      readOnly={readOnly}
    />
  );
};

export default StarsRating;
