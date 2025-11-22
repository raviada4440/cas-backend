import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTypeSchema } from './ConsentTypeSchema';

export const EnumConsentTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumConsentTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ConsentTypeSchema).optional(),
});

export default EnumConsentTypeFieldUpdateOperationsInputSchema;
