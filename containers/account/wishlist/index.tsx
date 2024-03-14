import React from "react";

import Link from "next/link";
import Image from "next/image";

import { getWishlist } from "@/hooks/getWishlist";

import DarkButton from "@/components/Buttons/DarkButton";
import DeleteWishlistButton from "@/components/Buttons/DeleteWishlistButton";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import Empty from "@/components/Shared/Empty";

type TWishlist = {
  id: number;
  image: string;
  product_title: string;
  price: number;
  user_id: string;
  slug: string;
};

const Wishlist = async () => {
  const wishlist = (await getWishlist()) as TWishlist[];
  const session = await getServerSession(options);

  return (
    <section className="p-mobile">
      <p className="semibold-body-1 lg:mb-10">Your Wishlist</p>
      {!wishlist.length && <Empty section="wishlist" />}
      {!!wishlist.length && (
        <div className="hidden lg:grid grid-cols-3 pb-2 border-b">
          <p>Product</p>
          <p>Price</p>
          <p>Action</p>
        </div>
      )}

      <div>
        {wishlist.map((product, index) => {
          return (
            <div
              key={index}
              className="border-b py-4 lg:py-6 grid grid-cols-1 lg:grid-cols-3 lg:items-center"
            >
              <div className="flex gap-4 mb-4 lg:mb-0 lg:items-center">
                <div className="flex items-center gap-4">
                  <DeleteWishlistButton
                    product={product}
                    user_id={session?.user.user_id}
                  />
                  <Image
                    src={product.image}
                    alt="image"
                    width={60}
                    height={72}
                  />
                </div>
                <div>
                  <p className="semibold-caption-1 mb-2">
                    {product.product_title}
                  </p>
                  <p className="regular-caption-1 lg:hidden">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <p className="regular-caption-1">${product.price.toFixed(2)}</p>
              <Link href={`/shop/${product.slug}`}>
                <DarkButton>See in shop</DarkButton>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wishlist;
