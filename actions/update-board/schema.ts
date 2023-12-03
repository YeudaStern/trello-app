import { z } from "zod";

export const UpdateBoard = z.object({
  title: z.string({
    required_error: "תיאור נדרש",
    invalid_type_error: "תיאור  נדרש",
  }).min(3, {
    message: "תיאור קצר מידי",
  }),
  id: z.string(),
});