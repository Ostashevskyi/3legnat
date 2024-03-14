import { z } from "zod";

export const newsletterFormSchema = z.object({
  email: z.string().email(),
});

export type TNewsletterFormSchema = z.infer<typeof newsletterFormSchema>;
