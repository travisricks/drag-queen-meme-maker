const config = require("./config");

module.exports = {
  client: "pg",
  connection: config.db.connection,
  migrations: {
    tableName: "knex_migrations",
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds/dev"
  }
}