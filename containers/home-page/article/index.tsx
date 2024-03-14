import ArticleCard from "@/components/Cards/ArticleCard";
import ArrowLink from "@/components/Links/ArrowLink";
import getArticles from "@/hooks/getArticle";
import React from "react";

export type TArticles = {
  slug: string;
  smallImage: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
};

const Article = async () => {
  const data = await getArticles();

  const articles = data.allBlogs as TArticles[];

  return (
    <section className="max-container p-mobile ">
      <div className="flex justify-between items-end mb-10">
        <h4>Articles</h4>
        <ArrowLink color="#000000" text="More Articles" href="blog" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        {articles.map((el, index) => (
          <ArticleCard key={index} article={el} />
        ))}
      </div>
    </section>
  );
};

export default Article;
