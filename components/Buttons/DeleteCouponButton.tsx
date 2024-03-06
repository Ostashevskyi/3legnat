import { fetchShoppingCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import React from "react";
import { useDispatch } from "react-redux";

const DeleteCouponButton = ({ user_id }: { user_id: string | undefined }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = async () => {
    try {
      const res = await fetch("/api/cart/coupon", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: "",
          discount_amount: null,
          user_id,
        }),
      });

      if (!res.ok) {
        throw Error("Error");
      }

      if (res.ok) {
        dispatch(fetchShoppingCart(user_id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button className="text-secondary_red" onClick={handleClick}>
      [Remove]
    </button>
  );
};

export default DeleteCouponButton;
