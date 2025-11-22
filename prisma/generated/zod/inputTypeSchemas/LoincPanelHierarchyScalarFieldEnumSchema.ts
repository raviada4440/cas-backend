import { z } from 'zod';

export const LoincPanelHierarchyScalarFieldEnumSchema = z.enum(['id','parentId','level','code','sequence','codeText','component','property','timing','scale','method']);

export default LoincPanelHierarchyScalarFieldEnumSchema;
