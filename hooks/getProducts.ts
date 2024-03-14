import { URL } from "@/utils/constants";

const getProducts = async () => {
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
