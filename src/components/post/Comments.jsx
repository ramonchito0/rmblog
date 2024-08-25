"use client";
import Image from "next/image";
import CommentForm from "./CommentForm";
import useSWR from "swr";
import DateFormat from "../DateFormat";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

export default function Comments({ postSlug }) {
  const { status } = useSession();
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?post=${postSlug}`,
    fetcher
  );
  return (
    <>
      {status === "authenticated" ? (
        <CommentForm postSlug={postSlug} />
      ) : (
        <Button asChild>
          <Link href="/login">Login to write a comment</Link>
        </Button>
      )}

      <div className="space-y-10">
        {isLoading ? (
          <div className="space-y-4">Loading...</div>
        ) : (
          data?.map((comment) => (
            <div className="space-y-4">
              <div className="flex gap-2 items-center">
                {comment?.user?.image && (
                  <Image
                    src={comment?.user?.image}
                    alt={`Comment - ${comment?.user?.name}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                <p className="text-sm flex flex-col">
                  {comment?.user?.name}
                  <span className="text-xs">
                    {DateFormat(comment?.createdAt)}
                  </span>
                </p>
              </div>
              <p>{comment?.desc}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
