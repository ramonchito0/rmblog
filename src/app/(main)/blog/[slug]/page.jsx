import ContentWrapper from "@/components/ContentWrapper";
import DateFormat from "@/components/DateFormat";
import Heading from "@/components/Heading";
import Comments from "@/components/post/Comments";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPost = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed fetch post");
  }

  return res.json();
};

export default async function SinglePost({ params }) {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) {
    notFound();
  }
  const markup = { __html: post?.desc };

  return (
    <>
      <div className="relative z-0 flex min-h-[calc(100vh-40vh)] items-center bg-secondary">
        <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
          {post?.img && (
            <Image
              src={post?.img}
              alt="hero image"
              width={931}
              height={295}
              priority
              className="h-full w-full absolute inset-0 object-cover"
            />
          )}
        </div>
        <ContentWrapper>
          <div className="space-y-5 max-w-[800px] px-5 py-6 lg:py-10 mx-auto text-center text-primary-foreground">
            <Heading tag="h1">{post?.title}</Heading>
            <div className="flex gap-3 items-center text-sm justify-center">
              {post?.user?.image && (
                <Image
                  src={post?.user?.image}
                  alt={`Post - ${post?.user?.name}`}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <div className="flex gap-1">
                <p>{post?.user?.name}</p>•<p>{DateFormat(post?.createdAt)}</p>•
                <p>{post?.cat?.title}</p>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
      <ContentWrapper>
        <div dangerouslySetInnerHTML={markup} />
        <hr className="my-8 lg:my-10" />

        <div className="space-y-16">
          <Comments postSlug={post?.slug} />
        </div>
      </ContentWrapper>
    </>
  );
}
