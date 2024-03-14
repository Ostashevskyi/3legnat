import { options } from "@/app/api/auth/[...nextauth]/options";
import { URL } from "@/utils/constants";
import { getServerSession } from "next-auth";

export const getWishlist = async () => {
  const session = await getServerSession(options);

  const res = await fetch(
    `${URL}/api/wishlist?user_id=${session?.user.user_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  const { wishlist } = data;
  return wishlist;
};
