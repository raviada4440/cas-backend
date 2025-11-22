import { z } from 'zod';

export const TestConfigBiomarkerScalarFieldEnumSchema = z.enum(['id','configurationId','hgncId','action','transcriptReference','reportTier','isReportable','displayOrder','notes','createdAt','updatedAt']);

export default TestConfigBiomarkerScalarFieldEnumSchema;
