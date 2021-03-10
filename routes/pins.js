// All routes for Pins are defined here

const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {

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
        res.json({ pins });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // update pins for a map
  router.post("/:id", (req, res) = {

  })


  // create pins for a map
  router.post("/", (req,res)=>{
    // get all pins from saveMap in map.ejs
    let query = `
    INSERT INTO pins (map_id, title, description, image_url, lat, lng, address)
    VALUE
    `;
    req.body.forEach(element => {
      console.log(element);
      // query+= `(${element})` // propervalues here
    });
    console.log(req.body);
  });

  // delete pins for a map
  router.post("/:id/delete", (req, res) => {


  })

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
