import { Prisma } from '@db/client'

import { snowflake } from '../snowflake.util'

const assignId = (data: unknown) => {
  if (!data || typeof data !== 'object') {
    return
  }

  if (Array.isArray(data)) {
    data.forEach((item) => assignId(item))
    return
  }

  const record = data as Record<string, unknown>
  if (record.id === undefined) {
    record.id = snowflake.nextId()
  }
}

export const snowflakeExtension = Prisma.defineExtension({
  name: 'snowflake-generator',
  query: {
    $allModels: {
      async create({ args, query }) {
        assignId(args.data)
        return query(args)
      },
      async createMany({ args, query }) {
        assignId(args.data)
        return query(args)
      },
    },
  },
})
