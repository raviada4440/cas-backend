import { Prisma } from '@db/client'

export function resourceNotFoundWrapper(desiredErr: Error) {
  return (err: any) => {
    if (
      (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') ||
      err?.code === 'P2025'
    )
      throw desiredErr

    throw err
  }
}
