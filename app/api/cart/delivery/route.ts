import prisma from "@/lib/client";
import { NextResponse } from "next/server";

export const PATCH = async (req: Request) => {
  try {
    const { delivery_price, user_id } = await req.json();

    const res = await prisma.shoppingCart.updateMany({
      where: {
        user_id,
      },
      data: {
        delivery_price,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 200 });
  }
};
