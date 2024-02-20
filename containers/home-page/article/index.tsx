import ArticleCard from "@/components/Cards/ArticleCard";
import ArrowLink from "@/components/Links/ArrowLink";
import React from "react";

const Article = () => {
  return (
    <section className="max-container p-mobile ">
      <div className="flex justify-between items-end mb-10">
        <h4>Articles</h4>
        <ArrowLink color="#000000" text="More Articles" />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-6 mb-10">
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>
    </section>
  );
};

export default Article;
