import { prisma } from './prisma'

const TABLES = ['"ApiToken"', '"OAuth"', '"User"']

// eslint-disable-next-line import/no-default-export
export default async () => {
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${TABLES.join(', ')} RESTART IDENTITY CASCADE`)
}
