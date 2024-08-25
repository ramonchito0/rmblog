import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async (slug) => {
  const { searchParams } = new URL(slug.url);

  const featuredSlug = searchParams.get("slug");
  try {
    const fPosts = await prisma.FeaturedPost.findMany({
      where: { slug: featuredSlug },
      include: {
        posts: {
          include: {
            cat: true,
            user: true,
          },
        },
      },
    });

    return new NextResponse(JSON.stringify(fPosts, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
