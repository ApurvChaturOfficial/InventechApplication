import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  _id: z.string(),
  id: z.string(),
  name: z.string(),
  quantity: z.string(),
  warehouse: z.string(),
  barcode: z.string(),
  averagePurchase: z.string(),
  averageCost: z.string(),
  alert: z.string(),
})

export type Task = z.infer<typeof taskSchema>