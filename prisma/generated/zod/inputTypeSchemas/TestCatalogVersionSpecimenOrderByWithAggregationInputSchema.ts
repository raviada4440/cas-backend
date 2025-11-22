import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestCatalogVersionSpecimenCountOrderByAggregateInputSchema } from './TestCatalogVersionSpecimenCountOrderByAggregateInputSchema';
import { TestCatalogVersionSpecimenAvgOrderByAggregateInputSchema } from './TestCatalogVersionSpecimenAvgOrderByAggregateInputSchema';
import { TestCatalogVersionSpecimenMaxOrderByAggregateInputSchema } from './TestCatalogVersionSpecimenMaxOrderByAggregateInputSchema';
import { TestCatalogVersionSpecimenMinOrderByAggregateInputSchema } from './TestCatalogVersionSpecimenMinOrderByAggregateInputSchema';
import { TestCatalogVersionSpecimenSumOrderByAggregateInputSchema } from './TestCatalogVersionSpecimenSumOrderByAggregateInputSchema';

export const TestCatalogVersionSpecimenOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  versionId: z.lazy(() => SortOrderSchema).optional(),
  displayName: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  isPrimary: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  specimenType: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specimenRequirements: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  volume: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  minimumVolume: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  container: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialInstructions: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternateContainers: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  preferredVolume: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collectionMethod: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collection: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  stabilityRequirements: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  storageTransportation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientPreparation: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  causesForRejection: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  processingNotes: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestCatalogVersionSpecimenCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestCatalogVersionSpecimenAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestCatalogVersionSpecimenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestCatalogVersionSpecimenMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestCatalogVersionSpecimenSumOrderByAggregateInputSchema).optional(),
});

export default TestCatalogVersionSpecimenOrderByWithAggregationInputSchema;
