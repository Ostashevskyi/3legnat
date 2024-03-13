import React from "react";

import { getUserDataById } from "@/hooks/getUserDataById";

import { TProduct } from "@/types/ProductType";

import Timer from "@/components/Timer/Timer";
import ChooseColor from "@/components/Shared/ChooseColor";
import StarsRating from "@/components/Shared/StarsRating";
import WishlistButton from "@/components/Buttons/WishlistButton";
import AddToCartButton from "@/components/Buttons/AddToCartButton";
import ProductPageAccordion from "@/components/Accordions/ProductPageAccordion";
import { TWishlist } from "@/types/Wishlist";
import getReviews from "@/hooks/getReviews";
import { TReview } from "@/types/Review";

const ProductInfo = async ({
  productInfo,
  wishlist,
}: {
  productInfo: TProduct;
  wishlist: TWishlist[];
}) => {
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
    mainPhoto,
  } = productInfo;

  const { reviews } = await getReviews(title);

  const calculateAverageRating = (reviews: TReview[]) => {
    if (reviews.length) {
      const sumOfRatings = reviews
        ?.map((el) => el.rating)
        ?.reduce((prev, next) => prev + next);
      return sumOfRatings / reviews.length;
    } else {
      return 0;
    }
  };

  const userData = await getUserDataById();
  return (
    <section className="p-mobile">
      <div className="mb-6">
        <div className="flex gap-3 items-center mb-4">
          <StarsRating readOnly rating={calculateAverageRating(reviews)} />
          <span className="regular-caption-2">{reviews.length} Reviews</span>
        </div>
        <div className="flex flex-col gap-4">
          <h4>{title}</h4>
          <p className="regular-body-2 text-neutral_04">{description}</p>
          <div className="flex gap-3 items-center">
            <h6>${price.toFixed(2)}</h6>
            <p className="h7 line-through text-neutral_04">
              {oldPrice && `${oldPrice?.toFixed(2)}`}
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
          <WishlistButton
            main
            product={productInfo}
            user_id={userData?.user_id}
            wishlist={wishlist}
          />
        </div>
        <AddToCartButton
          title={title}
          price={price}
          slug={slug}
          user_id={userData?.user_id}
          mainPhoto={mainPhoto}
        />
      </div>
      <div className="grid grid-cols-2 mt-6 regular-caption-2 gap-y-2 border-t py-6">
        <p className="uppercase text-neutral_04">SKU</p>
        <p>{sku}</p>
        <p className="uppercase text-neutral_04">Category</p>
        <p>{category}</p>
      </div>
      <div className="lg:hidden mb-10">
        <ProductPageAccordion
          additionalInfo={additionalInfo}
          product={productInfo}
        />
      </div>
    </section>
  );
};

export default ProductInfo;
