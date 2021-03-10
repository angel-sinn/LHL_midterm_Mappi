// All routes for Pins are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {

<<<<<<< HEAD
=======
  // get pins for a map
  router.get("/:id", (req, res) => {
    let query = `
    SELECT * FROM pins
    WHERE map_id = $1
    ;`;
    console.log(query);
    db.query(query, [req.params.id])
      .then(data => {
        const pins = data.rows;
        res.json(pins);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

>>>>>>> features/map_api
  router.get("/:id", (req, response) => {
    let query = `
    SELECT *
    FROM pins
    WHERE map_id = $1;
    `
    console.log('received');
    return db.query(query, [req.params.id])
    .then(res => {
      response.json(res.rows);
    });
  })

  // create pins for a map
  router.post("/", (req,res)=>{
    // get all pins from saveMap in map.ejs
    let temp_query = `
    INSERT INTO pins (map_id, title, description, image_url, lat, lng, address)
    VALUES
    `;

    for(let id in req.body){
      temp_query += `(${parseInt(req.body[id].map_id)},'${req.body[id].title}','${req.body[id].description}', '${req.body[id].image_url}', ${Number(req.body[id].lat)},  ${Number(req.body[id].lng)}, '${req.body[id].address}'), `;
    }
    query = temp_query.slice(0,-2) + ' RETURNING *;'

    db.query(query)
    .then((response) => {
      map_id = response.rows[0].map_id;
      res.send(`/maps/${map_id}`);
    }).catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  return router;
};

// POSTs below
