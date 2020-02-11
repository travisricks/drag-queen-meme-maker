/*
- the express/app creation/connection/porting
- the postgres connection via knex
- all middleware
- api routes
*/

const express = require("express");
const path = require("path");

// use process.env variables to keep private variables,
require("dotenv").config();

// Express Middleware
const helmet = require("helmet"); // creates headers that protect from attacks (security)
const bodyParser = require("body-parser"); // turns response into usable format
const cors = require("cors"); // allows/disallows cross-site communication
const morgan = require("morgan"); // logs requests

// db Connection w/ Heroku
// const db = require('knex')({
//   client: 'pg',
//   connection: {
//     connectionString: process.env.DATABASE_URL,
//     ssl: true,
//   }
// });

const environment = process.env.NODE_ENV || "development"; // if something else isn't setting ENV, use development
const configuration = require("./knexfile")[environment]; // require environment's settings from knexfile
// const database = require('knex')(configuration);              // connect to DB via knex using env's settings

// db Connection w/ localhost
var db = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "",
    password: "",
    database: "drag_queen_meme"
  }
});

// Controllers - aka, the db queries
const main = require("./controllers/main");

// App
const app = express();

// App Middleware
// const whitelist = ["http://localhost:3001", "http://localhost:3000"];
// const corsOptions = {
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   }
// };
app.use(helmet());
// app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(morgan("combined")); // use 'tiny' or 'combined'

// App Routes - Auth
// app.get("/", (req, res) => res.send("hello world"));
app.get("/api", (req, res) => main.getTableData(req, res, db));
app.post("/api", (req, res) => main.postTableData(req, res, db));
app.put("/api", (req, res) => main.putTableData(req, res, db));
app.delete("/api", (req, res) => main.deleteTableData(req, res, db));

if (process.env.NODE_ENV === "production") {
  // Express will serve up production assets
  app.use(express.static("build"));

  // Express will serve up the front-end index.html file if it doesn't recognize the route
  app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
}

// App Server Connection
app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT || 3000}`);
});
