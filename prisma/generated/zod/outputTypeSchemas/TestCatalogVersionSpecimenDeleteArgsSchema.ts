import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogVersionSpecimenIncludeSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenIncludeSchema'
import { TestCatalogVersionSpecimenWhereUniqueInputSchema } from '../inputTypeSchemas/TestCatalogVersionSpecimenWhereUniqueInputSchema'
import { TestCatalogVersionArgsSchema } from "../outputTypeSchemas/TestCatalogVersionArgsSchema"
import { TestConfigSpecimenManifestFindManyArgsSchema } from "../outputTypeSchemas/TestConfigSpecimenManifestFindManyArgsSchema"
import { TestCatalogVersionSpecimenCountOutputTypeArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TestCatalogVersionSpecimenSelectSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenSelect> = z.object({
  id: z.boolean().optional(),
  versionId: z.boolean().optional(),
  displayName: z.boolean().optional(),
  isPrimary: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  specimenType: z.boolean().optional(),
  specimenRequirements: z.boolean().optional(),
  volume: z.boolean().optional(),
  minimumVolume: z.boolean().optional(),
  container: z.boolean().optional(),
  specialInstructions: z.boolean().optional(),
  alternateContainers: z.boolean().optional(),
  preferredVolume: z.boolean().optional(),
  collectionMethod: z.boolean().optional(),
  collection: z.boolean().optional(),
  stabilityRequirements: z.boolean().optional(),
  storageTransportation: z.boolean().optional(),
  patientPreparation: z.boolean().optional(),
  causesForRejection: z.boolean().optional(),
  processingNotes: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  version: z.union([z.boolean(),z.lazy(() => TestCatalogVersionArgsSchema)]).optional(),
  variantManifests: z.union([z.boolean(),z.lazy(() => TestConfigSpecimenManifestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TestCatalogVersionSpecimenDeleteArgsSchema: z.ZodType<Prisma.TestCatalogVersionSpecimenDeleteArgs> = z.object({
  select: TestCatalogVersionSpecimenSelectSchema.optional(),
  include: z.lazy(() => TestCatalogVersionSpecimenIncludeSchema).optional(),
  where: TestCatalogVersionSpecimenWhereUniqueInputSchema, 
}).strict();

export default TestCatalogVersionSpecimenDeleteArgsSchema;
