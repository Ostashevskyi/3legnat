import { compare, hash } from "bcrypt";

import { NextResponse } from "next/server";

import prisma from "@/lib/client";

export async function POST(req: Request) {
  try {
    const { oldPassword, currentPassword, newPassword, user_id } =
      await req.json();

    const isSamePass = await compare(oldPassword, currentPassword);

    if (isSamePass) {
      const hashedNewPassword = await hash(newPassword, 12);

      await prisma.user.update({
        where: {
          user_id,
        },
        data: {
          password: hashedNewPassword,
        },
      });
    }
    return NextResponse.json(
      { message: "Password successfully changed" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
