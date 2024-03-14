const getArticles = async () => {
  const URL = process.env.NEXT_ENV;
  const res = await fetch(`${URL}/api/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export default getArticles;
