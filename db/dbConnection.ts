import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

const dialect = new PostgresDialect({
  pool: new Pool({
    database: 'learning-tracker',
    password: 'password',
    host: 'localhost',
    user: 'postgres',
    port: 5432,
    max: 10,
  }),
});

export const db = new Kysely<any>({
  dialect,
});
