import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/client";

export const POST = async (req: Request) => {
  const { title, price, slug, color, quantity, user_id, url } =
    await req.json();
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
        photoUrl: url,
        delivery_price: 0,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const cart = await prisma.shoppingCart.findMany({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ cart }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const PATCH = async (req: Request) => {
  try {
    const { quantity, product_name, user_id, price, color } = await req.json();

    const res = await prisma.shoppingCart.updateMany({
      where: {
        product_name,
        user_id,
        color,
      },
      data: {
        quantity,
        total_price: price * quantity,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    const { product_name, user_id, color } = await req.json();

    const res = await prisma.shoppingCart.deleteMany({
      where: {
        product_name,
        user_id,
        color,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
