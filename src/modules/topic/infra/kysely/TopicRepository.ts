import { db } from '@db/dbConnection';
import { ITopicRepository } from '../../repositories/ITopicRepository';

const TopicRepository: ITopicRepository = {
  async create(data) {
    return await db.insertInto('topics').values(data).returningAll().executeTakeFirstOrThrow();
  },
};

export { TopicRepository };
