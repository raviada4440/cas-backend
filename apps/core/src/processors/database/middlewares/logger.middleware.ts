// @copy https://github.com/notiz-dev/nestjs-prisma/blob/main/lib/logging.middleware.ts
import { Prisma } from '@db/client'
import { Logger } from '@nestjs/common'

export interface LoggingMiddlewareOptions {
  logger: Console | Logger
  logLevel: 'log' | 'debug' | 'warn' | 'error'
  /**
   * Create a custom log message.
   */
  logMessage?: (query: QueryInfo) => string
}

export interface QueryInfo {
  /**
   * The queried prisma model.
   */
  model: string
  /**
   * The performed action on the model e.g. `create`, `findUnique`.
   */
  action: string
  /**
   * Time `Date.now()` before the query execution.
   *
   */
  before: number
  /**
   * Time `Date.now()` after the query execution.
   */
  after: number
  /**
   * Execution time of the query in milliseconds.
   */
  executionTime: number
}

export const createLoggingExtension = (
  { logger, logMessage, logLevel }: LoggingMiddlewareOptions = {
    logger: console,
    logLevel: 'debug',
  },
) =>
  Prisma.defineExtension({
    name: 'prisma-logging',
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          const before = Date.now()

          const result = query(args)
          const modelName = model ?? 'unknown'
          const actionName = operation ?? 'unknown'

          const pendingResult = result as PromiseLike<unknown> | undefined
          if (pendingResult && typeof pendingResult.then === 'function') {
            return pendingResult.then((value) => {
              logQuery({
                model: modelName,
                action: actionName,
                before,
                logger,
                logLevel,
                logMessage,
              })
              return value
            })
          }

          logQuery({
            model: modelName,
            action: actionName,
            before,
            logger,
            logLevel,
            logMessage,
          })
          return result
        },
      },
    },
  })

const logQuery = ({
  model,
  action,
  before,
  logger,
  logLevel,
  logMessage,
}: {
  model: string
  action: string
  before: number
  logger: Console | Logger
  logLevel: LoggingMiddlewareOptions['logLevel']
  logMessage?: LoggingMiddlewareOptions['logMessage']
}) => {
  const after = Date.now()
  const executionTime = after - before

  if (logMessage) {
    logger[logLevel](
      logMessage({
        model,
        action,
        before,
        after,
        executionTime,
      }),
    )
    return
  }

  logger[logLevel](`Prisma Query ${model}.${action} took ${executionTime}ms`)
}
