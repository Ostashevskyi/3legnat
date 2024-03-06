const getProducts = async () => {
  const res = await fetch(`http://localhost:3000/api/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

export default getProducts;
