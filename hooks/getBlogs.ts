import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const getBlog = async () => {
  const session = await getServerSession(options);

  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();

  const { allBlogs } = data;
  return allBlogs;
};
