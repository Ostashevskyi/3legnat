import { options } from "@/app/api/auth/[...nextauth]/options";
import { URL } from "@/utils/constants";
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
    user_id: string;
  };
};

export const getUserDataById = async () => {
  const session = await getServerSession(options);

  const res = await fetch(
    `${URL}/api/userinfo?user_id=${session?.user.user_id}`,
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
