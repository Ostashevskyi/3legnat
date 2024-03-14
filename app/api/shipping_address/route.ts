import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const userShippingAddress = await prisma.shippingAddress.findUnique({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ userShippingAddress }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const {
      first_name,
      last_name,
      city,
      country,
      email,
      phone,
      postcode,
      street_address,
      preset_name,
      user_id,
    } = await req.json();

    console.log(
      first_name,
      last_name,
      city,
      country,
      email,
      phone,
      postcode,
      street_address,
      preset_name,
      user_id
    );

    const res = await prisma.shippingAddress.create({
      data: {
        preset_name,
        first_name,
        last_name,
        country,
        street_address,
        postcode,
        city,
        phone,
        email,
        user_id,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const {
      preset_name,
      first_name,
      last_name,
      country,
      street_address,
      postcode,
      city,
      phone,
      email,
      user_id,
    } = await req.json();

    const res = await prisma.shippingAddress.update({
      where: {
        user_id,
      },
      data: {
        preset_name,
        first_name,
        last_name,
        country,
        street_address,
        postcode,
        city,
        phone,
        email,
        user_id,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export const DELETE = async (req: Request) => {
  try {
    const { user_id } = await req.json();

    const res = await prisma.shippingAddress.deleteMany({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
