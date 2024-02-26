import React from "react";
import DarkButton from "../Buttons/DarkButton";

const CouponForm = () => {
  return (
    <form className="flex gap-3">
      <input
        type="text"
        placeholder="Input"
        className="outline-none py-3 px-4 border rounded-md max-w-[173px]"
      />
      <div className="flex-1">
        <DarkButton>
          <input type="submit" value={"Apply"} className="" />
        </DarkButton>
      </div>
    </form>
  );
};

export default CouponForm;
