import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UuidFilterSchema } from './UuidFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { TestCatalogVersionScalarRelationFilterSchema } from './TestCatalogVersionScalarRelationFilterSchema';
import { TestCatalogVersionWhereInputSchema } from './TestCatalogVersionWhereInputSchema';
import { ReviewCommentListRelationFilterSchema } from './ReviewCommentListRelationFilterSchema';

export const ReviewThreadWhereInputSchema: z.ZodType<Prisma.ReviewThreadWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ReviewThreadWhereInputSchema), z.lazy(() => ReviewThreadWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewThreadWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewThreadWhereInputSchema), z.lazy(() => ReviewThreadWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  versionId: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdBy: z.union([ z.lazy(() => UuidFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.date() ]).optional(),
  resolvedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.date() ]).optional().nullable(),
  title: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  version: z.union([ z.lazy(() => TestCatalogVersionScalarRelationFilterSchema), z.lazy(() => TestCatalogVersionWhereInputSchema) ]).optional(),
  comments: z.lazy(() => ReviewCommentListRelationFilterSchema).optional(),
});

export default ReviewThreadWhereInputSchema;
