import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Heading from "../Heading";
import DateFormat from "../DateFormat";

const getFeatured = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/featured?slug=${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed fetch featured posts");
  }

  return res.json();
};

export default async function Hero() {
  const data = await getFeatured("hero-home");
  return (
    <>
      {data.map((post) => (
        <div
          className="grid md:grid-cols-2 gap-5 md:gap-10 items-center bg-secondary"
          key={post?.id}
        >
          {post.posts.map((item) => (
            <React.Fragment key={item?.id}>
              {item?.img && (
                <Image
                  src={item?.img}
                  alt="hero image"
                  width={931}
                  height={295}
                  priority
                  className="h-full w-full object-cover"
                />
              )}
              <div className="space-y-5 max-w-[600px] px-5 py-6 lg:py-10">
                <Heading tag="h1">
                  <Link href={`/blog/${item?.slug}`}>{item?.title}</Link>
                </Heading>
                <p>{item?.excerpt}</p>
                <div className="flex gap-3 items-center text-sm">
                  <Image
                    src={item?.user?.image}
                    alt={`Hero ${item?.user?.name}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex gap-1">
                    <p>{item?.user?.name}</p>•
                    <p>{DateFormat(item?.createdAt)}</p>
                  </div>
                </div>
                <Link
                  href={`/blog/${item?.slug}`}
                  className={buttonVariants({ size: "sm" })}
                >
                  Explore now
                </Link>
              </div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </>
  );
}
