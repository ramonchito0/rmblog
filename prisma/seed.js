const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create Users
  const user1 = await prisma.user.create({
    data: {
      email: "user1@example.com",
      name: "John Doe",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "user2@example.com",
      name: "Jane Doe",
    },
  });

  // Create Categories
  const technology = await prisma.category.create({
    data: {
      slug: "technology",
      title: "Technology",
      img: "/images/hero2.jpg",
    },
  });

  const sports = await prisma.category.create({
    data: {
      slug: "sports",
      title: "Sports",
      img: "/images/hero2.jpg",
    },
  });

  const travel = await prisma.category.create({
    data: {
      slug: "travel",
      title: "Travel",
      img: "/images/hero2.jpg",
    },
  });

  const health = await prisma.category.create({
    data: {
      slug: "health",
      title: "Health",
      img: "/images/hero2.jpg",
    },
  });

  const food = await prisma.category.create({
    data: {
      slug: "food",
      title: "Food",
      img: "/images/hero2.jpg",
    },
  });

  // Create 6 Posts
  const posts = await prisma.post.createMany({
    data: [
      {
        slug: "first-tech-post",
        title: "First Technology Post",
        excerpt: "This is the first technology post excerpt.",
        desc: "This is the full description of the first technology post.",
        img: "/images/hero2.jpg",
        views: 10,
        catSlug: technology.slug,
        userEmail: user1.email,
      },
      {
        slug: "second-tech-post",
        title: "Second Technology Post",
        excerpt: "This is the second technology post excerpt.",
        desc: "This is the full description of the second technology post.",
        img: "/images/hero2.jpg",
        views: 15,
        catSlug: technology.slug,
        userEmail: user2.email,
      },
      {
        slug: "first-sports-post",
        title: "First Sports Post",
        excerpt: "This is the first sports post excerpt.",
        desc: "This is the full description of the first sports post.",
        img: "/images/hero2.jpg",
        views: 8,
        catSlug: sports.slug,
        userEmail: user1.email,
      },
      {
        slug: "second-travel-post",
        title: "Second Travel Post",
        excerpt: "This is the second travel post excerpt.",
        desc: "This is the full description of the second travel post.",
        img: "/images/hero2.jpg",
        views: 5,
        catSlug: travel.slug,
        userEmail: user2.email,
      },
      {
        slug: "first-health-post",
        title: "First Health Post",
        excerpt: "This is the first health post excerpt.",
        desc: "This is the full description of the first health post.",
        img: "/images/hero2.jpg",
        views: 20,
        catSlug: health.slug,
        userEmail: user1.email,
      },
      {
        slug: "first-food-post",
        title: "First Food Post",
        excerpt: "This is the first food post excerpt.",
        desc: "This is the full description of the first food post.",
        img: "/images/hero2.jpg",
        views: 12,
        catSlug: food.slug,
        userEmail: user2.email,
      },
    ],
  });

  console.log({
    user1,
    user2,
    technology,
    sports,
    travel,
    health,
    food,
    posts,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
