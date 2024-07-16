import { z } from 'zod';

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  name: z.string().min(5),
});

export const parseCreateUserBody = (data: unknown) => createUserSchema.safeParse(data);
