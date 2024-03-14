import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const getOrder = async () => {
  const URL = process.env.NEXT_ENV;
  const session = await getServerSession(options);

  const res = await fetch(`${URL}/api/order?user_id=${session?.user.user_id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const { orders } = data;
  return orders;
};
