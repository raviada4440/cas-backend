import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';

export const NullableEnumSpecimenTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumSpecimenTypeFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
});

export default NullableEnumSpecimenTypeFieldUpdateOperationsInputSchema;
