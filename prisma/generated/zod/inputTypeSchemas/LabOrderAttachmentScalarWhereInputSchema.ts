import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { UuidNullableFilterSchema } from './UuidNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const LabOrderAttachmentScalarWhereInputSchema: z.ZodType<Prisma.LabOrderAttachmentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => LabOrderAttachmentScalarWhereInputSchema), z.lazy(() => LabOrderAttachmentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => LabOrderAttachmentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => LabOrderAttachmentScalarWhereInputSchema), z.lazy(() => LabOrderAttachmentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  labOrderId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  attachmentId: z.union([ z.lazy(() => UuidNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
});

export default LabOrderAttachmentScalarWhereInputSchema;
