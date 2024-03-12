export const getBlog = async (slug?: string) => {
  const res = await fetch(`http://localhost:3000/api/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      slug,
    }),
    cache: "no-store",
  });

  const data = await res.json();

  const { allBlogs } = data;
  return allBlogs;
};
