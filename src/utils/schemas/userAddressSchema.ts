import { z } from "zod";

export const userAddressSchema = z.object({
  province: z.string({
    required_error: "Campo obrigatório",
  }),
  county: z.string({
    required_error: "Campo obrigatório",
  }),
  addressLine: z.string().nonempty("Campo obrigatório"),
});

export type UserAddressFormType = z.infer<typeof userAddressSchema>;
