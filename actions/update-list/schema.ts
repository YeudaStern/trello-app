import { z } from "zod";

export const UpdateList = z.object({
  title: z.string({
    required_error: "שם נדרש",
    invalid_type_error: "שם נדרש",
  }).min(3, {
    message: "שם קצר מדי",
  }),
  id: z.string(),
  boardId: z.string(),
});