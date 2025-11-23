import { z } from 'zod/v4'

export const LabTestLookupItem = z
  .object({
    id: z.string().uuid(),
    testName: z.string(),
    casandraTestId: z.string().nullable(),
    versionNumber: z.number().nullable(),
    labName: z.string().nullable(),
  })
  .strict()
export type LabTestLookupItem = z.infer<typeof LabTestLookupItem>

export const LabTestLookupResponse = z
  .object({
    items: z.array(LabTestLookupItem),
  })
  .strict()
export type LabTestLookupResponse = z.infer<typeof LabTestLookupResponse>



