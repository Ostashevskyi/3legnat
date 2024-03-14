import { performRequest } from "@/lib/datocms";
import { NextResponse } from "next/server";

const BLOGS = `
query BLOG($slug: String){
    allBlogs(filter: {slug: {eq: $slug}}) {
      blogData
      date
      id
      slug
      smallImage {
        url
        width
        height
      }
      title
      author {
        name
      }
    }
  }`;

export const POST = async (req: Request) => {
  try {
    const { slug } = await req.json();
    const {
      data: { allBlogs },
    } = await performRequest({ query: BLOGS, variables: { slug } });

    return NextResponse.json({ allBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
