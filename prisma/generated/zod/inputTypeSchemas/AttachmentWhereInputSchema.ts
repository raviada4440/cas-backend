import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { LabOrderAttachmentListRelationFilterSchema } from './LabOrderAttachmentListRelationFilterSchema';

export const AttachmentWhereInputSchema: z.ZodType<Prisma.AttachmentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => AttachmentWhereInputSchema), z.lazy(() => AttachmentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AttachmentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AttachmentWhereInputSchema), z.lazy(() => AttachmentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  attachmentType: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  attachmentUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  fileName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  fileType: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  fileSize: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  fileExt: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  bucketName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  storageKey: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  url: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  previewUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  labOrderAttachments: z.lazy(() => LabOrderAttachmentListRelationFilterSchema).optional(),
});

export default AttachmentWhereInputSchema;
