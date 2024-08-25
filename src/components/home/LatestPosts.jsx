import Card from "../Card";
import Heading from "../Heading";
import Pagination from "../Pagination";

const getPosts = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed fetch posts");
  }

  return res.json();
};

export default async function LatestPosts({ page }) {
  const { posts, count } = await getPosts(page);

  const POST_PER_PAGE = 12;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <>
      <div className="text-center">
        <Heading className="mb-10">Latest Posts</Heading>
        <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
          {posts?.map((post) => (
            <Card post={post} key={post.id} />
          ))}
        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      </div>
    </>
  );
}
