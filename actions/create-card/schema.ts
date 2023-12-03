import { z } from "zod";

export const CreateCard = z.object({
  title: z.string({
    required_error: "שם נדרש",
    invalid_type_error: "שם נדרש",
  }).min(3, {
    message: "שם קצר מידי",
  }),
  boardId: z.string(),
  listId: z.string(),
});