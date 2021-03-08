// All routes for Favourite Maps are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = "SELECT * FROM favourite_maps;";
    db.query(query)
      .then(data => {
        const favourite_maps = data.rows;
        res.json({ favourite_maps });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};

// POSTs below
