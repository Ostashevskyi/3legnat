const getReviews = async (product_title?: string) => {
  const URL = process.env.NEXT_ENV;

  const res = await fetch(`${URL}/api/reviews?title=${product_title}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

export default getReviews;
