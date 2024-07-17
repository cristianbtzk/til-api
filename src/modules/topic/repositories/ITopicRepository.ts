import { ITopic } from '../model/ITopic';

export interface ITopicRepository {
  create(data: Pick<ITopic, 'completed' | 'title' | 'user_id'>): Promise<ITopic>;
}
