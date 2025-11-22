import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const NullableBoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableBoolFieldUpdateOperationsInput> = z.strictObject({
  set: z.boolean().optional().nullable(),
});

export default NullableBoolFieldUpdateOperationsInputSchema;
