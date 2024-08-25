import ContentWrapper from "@/components/ContentWrapper";
import Categories from "@/components/home/Categories";
import Featured from "@/components/home/featured";
import Hero from "@/components/home/Hero";
import LatestPosts from "@/components/home/LatestPosts";

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <>
      <Hero />
      <ContentWrapper tag="main" className="space-y-20">
        <Featured slug="featured-posts" />
        <Categories />
        <LatestPosts page={page} />
      </ContentWrapper>
    </>
  );
}
