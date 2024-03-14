import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  try {
    const { title, discount_amount, user_id } = await req.json();

    const res = await prisma.shoppingCart.updateMany({
      where: {
        user_id,
      },
      data: {
        coupon_title: title,
        coupon_discount: discount_amount,
      },
    });
    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
