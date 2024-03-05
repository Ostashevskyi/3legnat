import ProductPageAccordion from "@/components/Accordions/ProductPageAccordion";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import QuantityButton from "@/components/Buttons/QuantityButton";
import WishlistButton from "@/components/Buttons/WishlistButton";
import ChooseColor from "@/components/Shared/ChooseColor";
import StarsRating from "@/components/Shared/StarsRating";
import Timer from "@/components/Timer/Timer";
import { getUserDataById } from "@/hooks/getUserDataById";
import { TProduct } from "@/types/ProductType";
import React from "react";

const ProductInfo = async ({ productInfo }: { productInfo: TProduct }) => {
  const {
    title,
    description,
    oldPrice,
    price,
    measurements,
    colors,
    sku,
    category,
    additionalInfo,
    slug,
  } = productInfo;

  const userData = await getUserDataById();
  return (
    <section className="p-mobile">
      <div className="mb-6">
        <div className="flex gap-3 items-center mb-4">
          <StarsRating readOnly />
          <span className="regular-caption-2">0 Reviews</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4>{title}</h4>
          <p className="regular-body-2 text-neutral_04">{description}</p>
          <div className="flex gap-3 items-center">
            <h6>${price.toFixed(2)}</h6>
            <p className="h7 line-through text-neutral_04">
              ${oldPrice?.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <div className="border-y py-6 mb-6">
        <p className="regular-body-2 text-neutral_05 mb-3">Offer expires in:</p>
        <Timer />
      </div>
      <div className="mb-6">
        <p className="semibold-body-2 text-neutral_04 mb-2">Measurements</p>
        <p className="regular-body-1">{measurements}</p>
      </div>
      <ChooseColor colors={colors} />
      <div>
        <div className="flex items-center gap-2 mb-4">
          <WishlistButton />
        </div>
        <AddToCartButton
          title={title}
          price={price}
          slug={slug}
          user_id={userData.user_id}
        />
      </div>
      <div className="grid grid-cols-2 mt-6 regular-caption-2 gap-y-2 border-t py-6">
        <p className="uppercase text-neutral_04">SKU</p>
        <p>{sku}</p>
        <p className="uppercase text-neutral_04">Category</p>
        <p>{category}</p>
      </div>
      <div className="lg:hidden mb-10">
        <ProductPageAccordion additionalInfo={additionalInfo} />
      </div>
    </section>
  );
};

export default ProductInfo;
