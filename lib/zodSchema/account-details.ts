import { z } from "zod";

export const accountDetailsSchema = z.object({
  name: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
});

export type TAccountDetailsSchema = z.infer<typeof accountDetailsSchema>;
