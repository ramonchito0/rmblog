import AllPosts from "@/components/dashboard/AllPosts";

export default function DashboardAllPosts({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <AllPosts page={page} />
    </div>
  );
}
