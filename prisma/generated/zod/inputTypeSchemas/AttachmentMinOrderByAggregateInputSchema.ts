import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const AttachmentMinOrderByAggregateInputSchema: z.ZodType<Prisma.AttachmentMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  attachmentType: z.lazy(() => SortOrderSchema).optional(),
  attachmentUrl: z.lazy(() => SortOrderSchema).optional(),
  fileName: z.lazy(() => SortOrderSchema).optional(),
  fileType: z.lazy(() => SortOrderSchema).optional(),
  fileSize: z.lazy(() => SortOrderSchema).optional(),
  fileExt: z.lazy(() => SortOrderSchema).optional(),
  bucketName: z.lazy(() => SortOrderSchema).optional(),
  storageKey: z.lazy(() => SortOrderSchema).optional(),
  url: z.lazy(() => SortOrderSchema).optional(),
  previewUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default AttachmentMinOrderByAggregateInputSchema;
