import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { ParticipantRoleSchema } from './ParticipantRoleSchema';
import { EnumParticipantRoleFieldUpdateOperationsInputSchema } from './EnumParticipantRoleFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { SpecimenTypeSchema } from './SpecimenTypeSchema';
import { NullableEnumSpecimenTypeFieldUpdateOperationsInputSchema } from './NullableEnumSpecimenTypeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TestCatalogCollectionMethodSchema } from './TestCatalogCollectionMethodSchema';
import { NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInputSchema } from './NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';

export const TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInputSchema: z.ZodType<Prisma.TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInput> = z.strictObject({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  versionSpecimenId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participantRole: z.union([ z.lazy(() => ParticipantRoleSchema), z.lazy(() => EnumParticipantRoleFieldUpdateOperationsInputSchema) ]).optional(),
  isRequired: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  specimenTypeOverride: z.union([ z.lazy(() => SpecimenTypeSchema), z.lazy(() => NullableEnumSpecimenTypeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specimenDisplayNameOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  volumeOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  minimumVolumeOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  preferredVolumeOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  alternateContainersOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  containerOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specialInstructionsOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collectionMethodOverride: z.union([ z.lazy(() => TestCatalogCollectionMethodSchema), z.lazy(() => NullableEnumTestCatalogCollectionMethodFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  specimenRequirementsOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  collectionOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  stabilityRequirementsOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  storageTransportationOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  patientPreparationOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  causesForRejectionOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  processingNotesOverride: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  displayOrder: z.union([ z.number(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
});

export default TestConfigSpecimenManifestUncheckedUpdateManyWithoutConfigurationInputSchema;
