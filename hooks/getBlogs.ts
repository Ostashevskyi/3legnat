export const getBlog = async (slug?: string) => {
  const URL = process.env.NEXT_ENV;

  const res = await fetch(`${URL}/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
    }),
  });

  const data = await res.json();

  const { allBlogs } = data;
  return allBlogs;
};
