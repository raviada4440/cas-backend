import { z } from 'zod';

export const PatientOrganizationScalarFieldEnumSchema = z.enum(['id','patientId','organizationId','mrn','mobile','email','createdAt','updatedAt']);

export default PatientOrganizationScalarFieldEnumSchema;
