import { z } from "zod";

export const contactUsFormSchema = z.object({
  name: z.string().nonempty({ message: "This field is required" }),
  email: z.string().email(),
  message: z.string().nonempty({ message: "This field is required" }),
});

export type TContactUsFormSchema = z.infer<typeof contactUsFormSchema>;
