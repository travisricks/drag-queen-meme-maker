require("dotenv").config();
module.exports = {
  db: {
    client: "pg",
    connection: process.env.DATABASE_URL || {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3000,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD
    }
  },
  express: {
    port: process.env.PORT
  }
};