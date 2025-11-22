import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ReviewThreadScalarWhereInputSchema } from './ReviewThreadScalarWhereInputSchema';
import { ReviewThreadUpdateManyMutationInputSchema } from './ReviewThreadUpdateManyMutationInputSchema';
import { ReviewThreadUncheckedUpdateManyWithoutVersionInputSchema } from './ReviewThreadUncheckedUpdateManyWithoutVersionInputSchema';

export const ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema: z.ZodType<Prisma.ReviewThreadUpdateManyWithWhereWithoutVersionInput> = z.strictObject({
  where: z.lazy(() => ReviewThreadScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewThreadUpdateManyMutationInputSchema), z.lazy(() => ReviewThreadUncheckedUpdateManyWithoutVersionInputSchema) ]),
});

export default ReviewThreadUpdateManyWithWhereWithoutVersionInputSchema;
