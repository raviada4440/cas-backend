import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema } from './OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema';
import { PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema } from './PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema';

export const PatientOrganizationUpdateInputSchema: z.ZodType<Prisma.PatientOrganizationUpdateInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  mrn: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  mobile: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  organization: z.lazy(() => OrganizationUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema).optional(),
  patient: z.lazy(() => PatientUpdateOneRequiredWithoutPatientOrganizationsNestedInputSchema).optional(),
});

export default PatientOrganizationUpdateInputSchema;
