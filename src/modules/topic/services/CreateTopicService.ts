import { CreateTopicDTO } from '../dtos/CreateTopicDTO';
import { TopicRepository } from '../infra/kysely/TopicRepository';

const createTopicService = async ({ title, user_id }: CreateTopicDTO) => {
  const topic = await TopicRepository.create({
    completed: false,
    title,
    user_id,
  });

  return topic;
};

export { createTopicService };
