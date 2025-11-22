import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';

export const TestConfigSpecimenManifestUncheckedCreateInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUncheckedCreateInput> = z.strictObject({
  id: z.string().optional(),
  configurationId: z.string(),
  versionSpecimenId: z.string(),
  participantRole: z.lazy(() => ParticipantRoleSchema),
  isRequired: z.boolean().optional(),
  specimenTypeOverride: z.lazy(() => SpecimenTypeSchema).optional().nullable(),
  specimenDisplayNameOverride: z.string().optional().nullable(),
  volumeOverride: z.string().optional().nullable(),
  minimumVolumeOverride: z.string().optional().nullable(),
  preferredVolumeOverride: z.string().optional().nullable(),
  alternateContainersOverride: z.string().optional().nullable(),
  containerOverride: z.string().optional().nullable(),
  specialInstructionsOverride: z.string().optional().nullable(),
  collectionMethodOverride: z.lazy(() => TestCatalogCollectionMethodSchema).optional().nullable(),
  specimenRequirementsOverride: z.string().optional().nullable(),
  collectionOverride: z.string().optional().nullable(),
  stabilityRequirementsOverride: z.string().optional().nullable(),
  storageTransportationOverride: z.string().optional().nullable(),
  patientPreparationOverride: z.string().optional().nullable(),
  causesForRejectionOverride: z.string().optional().nullable(),
  processingNotesOverride: z.string().optional().nullable(),
  displayOrder: z.number().optional().nullable(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default TestConfigSpecimenManifestUncheckedCreateInputSchema;
