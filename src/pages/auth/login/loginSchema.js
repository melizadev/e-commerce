import z from "zod";
export const loginSchema = z.object({
  email: z.string().email().min(6).max(254),
  password: z.string().min(6).max(254),
});
