import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/client";

export const POST = async (req: Request) => {
  try {
    const { order_code, total, products, user_id } = await req.json();

    const order = await prisma.order.create({
      data: {
        order_code,
        total,
        products,
        user_id,
      },
    });

    return NextResponse.json({ order }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const GET = async (req: NextRequest) => {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const orders = await prisma.order.findMany({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
