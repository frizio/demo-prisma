import { DATABASE_URL } from './config';
import { PrismaClient } from "@prisma/client";

async function main() {
  
  console.log('Demo Prisma ORM with SQLITE provider');
  console.log(DATABASE_URL)
  console.log(' ');

  
  const prisma = new PrismaClient();
  try {
    const posts = await prisma.post.findMany();
    console.log({ posts });
  } finally {
    prisma.$disconnect();
  }

}

main();