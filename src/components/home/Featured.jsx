import React from "react";
import Card from "../Card";
import Heading from "../Heading";

const getFeatured = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/featured?slug=${slug}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed fetch featured posts");
  }

  return res.json();
};

export default async function Featured({ slug }) {
  const data = await getFeatured(slug);

  return (
    <>
      {data.map((post) => (
        <div className="text-center" key={post.id}>
          <Heading className="mb-10">{post.name}</Heading>

          <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-2 lg:grid-cols-4">
            {post.posts.map((item, index) => (
              <React.Fragment key={item.id}>
                {index === 0 ? (
                  <div className="lg:col-span-2 lg:row-span-2">
                    <Card post={item} big={true} />
                  </div>
                ) : (
                  <Card post={item} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
