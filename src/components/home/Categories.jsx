import Image from "next/image";
import Link from "next/link";
import Heading from "../Heading";

const getCats = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("failed fetch categories");
  }

  return res.json();
};

export default async function Categories() {
  const categories = await getCats();
  return (
    <>
      <div>
        <Heading className="mb-10 text-center">Categories</Heading>
        <div className="gap-10 grid grid-cols-3 lg:grid-cols-5 text-center">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="block relative"
            >
              <Image
                src="/images/hero2.jpg"
                alt="Card image"
                width={280}
                height={128}
                className="h-full w-full object-cover rounded-lg"
              />
              <span className="absolute inset-0 top-0 flex items-center justify-center bg-secondary-foreground/60 dark:bg-background/60 text-primary-foreground rounded-lg transition-all hover:bg-secondary-foreground/80 dark:hover:bg-background/80 text-lg">
                {cat.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
