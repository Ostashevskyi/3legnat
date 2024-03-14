"use client";
import React, { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

import { TBlog } from "@/types/Blogs";

import BlogCard from "@/components/Cards/BlogCard";

const BlogsSection = ({ blogs }: { blogs: TBlog[] }) => {
  const [grid, setGrid] = useState<unknown>();
  const [filteredBlogs, setFilteredBlogs] = useState<TBlog[]>(blogs);
  const searchParams = useSearchParams();

  useEffect(() => {
    switch (searchParams.get("blog-filter")) {
      case "A-Z":
        const ascendingOrder = blogs
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        setFilteredBlogs(ascendingOrder);
        break;
      case "Z-A":
        const descendingOrder = blogs
          .slice()
          .sort((a, b) => b.title.localeCompare(a.title));
        setFilteredBlogs(descendingOrder);
        break;
      default:
        setFilteredBlogs(blogs);
        break;
    }
  }, [searchParams.get("blog-filter")]);

  useEffect(() => {
    setGrid(searchParams.get("grid"));
  }, [searchParams.get("grid")]);

  return (
    <div
      className={`mb-8 grid gap-6  justify-items-center md:mb-20 p-mobile max-container
      ${grid === undefined && "md:grid-cols-3 grid-cols-2"}
    ${grid === null && "md:grid-cols-3 grid-cols-2"}
  ${grid === "row" && "grid-cols-2"} 
  ${grid === "grid4" && "grid-cols-4"} 
  ${grid === "grid9" && "grid-cols-6"} 
  `}
    >
      {filteredBlogs?.map((blog, index) => (
        <BlogCard blog={blog} key={index} />
      ))}
    </div>
  );
};

export default BlogsSection;
