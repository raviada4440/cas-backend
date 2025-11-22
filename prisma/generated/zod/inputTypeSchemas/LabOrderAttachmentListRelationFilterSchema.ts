import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereInputSchema } from './LabOrderAttachmentWhereInputSchema';

export const LabOrderAttachmentListRelationFilterSchema: z.ZodType<Prisma.LabOrderAttachmentListRelationFilter> = z.strictObject({
  every: z.lazy(() => LabOrderAttachmentWhereInputSchema).optional(),
  some: z.lazy(() => LabOrderAttachmentWhereInputSchema).optional(),
  none: z.lazy(() => LabOrderAttachmentWhereInputSchema).optional(),
});

export default LabOrderAttachmentListRelationFilterSchema;
