// All routes for Pins are defined here

const express = require("express");
const router = express.Router();

// GETs below

module.exports = (db) => {
  const insertDataQueryString = function (body) {
    let temp_query = `
      INSERT INTO pins (map_id, user_id, title, description, image_url, lat, lng, address)
      VALUES
      `;
    for (let id in body) {
      temp_query += `(${parseInt(body[id].map_id)},${parseInt(
        body[id].user_id
      )},'${body[id].title}','${body[id].description}', '${
        body[id].image_url
      }', ${Number(body[id].lat)},  ${Number(body[id].lng)}, '${
        body[id].address
      }'), `;
    }
    queryStr = temp_query.slice(0, -2) + " RETURNING *;";
    return queryStr;
  };

  // get pins for a map
  router.get("/:id", (req, res) => {
    let query = `
    SELECT * FROM pins
    WHERE map_id = $1
    ;`;
    console.log(query);
    db.query(query, [req.params.id])
      .then((data) => {
        const pins = data.rows;
        res.json(pins);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/:id", (req, response) => {
    let query = `
    SELECT *
    FROM pins
    WHERE map_id = $1;
    `;
    console.log("received");
    return db.query(query, [req.params.id]).then((res) => {
      response.json(res.rows);
    });
  });

  // create pins for a map
  router.post("/", (req, res) => {
    // get all pins from saveMap in map.ejs

    query = insertDataQueryString(req.body);

    db.query(query)
      .then((response) => {
        map_id = response.rows[0].map_id;
        res.send(`/maps/${map_id}`);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.put("/", (req, res) => {
    // get all pins from saveMap in map.ejs

    let query = `DELETE FROM pins WHERE map_id = $1;`;

    db.query(query, [parseInt(req.body["1"].map_id)])
      .then((response_delete) => {
        query = insertDataQueryString(req.body);

        db.query(query)
          .then((response_insert) => {
            map_id = parseInt(req.body["1"].map_id);
            res.send(`/maps/${map_id}`);
          })
          .catch((err) => {
            res.status(500).json({ error: err.message });
          });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
