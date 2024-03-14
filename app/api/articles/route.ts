import { performRequest } from "@/lib/datocms";
import { NextRequest, NextResponse } from "next/server";

const ARTICLES = `
query Articles {
    allBlogs(first: "3") {
      slug
      smallImage {
        url
        width
        height
      }
      title
    }
  }`;

export const GET = async (req: NextRequest) => {
  try {
    const {
      data: { allBlogs },
    } = await performRequest({ query: ARTICLES });

    return NextResponse.json({ allBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
