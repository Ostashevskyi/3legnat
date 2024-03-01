import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const userBillingAddress = await prisma.billingAddress.findUnique({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ userBillingAddress }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const {
      preset_name,
      first_name,
      last_name,
      card_number,
      cvv,
      expiration_date,
      user_id,
    } = await req.json();

    const res = await prisma.billingAddress.create({
      data: {
        preset_name,
        first_name,
        last_name,
        card_number,
        cvv,
        expiration_date,
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
      card_number,
      cvv,
      expiration_date,
      user_id,
    } = await req.json();

    const res = await prisma.billingAddress.update({
      where: {
        user_id,
      },
      data: {
        preset_name,
        first_name,
        last_name,
        card_number,
        cvv,
        expiration_date,
        user_id,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
