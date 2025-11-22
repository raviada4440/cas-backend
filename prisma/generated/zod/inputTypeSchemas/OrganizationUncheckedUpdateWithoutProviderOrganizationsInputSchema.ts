import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './LabOrderUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { PatientOrganizationUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './PatientOrganizationUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { UserIdentityUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './UserIdentityUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { OrderFormSectionUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './OrderFormSectionUncheckedUpdateManyWithoutOrganizationNestedInputSchema';
import { OrderFormTemplateUncheckedUpdateManyWithoutOrganizationNestedInputSchema } from './OrderFormTemplateUncheckedUpdateManyWithoutOrganizationNestedInputSchema';

export const OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema: z.ZodType<Prisma.OrganizationUncheckedUpdateWithoutProviderOrganizationsInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  href: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentOrgName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgName: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgType: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgSpecialty: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgAddress: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgCity: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgState: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  orgZip: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  labOrders: z.lazy(() => LabOrderUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateUncheckedUpdateManyWithoutOrganizationNestedInputSchema).optional(),
});

export default OrganizationUncheckedUpdateWithoutProviderOrganizationsInputSchema;
