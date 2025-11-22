import { z } from 'zod';

export const LabOrderConsentScalarFieldEnumSchema = z.enum(['id','labOrderId','versionConsentId','consentTemplateId','consentTitle','consentContent','isAccepted','acceptedAt','declinedAt','patientSignature','witnessSignature','ipAddress','userAgent','consentVersion','collectedBy','collectedAt','createdAt','updatedAt']);

export default LabOrderConsentScalarFieldEnumSchema;
