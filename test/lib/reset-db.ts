import { prisma } from './prisma'

const TABLES = ['"Biomarker"', '"User"']

// eslint-disable-next-line import/no-default-export
export default async () => {
  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${TABLES.join(', ')} RESTART IDENTITY CASCADE`)
}
