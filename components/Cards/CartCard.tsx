import Image from "next/image";
import React from "react";
import QuantityButton from "../Buttons/QuantityButton";
import { TCartProduct } from "@/types/CartProduct";
import Link from "next/link";
import DeleteCartButton from "../Buttons/DeleteCartButton";

const CartCard = ({
  product,
  user_id,
}: {
  product: TCartProduct;
  user_id: string | undefined;
}) => {
  const { color, price, product_name, quantity, slug, photoUrl } = product;

  const totalPrice = price * quantity;
  return (
    <div>
      {/* mobile */}
      <div className="flex gap-4 border-b py-6 md:hidden">
        <Link href={`/shop/${slug}`}>
          <Image src={photoUrl} alt="chair" width={80} height={96} />
        </Link>
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between semibold-caption-1">
            <Link href={`/shop/${slug}`}>
              <p>{product_name}</p>
            </Link>
            <p>${price.toFixed(2)}</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex justify-between regular-caption-2 text-neutral_04">
            <p>Color: {color}</p>
            <DeleteCartButton user_id={user_id} product={product} />
          </div>
          <QuantityButton product={product} bg="white" />
        </div>
      </div>

      {/* desktop */}
      <div className="grid-cols-5 gap-4 items-center hidden md:grid border-b">
        <div className="col-span-2 flex items-center gap-4 my-6">
          <Link href={`/shop/${slug}`}>
            <Image src={photoUrl} alt="chair" width={80} height={96} />
          </Link>
          <div className="flex flex-col gap-2">
            <Link href={`/shop/${slug}`}>
              <p className="semibold-caption-1">{product_name}</p>
            </Link>
            <p className="regular-caption-2 text-neutral_04">Color: {color}</p>
            <DeleteCartButton user_id={user_id} product={product} />
          </div>
        </div>
        <div>
          <QuantityButton product={product} bg="white" />
        </div>
        <p>${price.toFixed(2)}</p>
        <p className="font-semibold">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartCard;
