import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInputSchema } from './LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInputSchema';
import { LabUpdateOneWithoutSponsoredTestsNestedInputSchema } from './LabUpdateOneWithoutSponsoredTestsNestedInputSchema';
import { SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInputSchema } from './SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInputSchema';
import { TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInputSchema } from './TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInputSchema';

export const SponsoredTestUpdateInputSchema: z.ZodType<Prisma.SponsoredTestUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  labTestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  casandraTestId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  category: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  subCategory: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrderSponsoredTestConsents: z.lazy(() => LabOrderSponsoredTestConsentUpdateManyWithoutSponsoredTestNestedInputSchema).optional(),
  lab: z.lazy(() => LabUpdateOneWithoutSponsoredTestsNestedInputSchema).optional(),
  sponsoredProgram: z.lazy(() => SponsoredProgramUpdateOneWithoutSponsoredTestsNestedInputSchema).optional(),
  testCatalog: z.lazy(() => TestCatalogUpdateOneRequiredWithoutSponsoredTestsNestedInputSchema).optional(),
});

export default SponsoredTestUpdateInputSchema;
