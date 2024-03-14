import z from "zod";

export const forgotPasswordEmailSchema = z.object({
  email: z.string().email(),
});

export type TForgotPasswordEmailSchema = z.infer<
  typeof forgotPasswordEmailSchema
>;

export const forgotPasswordSchema = z
  .object({
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    repeatNewPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "Passwords don't match",
    path: ["repeatNewPassword"],
  });

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
