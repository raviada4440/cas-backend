import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const LabOrderSpecimenCountOrderByAggregateInputSchema: z.ZodType<Prisma.LabOrderSpecimenCountOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  labOrderId: z.lazy(() => SortOrderSchema).optional(),
  specimenType: z.lazy(() => SortOrderSchema).optional(),
  specimenCount: z.lazy(() => SortOrderSchema).optional(),
  collectedDate: z.lazy(() => SortOrderSchema).optional(),
  collectedTime: z.lazy(() => SortOrderSchema).optional(),
  specimenId: z.lazy(() => SortOrderSchema).optional(),
  bodySite: z.lazy(() => SortOrderSchema).optional(),
  tumorType: z.lazy(() => SortOrderSchema).optional(),
  fixative: z.lazy(() => SortOrderSchema).optional(),
  fixativeDuration: z.lazy(() => SortOrderSchema).optional(),
  coldIschemicTime: z.lazy(() => SortOrderSchema).optional(),
  patientAddress1: z.lazy(() => SortOrderSchema).optional(),
  patientAddress2: z.lazy(() => SortOrderSchema).optional(),
  patientCity: z.lazy(() => SortOrderSchema).optional(),
  patientState: z.lazy(() => SortOrderSchema).optional(),
  patientZip: z.lazy(() => SortOrderSchema).optional(),
  pscLab: z.lazy(() => SortOrderSchema).optional(),
  pscLocation: z.lazy(() => SortOrderSchema).optional(),
  pscAppointmentAt: z.lazy(() => SortOrderSchema).optional(),
  pscAppointmentTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default LabOrderSpecimenCountOrderByAggregateInputSchema;
