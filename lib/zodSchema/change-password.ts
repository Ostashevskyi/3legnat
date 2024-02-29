import z from "zod";

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(6),
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    repeatNewPassword: z.string().min(6),
  })
  .refine((data) => data.newPassword === data.repeatNewPassword, {
    message: "Passwords don't match",
    path: ["repeatNewPassword"],
  })
  .refine((data) => data.oldPassword !== data.newPassword, {
    message: "Old password must be different from new password",
    path: ["oldPassword"],
  });

export type TChangePasswordSchema = z.infer<typeof changePasswordSchema>;
