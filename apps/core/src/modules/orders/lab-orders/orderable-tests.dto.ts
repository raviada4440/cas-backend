import { createZodDto } from 'nestjs-zod/dto'
import { z } from 'zod'

import { OrderableQuery } from '@shared/contracts/orders'

export class OrderableQueryDto extends createZodDto(OrderableQuery) {}
export type OrderableQueryInput = z.infer<typeof OrderableQuery>
