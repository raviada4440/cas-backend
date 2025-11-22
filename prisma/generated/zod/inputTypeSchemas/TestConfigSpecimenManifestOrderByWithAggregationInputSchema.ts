import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TestConfigSpecimenManifestCountOrderByAggregateInputSchema } from './TestConfigSpecimenManifestCountOrderByAggregateInputSchema';
import { TestConfigSpecimenManifestAvgOrderByAggregateInputSchema } from './TestConfigSpecimenManifestAvgOrderByAggregateInputSchema';
import { TestConfigSpecimenManifestMaxOrderByAggregateInputSchema } from './TestConfigSpecimenManifestMaxOrderByAggregateInputSchema';
import { TestConfigSpecimenManifestMinOrderByAggregateInputSchema } from './TestConfigSpecimenManifestMinOrderByAggregateInputSchema';
import { TestConfigSpecimenManifestSumOrderByAggregateInputSchema } from './TestConfigSpecimenManifestSumOrderByAggregateInputSchema';

export const TestConfigSpecimenManifestOrderByWithAggregationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  versionSpecimenId: z.lazy(() => SortOrderSchema).optional(),
  participantRole: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  specimenTypeOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specimenDisplayNameOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  volumeOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  minimumVolumeOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  preferredVolumeOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  alternateContainersOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  containerOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specialInstructionsOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collectionMethodOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  specimenRequirementsOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  collectionOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  stabilityRequirementsOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  storageTransportationOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  patientPreparationOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  causesForRejectionOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  processingNotesOverride: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  displayOrder: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TestConfigSpecimenManifestCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TestConfigSpecimenManifestAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TestConfigSpecimenManifestMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TestConfigSpecimenManifestMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TestConfigSpecimenManifestSumOrderByAggregateInputSchema).optional(),
});

export default TestConfigSpecimenManifestOrderByWithAggregationInputSchema;
