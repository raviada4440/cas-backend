import { isDev } from '@core/global/env.global'
import { PaginationResult } from '@core/shared/interface/paginator.interface'
import { Prisma, PrismaClient } from '@db/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { PoolConfig } from 'pg'
import { Logger } from '@nestjs/common'

import { createLoggingExtension, QueryInfo } from './middlewares/logger.middleware'

export const createExtendedPrismaClient = ({ url }: { url?: string } = {}): PrismaClient => {
  if (!process.env.PRISMA_CLIENT_ENGINE_TYPE) {
    process.env.PRISMA_CLIENT_ENGINE_TYPE = 'library'
  }

  const connectionString = url ?? process.env.DATABASE_URL
  if (!connectionString) {
    throw new Error('DATABASE_URL is not defined')
  }

  const poolConfig: PoolConfig = { connectionString }
  const adapter = new PrismaPg(poolConfig)

  const baseClient = new PrismaClient({
    adapter,
    __internal: {
      configOverride: (config) => {
        const nextConfig = { ...config }
        nextConfig.datasources = {
          ...(config.datasources ?? {}),
          db: {
            ...(config.datasources?.db ?? {}),
            url: connectionString,
          },
        }
        return nextConfig
      },
    },
  } as Prisma.PrismaClientOptions)
  const loggingExtension = createLoggingExtension({
    logger: new Logger('Prisma'),
    logLevel: 'log', // default is `debug`
    logMessage: (query: QueryInfo) =>
      `[Query] ${query.model}.${query.action} - ${query.executionTime}ms`,
  })

  const withLogging = isDev
    ? (baseClient.$extends(loggingExtension) as unknown as PrismaClient)
    : baseClient

  const extendedPrismaClient = (withLogging as unknown as PrismaClient).$extends({
    model: {
      $allModels: {
        async paginate(
          this: unknown,
          x: Prisma.Exact<unknown, unknown>,
          options: {
            page: number
            size: number
          },
        ): Promise<PaginationResult<unknown>> {
          if (typeof x !== 'object') {
            return {
              data: [],
              pagination: {
                total: 0,
                size: 0,
                totalPage: 0,
                currentPage: 0,

                hasNextPage: false,
                hasPrevPage: false,
              },
            }
          }

          const { page, size: perPage } = options
          const skip = page > 0 ? perPage * (page - 1) : 0
          const normalizedArgs = x as { where?: Record<string, unknown> }
          const countArgs =
            typeof normalizedArgs.where !== 'undefined' ? { where: normalizedArgs.where } : {}
          const [total, data] = await Promise.all([
            (this as any).count(countArgs),
            (this as any).findMany({
              ...x,
              take: perPage,
              skip,

              // @ts-ignore
              orderBy: x.orderBy,
              // @ts-ignore
              include: x.include,
            }),
          ])

          const lastPage = Math.ceil(total / perPage)

          return {
            data,
            pagination: {
              total,
              size: perPage,
              totalPage: lastPage,
              currentPage: page,
              hasNextPage: page < lastPage,
              hasPrevPage: page > 1,
            },
          } as PaginationResult<unknown>
        },
        async exists(this: unknown, x: Prisma.Exact<unknown, unknown>): Promise<boolean> {
          if (typeof x !== 'object') {
            return false
          }
          if (!('where' in x)) {
            return false
          }
          const record = await (this as any).findFirst({
            where: x.where,
            select: { id: true },
          })

          return Boolean(record)
        },
      },
    },
  })

  return extendedPrismaClient as unknown as PrismaClient
}
export type extendedPrismaClient = ReturnType<typeof createExtendedPrismaClient>
