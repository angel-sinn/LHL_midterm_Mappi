// load .env data into process.env
require("dotenv").config();
const path = require("path");

// Web server config
const PORT = process.env.PORT || 8080;
const ENV = process.env.ENV || "development";
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const app = express();
const morgan = require("morgan");

// PG database client/connection setup
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan("dev"));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/styles",
  sass({
    src: __dirname + "/styles",
    dest: __dirname + "/public/styles",
    debug: true,
    outputStyle: "expanded",
  })
);

app.use(express.static("public"));

// dummy objects
const userAlice = {
  id: 1,
  name: "Alice",
  email: "allice@mappi.com",
  password: "password",
  image: "https://imgur.com/r/puppies/QfLwddi",
};

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");
const mapsRoutes = require("./routes/maps");
const pinsRoutes = require("./routes/pins");
const favouriteMapsRoutes = require("./routes/favourite_maps");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own

app.use("/", homeRoutes(db));
app.use("/users", usersRoutes(db));
app.use("/maps", mapsRoutes(db));
app.use("/pins", pinsRoutes(db));
app.use("/favourite_maps", favouriteMapsRoutes(db));
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
// Serve Static files from public

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
