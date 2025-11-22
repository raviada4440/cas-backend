import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { LabOrderAttachmentWhereInputSchema } from './LabOrderAttachmentWhereInputSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderNullableScalarRelationFilterSchema } from './LabOrderNullableScalarRelationFilterSchema';
import { LabOrderWhereInputSchema } from './LabOrderWhereInputSchema';
import { AttachmentNullableScalarRelationFilterSchema } from './AttachmentNullableScalarRelationFilterSchema';
import { AttachmentWhereInputSchema } from './AttachmentWhereInputSchema';

export const LabOrderAttachmentWhereUniqueInputSchema: z.ZodType<Prisma.LabOrderAttachmentWhereUniqueInput> = z.object({
  id: z.string(),
})
.and(z.strictObject({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => LabOrderAttachmentWhereInputSchema), z.lazy(() => LabOrderAttachmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderAttachmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderAttachmentWhereInputSchema), z.lazy(() => LabOrderAttachmentWhereInputSchema).array() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  attachmentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrder: z.union([ z.lazy(() => LabOrderNullableScalarRelationFilterSchema), z.lazy(() => LabOrderWhereInputSchema) ]).optional().nullable(),
  attachment: z.union([ z.lazy(() => AttachmentNullableScalarRelationFilterSchema), z.lazy(() => AttachmentWhereInputSchema) ]).optional().nullable(),
}));

export default LabOrderAttachmentWhereUniqueInputSchema;
