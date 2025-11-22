import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AttachmentWhereInputSchema } from './AttachmentWhereInputSchema';

export const AttachmentNullableScalarRelationFilterSchema: z.ZodType<Prisma.AttachmentNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => AttachmentWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AttachmentWhereInputSchema).optional().nullable(),
});

export default AttachmentNullableScalarRelationFilterSchema;
