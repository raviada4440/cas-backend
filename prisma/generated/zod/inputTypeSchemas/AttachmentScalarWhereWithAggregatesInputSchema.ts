import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidWithAggregatesFilterSchema } from './UuidWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const AttachmentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AttachmentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttachmentScalarWhereWithAggregatesInputSchema), z.lazy(() => AttachmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttachmentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttachmentScalarWhereWithAggregatesInputSchema), z.lazy(() => AttachmentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidWithAggregatesFilterSchema), z.string() ]).optional(),
  attachmentType: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  attachmentUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  fileName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  fileType: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  fileSize: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  fileExt: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  bucketName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  storageKey: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  previewUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.date() ]).optional(),
});

export default AttachmentScalarWhereWithAggregatesInputSchema;
