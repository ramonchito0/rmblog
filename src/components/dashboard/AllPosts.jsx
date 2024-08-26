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

export default async function AllPosts({ page }) {
  const { posts, count } = await getPosts(page);

  const POST_PER_PAGE = 12;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;
  return (
    <>
      <div className="space-y-10">
        <Heading>All Posts</Heading>
        <div className="space-y-5 ">
          {posts?.map((post) => (
            <div key={post.id} className="text-sm">
              {post.title}
            </div>
          ))}
        </div>
        <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
      </div>
    </>
  );
}
