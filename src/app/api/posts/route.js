import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");

  const POST_PER_PAGE = 12;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (page - 1),
    include: { cat: true, user: true },
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count(),
    ]);

    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
