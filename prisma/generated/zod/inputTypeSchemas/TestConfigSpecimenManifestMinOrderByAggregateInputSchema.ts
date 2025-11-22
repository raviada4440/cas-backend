import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TestConfigSpecimenManifestMinOrderByAggregateInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  configurationId: z.lazy(() => SortOrderSchema).optional(),
  versionSpecimenId: z.lazy(() => SortOrderSchema).optional(),
  participantRole: z.lazy(() => SortOrderSchema).optional(),
  isRequired: z.lazy(() => SortOrderSchema).optional(),
  specimenTypeOverride: z.lazy(() => SortOrderSchema).optional(),
  specimenDisplayNameOverride: z.lazy(() => SortOrderSchema).optional(),
  volumeOverride: z.lazy(() => SortOrderSchema).optional(),
  minimumVolumeOverride: z.lazy(() => SortOrderSchema).optional(),
  preferredVolumeOverride: z.lazy(() => SortOrderSchema).optional(),
  alternateContainersOverride: z.lazy(() => SortOrderSchema).optional(),
  containerOverride: z.lazy(() => SortOrderSchema).optional(),
  specialInstructionsOverride: z.lazy(() => SortOrderSchema).optional(),
  collectionMethodOverride: z.lazy(() => SortOrderSchema).optional(),
  specimenRequirementsOverride: z.lazy(() => SortOrderSchema).optional(),
  collectionOverride: z.lazy(() => SortOrderSchema).optional(),
  stabilityRequirementsOverride: z.lazy(() => SortOrderSchema).optional(),
  storageTransportationOverride: z.lazy(() => SortOrderSchema).optional(),
  patientPreparationOverride: z.lazy(() => SortOrderSchema).optional(),
  causesForRejectionOverride: z.lazy(() => SortOrderSchema).optional(),
  processingNotesOverride: z.lazy(() => SortOrderSchema).optional(),
  displayOrder: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default TestConfigSpecimenManifestMinOrderByAggregateInputSchema;
