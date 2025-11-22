import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInputSchema } from './TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInputSchema';
import { ReviewCommentUpdateManyWithoutThreadNestedInputSchema } from './ReviewCommentUpdateManyWithoutThreadNestedInputSchema';

export const ReviewThreadUpdateInputSchema: z.ZodType<Prisma.ReviewThreadUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  resolvedAt: z.union([ z.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  version: z.lazy(() => TestCatalogVersionUpdateOneRequiredWithoutReviewThreadsNestedInputSchema).optional(),
  comments: z.lazy(() => ReviewCommentUpdateManyWithoutThreadNestedInputSchema).optional(),
});

export default ReviewThreadUpdateInputSchema;
