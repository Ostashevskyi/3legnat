import { NextRequest, NextResponse } from "next/server";

import prisma from "@/lib/client";

export async function GET(req: NextRequest) {
  try {
    const email = req.nextUrl.searchParams.get("email") as string;

    const res = await prisma.user.findMany({
      where: {
        email,
      },
    });

    if (!res.length) {
      throw Error("Email is not valid");
    }

    return NextResponse.json({ message: "Email is valid" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Email is not valid" },
      { status: 500 }
    );
  }
}
