const getArticles = async () => {
  const res = await fetch(`http://localhost:3000/api/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  return data;
};

export default getArticles;
