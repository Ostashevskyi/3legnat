import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/client";

export const POST = async (req: Request) => {
  try {
    const { image, product_title, price, user_id, slug } = await req.json();

    const res = await prisma.wishlist.create({
      data: {
        image,
        product_title,
        price,
        user_id,
        slug,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const wishlist = await prisma.wishlist.findMany({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ wishlist }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
