import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInputSchema } from './BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInputSchema';

export const TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema: z.ZodType<Prisma.TestCatalogVersionBiomarkerUpdateWithoutVersionInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  transcriptReference: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  biomarker: z.lazy(() => BiomarkerUpdateOneRequiredWithoutTestBiomarkersNestedInputSchema).optional(),
});

export default TestCatalogVersionBiomarkerUpdateWithoutVersionInputSchema;
