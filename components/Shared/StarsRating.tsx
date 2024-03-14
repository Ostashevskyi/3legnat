"use client";
import React, { useState } from "react";

import "@smastrom/react-rating/style.css";
import { ThinRoundedStar } from "@smastrom/react-rating";
import { Rating as ReactRating } from "@smastrom/react-rating";

type StarsRating = {
  readOnly?: boolean;
  rating?: number;
};

export const StarsStyles = {
  itemShapes: ThinRoundedStar,
  activeStrokeColor: "#000",
  activeFillColor: "#000",
  inactiveFillColor: "#fff",
  inactiveStrokeColor: "#000",
  itemStrokeWidth: 1,
};

const StarsRating = ({ readOnly, rating }: StarsRating) => {
  return (
    <ReactRating
      style={{ maxWidth: 80 }}
      itemStyles={StarsStyles}
      value={rating as number}
      readOnly={readOnly}
    />
  );
};

export default StarsRating;
