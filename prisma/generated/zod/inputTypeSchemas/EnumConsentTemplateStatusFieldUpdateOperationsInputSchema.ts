import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ConsentTemplateStatusSchema } from './ConsentTemplateStatusSchema';

export const EnumConsentTemplateStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumConsentTemplateStatusFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ConsentTemplateStatusSchema).optional(),
});

export default EnumConsentTemplateStatusFieldUpdateOperationsInputSchema;
