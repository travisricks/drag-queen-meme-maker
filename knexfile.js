const config = require("./config");

module.exports = {
  client: "pg",
  connection:
    process.env.DATABASE_URL ||
    `postgres://${process.env.USER}@127.0.0.1:5432/drag_queen_meme`,
  migrations: {
    tableName: "knex_migrations",
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds/dev"
  }
};
