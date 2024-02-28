import { NextRequest, NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id") as string;

    const userData = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });

    return NextResponse.json({ userData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Some error while fetching data. Try again" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const { name, username, email, lastName, id } = await req.json();

    const res = await prisma.user.update({
      where: {
        id: +id,
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
