import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import DateFormat from "./DateFormat";

export default function Card({ post, className, big = false }) {
  const formattedDate = DateFormat(post?.createdAt);
  return (
    <>
      <div className="space-y-3 lg:space-y-5 text-left">
        {big === true ? (
          <Link href={`blog/${post?.slug}`}>
            <Image
              src="/images/hero2.jpg"
              alt="Card image"
              width={640}
              height={480}
              className={cn(
                "w-full object-cover rounded-md transition-all hover:scale-105",
                className
              )}
            />
          </Link>
        ) : (
          <Link href={`blog/${post?.slug}`}>
            <Image
              src="/images/hero2.jpg"
              alt="Card image"
              width={280}
              height={158}
              className={cn(
                "w-full object-cover rounded-md transition-all hover:scale-105",
                className
              )}
            />
          </Link>
        )}
        <p className="flex gap-3 *:bg-primary *:py-px *:px-1 *:rounded-md *:text-xs *:text-primary-foreground">
          <Link href={`/category/${post?.catSlug}`}>{post?.cat?.title}</Link>
        </p>
        {big === true ? (
          <h3 className="text-xl lg:text-4xl font-normal line-clamp-2">
            <Link href={`blog/${post?.slug}`}>
              {post?.title ||
                "Every Next Level of Your Life Will Demand a Different You"}
            </Link>
          </h3>
        ) : (
          <h3 className="text-xl font-normal line-clamp-2">
            <Link href={`blog/${post?.slug}`}>
              {post?.title ||
                "Every Next Level of Your Life Will Demand a Different You"}
            </Link>
          </h3>
        )}
        <div className="flex gap-2 lg:gap-3 items-center text-sm">
          {post?.user?.image && (
            <Image
              src={post?.user?.image}
              alt={`Post - ${post?.user?.name}`}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover"
            />
          )}
          <div className="flex gap-1 text-xs lg:text-sm items-center text-gray-500">
            <p>{post?.user?.name}</p>•<p>{formattedDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
