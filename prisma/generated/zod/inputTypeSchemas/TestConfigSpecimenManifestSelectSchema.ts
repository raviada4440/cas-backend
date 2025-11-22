import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TestCatalogConfigurationArgsSchema } from "../outputTypeSchemas/TestCatalogConfigurationArgsSchema"
import { TestCatalogVersionSpecimenArgsSchema } from "../outputTypeSchemas/TestCatalogVersionSpecimenArgsSchema"

export const TestConfigSpecimenManifestSelectSchema: z.ZodType<Prisma.TestConfigSpecimenManifestSelect> = z.object({
  id: z.boolean().optional(),
  configurationId: z.boolean().optional(),
  versionSpecimenId: z.boolean().optional(),
  participantRole: z.boolean().optional(),
  isRequired: z.boolean().optional(),
  specimenTypeOverride: z.boolean().optional(),
  specimenDisplayNameOverride: z.boolean().optional(),
  volumeOverride: z.boolean().optional(),
  minimumVolumeOverride: z.boolean().optional(),
  preferredVolumeOverride: z.boolean().optional(),
  alternateContainersOverride: z.boolean().optional(),
  containerOverride: z.boolean().optional(),
  specialInstructionsOverride: z.boolean().optional(),
  collectionMethodOverride: z.boolean().optional(),
  specimenRequirementsOverride: z.boolean().optional(),
  collectionOverride: z.boolean().optional(),
  stabilityRequirementsOverride: z.boolean().optional(),
  storageTransportationOverride: z.boolean().optional(),
  patientPreparationOverride: z.boolean().optional(),
  causesForRejectionOverride: z.boolean().optional(),
  processingNotesOverride: z.boolean().optional(),
  displayOrder: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  configuration: z.union([z.boolean(),z.lazy(() => TestCatalogConfigurationArgsSchema)]).optional(),
  versionSpecimen: z.union([z.boolean(),z.lazy(() => TestCatalogVersionSpecimenArgsSchema)]).optional(),
}).strict()

export default TestConfigSpecimenManifestSelectSchema;
