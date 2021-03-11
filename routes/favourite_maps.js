// All routes for Favourite Maps are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {
  router.post("/post/:userId/:mapId", (req, res) => {
    let query = `
    INSERT INTO favourite_maps (user_id, map_id)
    VALUES ($1, $2);
    `;
    return db.query(query, [req[0], req[1]])
      .then(data => console.log(data))
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;
};

// POSTs below
