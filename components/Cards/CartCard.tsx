import Image from "next/image";
import React from "react";
import QuantityButton from "../Buttons/QuantityButton";

const CartCard = () => {
  return (
    <div>
      {/* mobile */}
      <div className="flex gap-4 border-b py-6 md:hidden">
        <Image src={"/chair.png"} alt="chair" width={80} height={96} />
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex justify-between semibold-caption-1">
            <p>Tray Table</p>
            <p>$19.19</p>
          </div>
          <div className="flex justify-between regular-caption-2 text-neutral_04">
            <p>Color: Black</p>
            <button>✖</button>
          </div>
          <QuantityButton number={2} bg="white" />
        </div>
      </div>

      {/* desktop */}
      <div className="grid-cols-5 gap-4 items-center hidden md:grid border-b mb-20">
        <div className="col-span-2 flex items-center gap-4 my-6">
          <Image src={"/chair.png"} alt="chair" width={80} height={96} />
          <div className="flex flex-col gap-2">
            <p className="semibold-caption-1">Tray Table</p>
            <p className="regular-caption-2 text-neutral_04">Color: Black</p>
            <button className="semibold-caprion-1 text-neutral_04">
              ✖ Remove
            </button>
          </div>
        </div>
        <div>
          <QuantityButton number={2} bg="white" />
        </div>
        <p>$19.00</p>
        <p className="font-semibold">$38.00</p>
      </div>
    </div>
  );
};

export default CartCard;
