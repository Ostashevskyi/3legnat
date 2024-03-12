"use client";
import { TBlog } from "@/types/Blogs";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: TBlog }) => {
  return (
    <div>
      <Link href={`/blog/${blog?.slug}`}>
        <Image
          src={blog?.smallImage.url}
          alt="blog-image"
          width={blog?.smallImage.width}
          height={blog?.smallImage.height}
          className="mb-6"
        />
        <p className="mb-2 h7">{blog?.title}</p>
      </Link>
      <p className="regular-caption-2 text-neutral_04">
        {formatDate(blog?.date)}
      </p>
    </div>
  );
};

export default BlogCard;
