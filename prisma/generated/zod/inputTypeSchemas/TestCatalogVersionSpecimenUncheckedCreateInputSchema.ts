import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInputSchema';

export const TestCatalogVersionSpecimenUncheckedCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  versionId: z.string(),
  displayName: z.string().optional().nullable(),
  isPrimary: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  specimenType: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
  specimenRequirements: z.string().optional().nullable(),
  volume: z.string().optional().nullable(),
  minimumVolume: z.string().optional().nullable(),
  container: z.string().optional().nullable(),
  specialInstructions: z.string().optional().nullable(),
  alternateContainers: z.string().optional().nullable(),
  preferredVolume: z.string().optional().nullable(),
  collectionMethod: z.lazy(() => TestCatalogCollectionMethodSchema).optional().nullable(),
  collection: z.string().optional().nullable(),
  stabilityRequirements: z.string().optional().nullable(),
  storageTransportation: z.string().optional().nullable(),
  patientPreparation: z.string().optional().nullable(),
  causesForRejection: z.string().optional().nullable(),
  processingNotes: z.string().optional().nullable(),
  displayOrder: z.number().optional(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
  variantManifests: z.lazy(() => TestConfigSpecimenManifestUncheckedCreateNestedManyWithoutVersionSpecimenInputSchema).optional(),
});

export default TestCatalogVersionSpecimenUncheckedCreateInputSchema;
