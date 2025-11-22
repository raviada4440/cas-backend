import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateManyWithoutOrderingProviderNestedInputSchema } from './LabOrderUpdateManyWithoutOrderingProviderNestedInputSchema';
import { LabOrderUpdateManyWithoutTreatingProviderNestedInputSchema } from './LabOrderUpdateManyWithoutTreatingProviderNestedInputSchema';
import { UserAttributeUpdateOneWithoutProviderNestedInputSchema } from './UserAttributeUpdateOneWithoutProviderNestedInputSchema';
import { ProviderEducationUpdateManyWithoutProviderNestedInputSchema } from './ProviderEducationUpdateManyWithoutProviderNestedInputSchema';
import { ProviderOrganizationUpdateManyWithoutProviderNestedInputSchema } from './ProviderOrganizationUpdateManyWithoutProviderNestedInputSchema';

export const ProviderUpdateWithoutProviderFavoriteTestsInputSchema: z.ZodType<Prisma.ProviderUpdateWithoutProviderFavoriteTestsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  npi: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  firstName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  lastName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  credentials: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialty: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  aboutme: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  gender: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  providerType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  affiliation: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  proceduresAndResearch: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialInterests: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  orderingProviderLabOrders: z.lazy(() => LabOrderUpdateManyWithoutOrderingProviderNestedInputSchema).optional(),
  treatingProviderLabOrders: z.lazy(() => LabOrderUpdateManyWithoutTreatingProviderNestedInputSchema).optional(),
  userAttribute: z.lazy(() => UserAttributeUpdateOneWithoutProviderNestedInputSchema).optional(),
  providerEducation: z.lazy(() => ProviderEducationUpdateManyWithoutProviderNestedInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationUpdateManyWithoutProviderNestedInputSchema).optional(),
});

export default ProviderUpdateWithoutProviderFavoriteTestsInputSchema;
