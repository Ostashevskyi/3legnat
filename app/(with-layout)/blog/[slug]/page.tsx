import React from "react";

import Link from "next/link";
import Image from "next/image";

import { getBlog } from "@/hooks/getBlogs";

import { TBlog } from "@/types/Blogs";

import { formatDate } from "@/utils/formatDate";
import ArrowLink from "@/components/Links/ArrowLink";
import BlogCard from "@/components/Cards/BlogCard";
import { randomInRange } from "@/utils/random";
import Newsletter from "@/components/Newsletter";

const Blog = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = (await getBlog(slug)) as TBlog[];
  const allBlogs = (await getBlog()) as TBlog[];
  const blog = data[0];
  const { author, date, blogData, title } = blog;

  return (
    <section>
      <div className="max-container p-mobile">
        <div className="mb-40 ">
          <div className="hidden lg:flex gap-4 text-neutral_04 buttonXS-text mb-14">
            <Link href={"/"}>Home {">"}</Link>
            <Link href={"/blog"}>Blog {">"}</Link>
            <p className="text-neutral_07">{title}</p>
          </div>
          <div className="flex flex-col gap-6 mb-8">
            <p className="font-bold">Article</p>
            <h6>{title}</h6>
            <div className="text-neutral_04 regular-caption-1 flex gap-8 sm:gap-10">
              <div className="flex gap-1 items-center">
                <Image
                  src={"/icons/user-circle-gray.svg"}
                  alt="user-cirlce"
                  width={16}
                  height={16}
                />
                <p>{author.name}</p>
              </div>
              <div className="flex gap-1 items-center">
                <Image
                  src={"/icons/calendar-gray.svg"}
                  alt="calendar"
                  width={16}
                  height={16}
                />
                <p>{formatDate(date)}</p>
              </div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: blogData }}
              className="flex flex-col gap-5 child-td:align-top child-tr:flex child-tr:gap-6 child-tr:flex-col child-td:max-w-[548px] lg:child-tr:flex-row"
            />
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-12 mb-20">
          <div className="flex justify-between items-center">
            <h6>You might also like</h6>
            <div className="hidden lg:block">
              <ArrowLink href="/blog" color="#000" text="More Articles" />
            </div>
          </div>
          <div className="flex lg:flex-row gap-4 justify-center flex-wrap lg:justify-normal lg:flex-nowrap">
            <BlogCard blog={allBlogs[randomInRange(0, data.length)]} />
            <BlogCard blog={allBlogs[randomInRange(0, data.length)]} />
            <BlogCard blog={allBlogs[randomInRange(0, data.length)]} />
          </div>
          <div className="lg:hidden">
            <ArrowLink href="/blog" color="#000" text="More Articles" />
          </div>
        </div>
      </div>

      <Newsletter />
    </section>
  );
};

export default Blog;
