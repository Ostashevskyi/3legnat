import Image from "next/image";
import React from "react";
import ArrowLink from "../Links/ArrowLink";
import { TArticles } from "@/containers/home-page/article";
import Link from "next/link";

const ArticleCard = ({ article }: { article: TArticles }) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        <Link href={`/blog/${article.slug}`}>
          <Image
            alt="article-room"
            src={article.smallImage.url}
            width={357}
            height={325}
          />
        </Link>
        <div className="flex flex-col gap-2">
          <Link
            href={`/blog/${article.slug}`}
            className="mb-2 text-base leading-26 lg:text-20 lg:leading-28 font-semibold"
          >
            {article.title}
          </Link>
          <ArrowLink
            color="#000000"
            text="Read More"
            href={`blog/${article.slug}`}
          />
        </div>
      </div>
    </section>
  );
};

export default ArticleCard;
