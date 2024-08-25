const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Delete all comments
  await prisma.comment.deleteMany({});

  // Delete all posts
  await prisma.post.deleteMany({});

  // Delete all featured posts
  await prisma.featuredPost.deleteMany({});

  // Delete all categories
  await prisma.category.deleteMany({});

  // Delete all users
  await prisma.user.deleteMany({});

  console.log("All previous data has been removed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
