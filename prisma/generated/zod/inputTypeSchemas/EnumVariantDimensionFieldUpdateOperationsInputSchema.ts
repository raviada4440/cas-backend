import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { VariantDimensionSchema } from './VariantDimensionSchema';

export const EnumVariantDimensionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumVariantDimensionFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => VariantDimensionSchema).optional(),
});

export default EnumVariantDimensionFieldUpdateOperationsInputSchema;
