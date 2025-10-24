import { z } from "zod";

export const contactShemas = z.object({
  nama: z
    .string()
    .min(2, "tidak boleh kurang 2 karakter")
    .max(50, "tidak boleh lebih dari 50 karakter"),
  email: z.email(),
  message: z.string().min(10, "tidak boleh kurang dari 10 karakter"),
});

export type contactSchemasType = z.infer<typeof contactShemas>;
