import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/client";

export async function GET(req: NextRequest) {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const userData = await prisma.user.findUnique({
      where: {
        user_id,
      },
    });

    return NextResponse.json({ userData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, username, email, lastName, user_id } = await req.json();

    const res = await prisma.user.update({
      where: {
        user_id,
      },
      data: {
        name,
        username,
        email,
        lastName,
      },
    });

    return NextResponse.json({ res }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error during updating user data" },
      { status: 500 }
    );
  }
}
