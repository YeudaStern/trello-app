import { z } from "zod";

export const CreateBoard = z.object({
  title: z.string({
    required_error: "תיאור נדרש",
    invalid_type_error: "תיאור נדרש",
  }).min(3, {
    message: "תיאור קצר מידי"
  }),
  image: z.string({
    required_error: "תמונה נדרשת",
    invalid_type_error: "תמונה נדרשת",
  }),
});