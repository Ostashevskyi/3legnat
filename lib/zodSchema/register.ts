import z from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("Field is required"),
  username: z.string().nonempty("Field is required"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
