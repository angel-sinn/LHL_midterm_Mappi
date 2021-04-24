// All routes for Favourite Maps are defined here

const express = require("express");
const router = express.Router();

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
    console.log("inside get request");
    let query = "SELECT * FROM favourite_maps;";
    db.query(query)
      .then((data) => {
        const favourite_maps = data.rows;
        res.json({ favourite_maps });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    let query = `
    INSERT INTO favourite_maps (user_id, map_id)
    VALUES ($1, $2);
    `;
    return db
      .query(query, [parseInt(req.body.user_id), parseInt(req.body.map_id)])
      .then((data) => {
        res.sendStatus(200);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
