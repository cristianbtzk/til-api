import { IUser } from '../model/IUser';

export interface IUserRepository {
  create(data: Pick<IUser, 'id' | 'name' | 'email' | 'password'>): Promise<IUser>;
}
