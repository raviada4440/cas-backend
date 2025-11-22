import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TestCatalogVersionBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema } from './TestCatalogVersionBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema';
import { TestConfigBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema } from './TestConfigBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema';

export const BiomarkerUpdateInputSchema: z.ZodType<Prisma.BiomarkerUpdateInput> = z.strictObject({
  hgncId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  hgncStatus: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hgncApprovedSymbol: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  hgncApprovedName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  testBiomarkers: z.lazy(() => TestCatalogVersionBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema).optional(),
  configOverrides: z.lazy(() => TestConfigBiomarkerUpdateManyWithoutBiomarkerNestedInputSchema).optional(),
});

export default BiomarkerUpdateInputSchema;
