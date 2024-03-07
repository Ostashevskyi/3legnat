import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const getWishlist = async () => {
  const session = await getServerSession(options);

  const res = await fetch(
    `http://localhost:3000/api/wishlist?user_id=${session?.user.user_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await res.json();
  const { wishlist } = data;
  return wishlist;
};
