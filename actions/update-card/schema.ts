import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z.string(),
  description: z.optional(
    z.string({
      required_error: "תיאור נדרש",
      invalid_type_error: "תיאור נדרש",
    }).min(3, {
      message: "תיאור קצר מידי",
    }),
  ),
  title: z.optional(
    z.string({
      required_error: "כותר נדרש",
      invalid_type_error: "כותר נדרש",
    }).min(3, {
      message: "כותר קצר מידי",
    })
  ),
  id: z.string(),
});