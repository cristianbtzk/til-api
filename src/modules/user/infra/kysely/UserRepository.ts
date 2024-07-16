import { db } from '@db/dbConnection';
import { IUserRepository } from '../../repositories/IUserRepository';

const UserRepository: IUserRepository = {
  async create(data) {
    return await db.insertInto('users').values(data).returningAll().executeTakeFirstOrThrow();
  },
};

export { UserRepository };
