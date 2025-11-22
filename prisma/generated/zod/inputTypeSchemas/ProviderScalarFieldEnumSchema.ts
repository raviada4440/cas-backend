import { z } from 'zod';

export const ProviderScalarFieldEnumSchema = z.enum(['id','href','npi','name','firstName','lastName','email','credentials','specialty','aboutme','gender','providerType','affiliation','proceduresAndResearch','specialInterests','userAttributeId','createdAt','updatedAt']);

export default ProviderScalarFieldEnumSchema;
