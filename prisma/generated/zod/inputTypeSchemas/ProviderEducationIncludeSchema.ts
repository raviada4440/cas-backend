import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProviderArgsSchema } from "../outputTypeSchemas/ProviderArgsSchema"

export const ProviderEducationIncludeSchema: z.ZodType<Prisma.ProviderEducationInclude> = z.object({
  provider: z.union([z.boolean(),z.lazy(() => ProviderArgsSchema)]).optional(),
}).strict();

export default ProviderEducationIncludeSchema;
