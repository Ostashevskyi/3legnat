import prisma from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const coupons = await prisma.coupouns.findMany();

    return NextResponse.json({ coupons }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
