import { z } from 'zod';

export const PatientScalarFieldEnumSchema = z.enum(['id','firstName','lastName','dateOfBirth','gender','email','mobile','addressLine1','addressLine2','city','state','postalCode','country','createdAt','updatedAt']);

export default PatientScalarFieldEnumSchema;
