import { z } from 'zod';

export const TestConfigSpecimenManifestScalarFieldEnumSchema = z.enum(['id','configurationId','versionSpecimenId','participantRole','isRequired','specimenTypeOverride','specimenDisplayNameOverride','volumeOverride','minimumVolumeOverride','preferredVolumeOverride','alternateContainersOverride','containerOverride','specialInstructionsOverride','collectionMethodOverride','specimenRequirementsOverride','collectionOverride','stabilityRequirementsOverride','storageTransportationOverride','patientPreparationOverride','causesForRejectionOverride','processingNotesOverride','displayOrder','createdAt','updatedAt']);

export default TestConfigSpecimenManifestScalarFieldEnumSchema;
