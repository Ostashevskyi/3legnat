import Image from "next/image";
import React from "react";
import ArrowLink from "../Links/ArrowLink";

const ArticleCard = () => {
  return (
    <section className="flex flex-col gap-6">
      <Image
        alt="article-room"
        src={"/article-room.png"}
        width={357}
        height={325}
      />
      <div>
        <p className="mb-2 text-base leading-26 lg:text-20 lg:leading-28 font-semibold">
          7 ways to decor your home
        </p>
        <ArrowLink color="#000000" text="Read More" />
      </div>
    </section>
  );
};

export default ArticleCard;
