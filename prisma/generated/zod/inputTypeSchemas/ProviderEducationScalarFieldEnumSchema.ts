import { z } from 'zod';

export const ProviderEducationScalarFieldEnumSchema = z.enum(['id','providerId','providerNpi','name','educationType','schoolName','areaOfEducation','createdAt','updatedAt']);

export default ProviderEducationScalarFieldEnumSchema;
