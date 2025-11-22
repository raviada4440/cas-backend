import { z } from 'zod';

export const SponsoredProgramScalarFieldEnumSchema = z.enum(['id','sponsorId','therapeuticArea','programName','programUrl','programLabUrl','sponsoredTestingUrl','programEligibility','createdAt','updatedAt']);

export default SponsoredProgramScalarFieldEnumSchema;
