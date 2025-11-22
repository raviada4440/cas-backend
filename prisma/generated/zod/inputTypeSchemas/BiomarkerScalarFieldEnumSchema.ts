import { z } from 'zod';

export const BiomarkerScalarFieldEnumSchema = z.enum(['hgncId','hgncStatus','hgncApprovedSymbol','hgncApprovedName','createdAt','updatedAt']);

export default BiomarkerScalarFieldEnumSchema;
