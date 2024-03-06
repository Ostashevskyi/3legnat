import z from "zod";

export const couponsSchema = z.object({
  title: z.string(),
});

export type TCouponsSchema = z.infer<typeof couponsSchema>;
