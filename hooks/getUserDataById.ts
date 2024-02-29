import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

type TUserData = {
  userData: {
    email: string;
    name: string;
    username: string;
    lastName?: string;
    id: number;
    password: string;
    image: string;
  };
};

export const getUserDataById = async () => {
  const session = await getServerSession(options);
  const res = await fetch(
    `http://localhost:3000/api/userinfo?id=${session?.user.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const { userData }: TUserData = await res.json();

  return userData;
};
