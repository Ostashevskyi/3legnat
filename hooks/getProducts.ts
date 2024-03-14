const getProducts = async () => {
  const URL = process.env.NEXT_ENV;

  const res = await fetch(`${URL}/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export default getProducts;
