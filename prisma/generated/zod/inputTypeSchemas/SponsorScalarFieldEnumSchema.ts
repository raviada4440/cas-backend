import { z } from 'zod';

export const SponsorScalarFieldEnumSchema = z.enum(['id','sponsorName','sponsorCode','sponsorWebsite','sponsorType','address','city','state','zip','createdAt','updatedAt']);

export default SponsorScalarFieldEnumSchema;
