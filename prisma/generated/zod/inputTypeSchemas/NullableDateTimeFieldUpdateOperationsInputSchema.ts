import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const NullableDateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableDateTimeFieldUpdateOperationsInput> = z.strictObject({
  set: z.date().optional().nullable(),
});

export default NullableDateTimeFieldUpdateOperationsInputSchema;
