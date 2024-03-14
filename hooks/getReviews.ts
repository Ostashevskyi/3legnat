const getReviews = async (product_title?: string) => {
  const res = await fetch(
    `http://localhost:3000/api/reviews?title=${product_title}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    }
  );

  const data = await res.json();
  return data;
};

export default getReviews;
