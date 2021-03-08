// All routes for Pins are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = "SELECT * FROM pins;";
    console.log(query);
    db.query(query)
      .then(data => {
        const pins = data.rows;
        res.json({ pins });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  // router.get('/', (req, res) => {
  //   const templateVars = pins.coords; //example code
  //   res.render("pins", templateVars); //separate render for pins OR index w/ pins details
  // });
  return router;
};

// POSTs below
