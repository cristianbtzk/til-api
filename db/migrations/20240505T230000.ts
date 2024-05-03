import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('topics')
    .addColumn('id', 'bigserial', (col) => col.primaryKey())
    .addColumn('title', 'varchar', (col) => col.notNull())
    .addColumn('completed', 'boolean', (col) => col.defaultTo(false))
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('topics').execute();
}
