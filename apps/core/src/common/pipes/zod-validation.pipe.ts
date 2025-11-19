import { createZodValidationPipe } from 'nestjs-zod'
import { ZodError } from 'zod'

import { PipeTransform, UnprocessableEntityException } from '@nestjs/common'

type AppZodValidationPipe = new (...args: any[]) => PipeTransform

export const ZodValidationPipe: AppZodValidationPipe = createZodValidationPipe({
  createValidationException: (error: ZodError) => {
    const issues = 'issues' in error ? error.issues : (error as any).errors
    const firstError = issues?.[0]
    if (!firstError) {
      return new UnprocessableEntityException(error.message)
    }
    if ('expected' in firstError) {
      const formatedErrorMessage: string = `Path \`${firstError.path}\` should be \`${firstError.expected}\`, but got \`${firstError.received}\``
      return new UnprocessableEntityException(formatedErrorMessage)
    }

    return new UnprocessableEntityException(`\`${firstError.path}\`: ${firstError.message}`)
  },
}) as AppZodValidationPipe
