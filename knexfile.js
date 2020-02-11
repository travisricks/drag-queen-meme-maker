module.exports = {
  development: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/drag_queen_meme`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds/dev",
    },
  },

  staging: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/drag_queen_meme`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },

  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      `postgres://${process.env.USER}@127.0.0.1:5432/drag_queen_meme`,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
  },
};
