import { UUID } from 'crypto';

export interface IUser {
  id: UUID;
  name: string;
  email: string;
  password: string;
  created_at: Date;
  updated_at: Date;
}
