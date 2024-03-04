import { NextResponse } from "next/server";
import { prisma } from "@/lib/client";

export const POST = async (req: Request) => {
  const { title, price, slug, color, quantity, user_id } = await req.json();
  const totalPrice = price * quantity;
  try {
    const res = await prisma.shoppingCart.create({
      data: {
        user_id,
        product_name: title,
        slug,
        price,
        quantity,
        total_price: totalPrice,
        color,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
