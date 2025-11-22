import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { LabOrderUpdateManyWithoutOrganizationNestedInputSchema } from './LabOrderUpdateManyWithoutOrganizationNestedInputSchema';
import { OrganizationFavoriteTestUpdateManyWithoutOrganizationNestedInputSchema } from './OrganizationFavoriteTestUpdateManyWithoutOrganizationNestedInputSchema';
import { PatientOrganizationUpdateManyWithoutOrganizationNestedInputSchema } from './PatientOrganizationUpdateManyWithoutOrganizationNestedInputSchema';
import { ProviderOrganizationUpdateManyWithoutOrganizationNestedInputSchema } from './ProviderOrganizationUpdateManyWithoutOrganizationNestedInputSchema';
import { OrganizationEndpointUpdateManyWithoutOrganizationNestedInputSchema } from './OrganizationEndpointUpdateManyWithoutOrganizationNestedInputSchema';
import { UserIdentityUpdateManyWithoutOrganizationNestedInputSchema } from './UserIdentityUpdateManyWithoutOrganizationNestedInputSchema';
import { OrderFormSectionUpdateManyWithoutOrganizationNestedInputSchema } from './OrderFormSectionUpdateManyWithoutOrganizationNestedInputSchema';
import { OrderFormTemplateUpdateManyWithoutOrganizationNestedInputSchema } from './OrderFormTemplateUpdateManyWithoutOrganizationNestedInputSchema';

export const OrganizationUpdateInputSchema: z.ZodType<Prisma.OrganizationUpdateInput> = z.strictObject({
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
  labOrders: z.lazy(() => LabOrderUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  organizationFavoriteTests: z.lazy(() => OrganizationFavoriteTestUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  patientOrganizations: z.lazy(() => PatientOrganizationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  providerOrganizations: z.lazy(() => ProviderOrganizationUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  organizationEndpoints: z.lazy(() => OrganizationEndpointUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  userIdentities: z.lazy(() => UserIdentityUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  orderFormSections: z.lazy(() => OrderFormSectionUpdateManyWithoutOrganizationNestedInputSchema).optional(),
  orderFormTemplates: z.lazy(() => OrderFormTemplateUpdateManyWithoutOrganizationNestedInputSchema).optional(),
});

export default OrganizationUpdateInputSchema;
