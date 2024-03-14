import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const product = req.nextUrl.searchParams.get("title") as string;

    const reviews = await prisma?.reviews.findMany({
      where: {
        product,
      },
    });

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const { product, review, username, email, user_id, rating, user_image } =
      await req.json();

    const res = await prisma?.reviews.create({
      data: {
        product,
        rating,
        review,
        user_id,
        username,
        user_image,
        email,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
