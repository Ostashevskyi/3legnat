import { performRequest } from "@/lib/datocms";
import { NextRequest, NextResponse } from "next/server";

const BLOGS = `
query Blogs {
    allBlogs {
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
      bigImage {
        url
        width
        height
      }
      author {
        name
        }
      }
}`;

export const GET = async (req: NextRequest) => {
  try {
    const user_id = req.nextUrl.searchParams.get("user_id") as string;

    const {
      data: { allBlogs },
    } = await performRequest({ query: BLOGS });

    return NextResponse.json({ allBlogs }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
};
