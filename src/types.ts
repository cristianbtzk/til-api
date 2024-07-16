import { ColumnType, Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface Database {
  topics: TopicsTable;
  users: UsersTable;
}

export interface TopicsTable {
  id: Generated<BigInteger>;

  title: string;
  completed: boolean;
  created_at: ColumnType<Date, string | undefined, never>;
}

export interface UsersTable {
  id: string;
  name: string;
  email: string;
  password: string;
  created_at: ColumnType<Date, string | undefined, never>;
  updated_at: ColumnType<Date, string | undefined, never>;
}

export type Topic = Selectable<TopicsTable>;
export type NewTopic = Insertable<TopicsTable>;
export type UpdateTopic = Updateable<TopicsTable>;
