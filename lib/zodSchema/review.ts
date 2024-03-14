import { z } from "zod";

export const reviewFormSchema = z.object({
  review: z.string().nonempty({ message: "This field is required" }),
});

export type TReviewFormSchema = z.infer<typeof reviewFormSchema>;
