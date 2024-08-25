import { getAuthSession } from "@/lib/auth";
import prisma from "@/lib/connect";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);

  const postSlug = searchParams.get("post");

  try {
    const comments = await prisma.comment.findMany({
      where: {
        ...(postSlug && { postSlug }),
      },
      include: { user: true },
    });
    return new NextResponse(JSON.stringify(comments, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const POST = async (request) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await request.json();
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(comment, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
