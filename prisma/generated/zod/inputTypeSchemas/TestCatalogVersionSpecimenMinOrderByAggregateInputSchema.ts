import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestCatalogVersionSpecimenMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.lazy(() => SortOrderSchema).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  specimenType: z.lazy(() => SortOrderSchema).optional(),
  specimenRequirements: z.lazy(() => SortOrderSchema).optional(),
  volume: z.lazy(() => SortOrderSchema).optional(),
  minimumVolume: z.lazy(() => SortOrderSchema).optional(),
  container: z.lazy(() => SortOrderSchema).optional(),
  specialInstructions: z.lazy(() => SortOrderSchema).optional(),
  alternateContainers: z.lazy(() => SortOrderSchema).optional(),
  preferredVolume: z.lazy(() => SortOrderSchema).optional(),
  collectionMethod: z.lazy(() => SortOrderSchema).optional(),
  collection: z.lazy(() => SortOrderSchema).optional(),
  stabilityRequirements: z.lazy(() => SortOrderSchema).optional(),
  storageTransportation: z.lazy(() => SortOrderSchema).optional(),
  patientPreparation: z.lazy(() => SortOrderSchema).optional(),
  causesForRejection: z.lazy(() => SortOrderSchema).optional(),
  processingNotes: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestCatalogVersionSpecimenMinOrderByAggregateInputSchema;
