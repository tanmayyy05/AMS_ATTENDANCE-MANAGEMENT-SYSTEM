import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function main() {
  console.log("🌱 Starting seeding...");

  // Create default roles
  const admin = await prisma.role.upsert({
    where: { name: 'ADMIN' },
    update: {},
    create: { name: 'ADMIN' },
  });

  const employee = await prisma.role.upsert({
    where: { name: 'EMPLOYEE' },
    update: {},
    create: { name: 'EMPLOYEE' },
  });

  console.log("✅ Seeding finished successfully:", { admin, employee });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("❌ Seeding error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });