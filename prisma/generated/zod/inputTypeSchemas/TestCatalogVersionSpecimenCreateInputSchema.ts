import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { TestCatalogVersionCreateNestedOneWithoutSpecimensInputSchema } from './TestCatalogVersionCreateNestedOneWithoutSpecimensInputSchema';
import { TestConfigSpecimenManifestCreateNestedManyWithoutVersionSpecimenInputSchema } from './TestConfigSpecimenManifestCreateNestedManyWithoutVersionSpecimenInputSchema';

export const TestCatalogVersionSpecimenCreateInputSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenCreateInput> = z.strictObject({
  id: z.string().optional(),
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
  version: z.lazy(() => TestCatalogVersionCreateNestedOneWithoutSpecimensInputSchema),
  variantManifests: z.lazy(() => TestConfigSpecimenManifestCreateNestedManyWithoutVersionSpecimenInputSchema).optional(),
});

export default TestCatalogVersionSpecimenCreateInputSchema;
