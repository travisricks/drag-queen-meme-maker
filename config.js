require("dotenv").config();
module.exports = {
  db: {
    client: "pg",
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/drag_queen_meme`
  },
  express: {
    port: process.env.PORT
  }
};