// Configuration de base de données pour Strapi
export default ({ env }) => ({
  connection: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    connection: env('DATABASE_CLIENT') === 'postgres' ? {
      host: env('DATABASE_HOST', 'db.hnhikkpxbzuxwmfcruog.supabase.co'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'postgres'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD'),
      ssl: env.bool('DATABASE_SSL', true) && {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
      schema: env('DATABASE_SCHEMA', 'strapi'),
    } : {
      filename: env('DATABASE_FILENAME', '.tmp/data.db'),
    },
    debug: false,
  },
});
