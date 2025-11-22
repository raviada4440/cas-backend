import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BiomarkerOverrideActionSchema } from './BiomarkerOverrideActionSchema';

export const EnumBiomarkerOverrideActionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBiomarkerOverrideActionFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => BiomarkerOverrideActionSchema).optional(),
});

export default EnumBiomarkerOverrideActionFieldUpdateOperationsInputSchema;
