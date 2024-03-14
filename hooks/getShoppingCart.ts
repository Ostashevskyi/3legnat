import { options } from "@/app/api/auth/[...nextauth]/options";
import { URL } from "@/utils/constants";
import { getServerSession } from "next-auth";

export const getShoppingCart = async () => {
  const session = await getServerSession(options);
  const res = await fetch(`${URL}/api/cart?user_id=${session?.user.user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  return data;
};
