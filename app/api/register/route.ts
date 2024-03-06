import { hash } from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/lib/client";

export async function POST(req: Request) {
  try {
    const { name, username, email, password, user_id } = await req.json();

    const hashedPass = await hash(password, 12);

    await prisma.user.create({
      data: {
        email,
        password: hashedPass,
        name,
        username,
        user_id,
      },
    });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}
