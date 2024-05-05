import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<unknown>): Promise<void> {
  await db.schema
    .createTable('topics')
    .addColumn('id', 'bigserial', (col) => col.primaryKey())
    .addColumn('title', 'varchar', (col) => col.notNull())
    .addColumn('completed', 'boolean', (col) => col.defaultTo(false))
    .addColumn('user_id', 'uuid', (col) => col.references('users.id').onDelete('set null').onUpdate('cascade').notNull())
    .addColumn('created_at', 'timestamp', (col) => col.defaultTo(sql`now()`).notNull())
    .execute();

  await db.schema.createIndex('topic_author_id').on('topics').column('user_id').execute();
}

export async function down(db: Kysely<unknown>): Promise<void> {
  await db.schema.dropTable('topics').execute();
}
