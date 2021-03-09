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

  router.post("/", (req,res)=>{

    console.log(req.body);
  });
  // router.get('/:id', (req, res) => { // id is map_id
  //   const templateVars = pins; //example code
  //   res.render("pins", templateVars); //separate render for pins OR index w/ pins details
  // });
    // router.post('/:id', (req, res) => { // id is map_id
    //   const id = map_id;
    //   const pins = pins.data; //no idea what this will actually be
    //   database.savePins({id: id, pins: pins}) //example function "savepins"
    //     .then(pins => {
    //       res.send(pins);
    //     })
    //     .catch(e => {
    //       console.error(e);
    //       res.send(e);
    //     });
    // });

  return router;
};

// POSTs below
