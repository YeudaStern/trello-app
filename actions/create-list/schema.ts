import { z } from "zod";

export const CreateList = z.object({
  title: z.string({
    required_error: "שם נדרש",
    invalid_type_error: "שם נדרש",
  }).min(3, {
    message: "שם קצר מדי",
  }),
  boardId: z.string(),
});