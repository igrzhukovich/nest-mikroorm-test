import { defineConfig } from '@mikro-orm/postgresql';

export default defineConfig({
    host: 'localhost',
    type: 'postgresql',
    port: 5432,
    dbName: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    debug: true,
    // loadStrategy: LoadStrategy.JOINED,
    // highlighter: new SqlHighlighter(),
    // metadataProvider: TsMorphMetadataProvider,
    // // @ts-expect-error nestjs adapter option
    // registerRequestContext: false,
    // extensions: [Migrator, EntityGenerator, SeedManager],
});
