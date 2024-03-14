import { performRequest } from "@/lib/datocms";
import { NextRequest, NextResponse } from "next/server";

const PRODUCTS = `
query Products {
  allProducts {
    title
    id
    description
    mainPhoto {
      url
      height
      width
    }
    additionalPhoto {
      url
      height
      width
    }
    colors {
      alt
      customData
      url
      width
      height
    }
    additionalInfo
    measurements
    oldPrice
    onsale
    discountNumber
    price
    category {
      category
    }
    slug
    sku
  }
}`;

export const GET = async (req: NextRequest) => {
  try {
    const {
      data: { allProducts },
    } = await performRequest({ query: PRODUCTS });

    return NextResponse.json({ allProducts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
