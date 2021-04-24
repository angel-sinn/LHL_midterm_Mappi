const express = require("express");
const router = express.Router();
const request = require("request");
const process = require("process");
const { getPackedSettings } = require("http2");

module.exports = (db) => {
  const getPins = require("../public/scripts/helper.js")(db);
  const userAlice = {
    id: 1,
    name: "Alice",
    email: "allice@mappi.com",
    password: "password",
    image:
      "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
  };

  router.get("/", (req, res) => {
    const templateVars = {
      API_KEY: process.env.API_KEY,
      user: userAlice,
    };
    res.render("index", templateVars);
  });

  // GETs below
  router.post("/create", (req, res) => {
    // make query
    const mapData = {
      title: req.body["new-map-title"],
      description: req.body["new-map-description"],
      location: { lat: -25.344, lng: 131.036 },
      category: req.body["new-map-category"],
      zoom: 8,
    };

    const templateVars = {
      user: userAlice,
      API_KEY: process.env.API_KEY,
      mapData: mapData,
    };

    let query = `
    INSERT INTO maps (user_id, title, description, category, lat, lng, zoom)
    VALUES (${userAlice.id}, '${mapData.title}','${mapData.description}', '${mapData.category}', ${mapData.location.lat}, ${mapData.location.lng}, ${mapData.zoom})
    RETURNING *;
    `;
    db.query(query)
      .then((response) => {
        templateVars.mapData["id"] = response.rows[0].id;
        res.render("map", templateVars);
      })
      .catch((e) => console.log(e));
  });

  router.get("/:id", (req, res) => {
    let query = `
    SELECT id, title, description, lat, lng, zoom FROM maps WHERE id = $1
    `;

    return db.query(query, [req.params.id]).then((response) => {
      const mapData = response.rows[0];

      const templateVars = {
        API_KEY: process.env.API_KEY,
        mapData: mapData,
        user: userAlice,
      };

      res.render("map_view", templateVars);
    });
  });

  // POSTs below

  router.post("/", (req, res) => {
    let query = `SELECT * FROM maps;`;
    db.query(query).then((response) => {
      res.end(console.log(response.rows)); // post that returns all map data in array
      // should insert maps data into maps
    });
  });

  // returns map and pin data from map_id
  router.post("/:id", (req, res) => {
    let query = `
    SELECT title, lat, lng FROM maps WHERE id = $1
    UNION
    SELECT title, lat, lng FROM pins WHERE map_id = $1;
    `;
    return db
      .query(query, [req.params.id])
      .then((res) => {
        console.log(res.rows); // hangs due to lack of data use
      })
      .catch((err) => console.log(err.stack));
  });

  router.put("/:id", (req, res) => {
    let query = `
    UPDATE maps
      SET lat = ${Number(req.body.lat)},
          lng = ${Number(req.body.lng)},
          zoom = ${Number(req.body.zoom)}
      WHERE id = $1
    `;
    return db
      .query(query, [req.params.id])
      .then((response) => {
        res.send(response);
      })
      .catch((err) => console.log(err.stack));
  });

  router.delete("/:id/delete", (req, res) => {
    let query = `DELETE FROM maps WHERE id = $1`;
    return db
      .query(query, [req.params.id])
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.stack));
  });

  return router;
};
