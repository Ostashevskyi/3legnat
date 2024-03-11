import BlogsSection from "@/containers/blog/BlogsSection";
import Filters from "@/containers/blog/Filters";
import { getBlog } from "@/hooks/getBlogs";
import { TBlog } from "@/types/Blogs";
import Link from "next/link";
import React from "react";

const Blog = async () => {
  const blogs = (await getBlog()) as TBlog[];

  return (
    <section>
      <div className="bg-blog-bg max-container bg-center bg-cover ">
        <section className="flex justify-center items-center py-24 flex-col mb-8 gap-6">
          <div className="flex gap-4 buttonXS-text">
            <div className="flex gap-1 text-black/60">
              <Link href={"/"}>Home</Link>
              <p>{">"}</p>
            </div>
            <p>Blog</p>
          </div>
          <h3>Our Blog</h3>
          <p className="regular-body-2 text-center ">
            Home ideas and design inspiration
          </p>
        </section>
      </div>
      <div className="flex justify-between items-center p-mobile max-container">
        <p className="semibold-caption-1 underline">All blog</p>
        <Filters />
      </div>
      <div className="mt-10">
        <BlogsSection blogs={blogs} />
      </div>
    </section>
  );
};

export default Blog;
