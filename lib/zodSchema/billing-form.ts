import { z } from "zod";
import isCreditCard from "validator/lib/isCreditCard";

export const billingFormSchema = z.object({
  first_name: z.string().nonempty({ message: "Must be a valid first name" }),
  last_name: z.string().nonempty({ message: "Must be a valid last name" }),
  card_number: z
    .string()
    .refine(isCreditCard, { message: "Must be a valid credit card number" }),
  cvv: z
    .string()
    .regex(/^\d{3,4}$/, { message: "CVV should contain 3 or 4 numbers" }),
  expiration_date: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
    message: "Expiration Date must be in format MM/YY",
  }),
});

export type TBillingFormSchema = z.infer<typeof billingFormSchema>;
