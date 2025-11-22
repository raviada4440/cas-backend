import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ReviewThreadUpdateOneRequiredWithoutCommentsNestedInputSchema } from './ReviewThreadUpdateOneRequiredWithoutCommentsNestedInputSchema';

export const ReviewCommentUpdateInputSchema: z.ZodType<Prisma.ReviewCommentUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  body: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdBy: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  thread: z.lazy(() => ReviewThreadUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
});

export default ReviewCommentUpdateInputSchema;
