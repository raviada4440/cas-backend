import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { AttachmentCountOrderByAggregateInputSchema } from './AttachmentCountOrderByAggregateInputSchema';
import { AttachmentAvgOrderByAggregateInputSchema } from './AttachmentAvgOrderByAggregateInputSchema';
import { AttachmentMaxOrderByAggregateInputSchema } from './AttachmentMaxOrderByAggregateInputSchema';
import { AttachmentMinOrderByAggregateInputSchema } from './AttachmentMinOrderByAggregateInputSchema';
import { AttachmentSumOrderByAggregateInputSchema } from './AttachmentSumOrderByAggregateInputSchema';

export const AttachmentOrderByWithAggregationInputSchema: z.ZodType<Prisma.AttachmentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  attachmentType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  attachmentUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  fileName: z.lazy(() => SortOrderSchema).optional(),
  fileType: z.lazy(() => SortOrderSchema).optional(),
  fileSize: z.lazy(() => SortOrderSchema).optional(),
  fileExt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  bucketName: z.lazy(() => SortOrderSchema).optional(),
  storageKey: z.lazy(() => SortOrderSchema).optional(),
  url: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  previewUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AttachmentCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AttachmentAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AttachmentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AttachmentMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AttachmentSumOrderByAggregateInputSchema).optional(),
});

export default AttachmentOrderByWithAggregationInputSchema;
