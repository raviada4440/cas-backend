import { PrismaClient } from './client'
import { randomUUID } from 'node:crypto'

const prisma = new PrismaClient()

// bcrypt hash for the password `admin123`
const DEFAULT_PASSWORD_HASH =
  '$2b$10$TKh8H1.P6kZ5A7iI7sYUXeFwh9uH0I1GtIsfN0Z6kNKOqPHe8R/2K'

const categoriesSeed = [
  { id: 'category-technology', name: 'Technology', slug: 'technology' },
  { id: 'category-lifestyle', name: 'Lifestyle', slug: 'lifestyle' },
  { id: 'category-random', name: 'Random Thoughts', slug: 'random-thoughts' },
]

const tagsSeed = [
  { id: 'tag-nestjs', name: 'nestjs' },
  { id: 'tag-prisma', name: 'prisma' },
  { id: 'tag-typescript', name: 'typescript' },
]

const postsSeed = [
  {
    id: 'post-hello-world',
    slug: 'hello-world',
    title: 'Welcome to the API',
    text: `This is a sample post created by prisma/seed.ts. You can remove it once you have real data.`,
    categorySlug: 'technology',
  },
  {
    id: 'post-infra-notes',
    slug: 'infrastructure-notes',
    title: 'Infrastructure Notes',
    text: `NestJS + Prisma + Redis are ready to go. Replace this with your own content.`,
    categorySlug: 'lifestyle',
  },
  {
    id: 'post-random-musings',
    slug: 'random-musings',
    title: 'Random Musings',
    text: `Another placeholder entry to demonstrate relations between posts and categories.`,
    categorySlug: 'random-thoughts',
  },
]

async function main() {
  const adminUserId = 'user-admin'

  await prisma.user.upsert({
    where: { id: adminUserId },
    update: {
      name: 'Administrator',
      username: 'admin',
      password: DEFAULT_PASSWORD_HASH,
      introduce: 'Default admin account seeded via prisma/seed.ts',
    },
    create: {
      id: adminUserId,
      username: 'admin',
      name: 'Administrator',
      password: DEFAULT_PASSWORD_HASH,
      introduce: 'Default admin account seeded via prisma/seed.ts',
      mail: 'admin@example.com',
      url: 'https://example.com',
    },
  })

  const categoryRecords = await Promise.all(
    categoriesSeed.map((category) =>
      prisma.category.upsert({
        where: { id: category.id },
        update: {
          name: category.name,
          slug: category.slug,
        },
        create: category,
      }),
    ),
  )

  await Promise.all(
    tagsSeed.map((tag) =>
      prisma.tag.upsert({
        where: { id: tag.id },
        update: { name: tag.name },
        create: tag,
      }),
    ),
  )

  const categoryBySlug = new Map<string, (typeof categoryRecords)[number]>(
    categoryRecords.map((category) => [category.slug, category]),
  )

  for (const post of postsSeed) {
    const category = categoryBySlug.get(post.categorySlug)
    if (!category) {
      console.warn(
        `Skipping post "${post.slug}" because category "${post.categorySlug}" was not found.`,
      )
      continue
    }

    await prisma.post.upsert({
      where: { id: post.id },
      update: {
        slug: post.slug,
        title: post.title,
        text: post.text,
        categoryId: category.id,
      },
      create: {
        id: post.id,
        slug: post.slug,
        title: post.title,
        text: post.text,
        categoryId: category.id,
      },
    })
  }

  await prisma.apiToken.upsert({
    where: { id: 'seed-token-admin' },
    update: {
      name: 'seed-token-admin',
      token: randomUUID(),
      userId: adminUserId,
    },
    create: {
      id: 'seed-token-admin',
      name: 'seed-token-admin',
      token: randomUUID(),
      userId: adminUserId,
    },
  })

  await prisma.oAuth.upsert({
    where: { id: 'seed-oauth-admin' },
    update: {
      platform: 'seed',
      oauthId: 'seed-oauth-admin',
      userId: adminUserId,
    },
    create: {
      id: 'seed-oauth-admin',
      platform: 'seed',
      oauthId: 'seed-oauth-admin',
      userId: adminUserId,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (error) => {
    console.error('Seeding failed:', error)
    await prisma.$disconnect()
    process.exit(1)
  })

