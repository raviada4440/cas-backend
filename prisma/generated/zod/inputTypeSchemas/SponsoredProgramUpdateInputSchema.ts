import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { SponsorUpdateOneWithoutSponsoredProgramsNestedInputSchema } from './SponsorUpdateOneWithoutSponsoredProgramsNestedInputSchema';
import { SponsoredTestUpdateManyWithoutSponsoredProgramNestedInputSchema } from './SponsoredTestUpdateManyWithoutSponsoredProgramNestedInputSchema';

export const SponsoredProgramUpdateInputSchema: z.ZodType<Prisma.SponsoredProgramUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  therapeuticArea: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  programName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  programUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  programLabUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sponsoredTestingUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  programEligibility: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  sponsor: z.lazy(() => SponsorUpdateOneWithoutSponsoredProgramsNestedInputSchema).optional(),
  sponsoredTests: z.lazy(() => SponsoredTestUpdateManyWithoutSponsoredProgramNestedInputSchema).optional(),
});

export default SponsoredProgramUpdateInputSchema;
