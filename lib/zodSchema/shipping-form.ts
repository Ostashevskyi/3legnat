import { z } from "zod";
import isMobilePhone from "validator/lib/isMobilePhone";

export const shippingFormSchema = z.object({
  first_name: z.string().nonempty({ message: "Must be a valid first name" }),
  last_name: z.string().nonempty({ message: "Must be a valid last name" }),
  country: z.string().nonempty({ message: "This field is required" }),
  street_address: z.string().nonempty({ message: "This field is required" }),
  postcode: z.string().nonempty({ message: "Thi field is required" }),
  city: z.string().nonempty({ message: "This field is required" }),
  phone: z
    .string()
    .refine(isMobilePhone, { message: "Invalid mobile phone number" }),
  email: z.string().email(),
});

export type TShippingFormSchema = z.infer<typeof shippingFormSchema>;
