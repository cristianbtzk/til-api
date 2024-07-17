import { z } from 'zod';

const createTopicSchema = z.object({
  title: z.string().min(1),
  user_id: z.string().min(1),
});

export const parseCreateTopicBody = (data: unknown) => createTopicSchema.safeParse(data);
