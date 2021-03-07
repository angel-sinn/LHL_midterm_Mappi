// All routes for Pins are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
<<<<<<< HEAD
    let query = "SELECT * FROM pins;";
    console.log(query);
    db.query(query)
=======
    db.query(`SELECT * FROM pins;`)
>>>>>>> 615462e1793a2f96a4833fd2a49d0476705d2cea
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
<<<<<<< HEAD
  // router.get('/', (req, res) => {
  //   const templateVars = pins.coords; //example code
  //   res.render("pins", templateVars); //separate render for pins OR index w/ pins details
  // });
=======
  router.get('/', (req, res) => {
    const templateVars = pins.coords; //example code
    res.render("pins", templateVars); //separate render for pins OR index w/ pins details
  });
>>>>>>> 615462e1793a2f96a4833fd2a49d0476705d2cea
  return router;
};

// POSTs below
