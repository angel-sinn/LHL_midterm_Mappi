const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');
const { getPackedSettings } = require('http2');


// this will either be used to send and store data about the map..
// right now I am trying to get the map api without exposing the api keyy

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        API_KEY: process.env.API_KEY,
      }
      res.render("index", templateVars);
  });

  // GETs below

   router.get('/:id', (req, res) => {
    let query = `SELECT maps.* FROM maps WHERE id = $1;` // fetches map data depending on requested map id
    return db.query(query, [req.params.id])
      .then(res => {
        console.log(res.rows[0].id); // hangs due to lack of data use
      })
      .catch(err => console.log(err.stack));
  });

  // POSTs below
  router.post('/create', (req,res) => { //change to /create/:id once map data functional
      // make query
      let query = 'SELECT * FROM maps;'; // add WHERE id = :id when functional
      console.log(req.body);
      db.query(query).then(response => {
        console.log('in router');
        const userAlice = {
          name: 'Alice',
          email: 'allice@mappi.com',
          password: 'password',
          image: 'https://imgur.com/r/puppies/QfLwddi',
        }
        const templateVars = {
          user: userAlice,
          API_KEY: process.env.API_KEY,
          mapData: {
            title: req.body['new-map-title'],
            description: req.body['new-map-description'],
            location: { lat: -25.344, lng: 131.036 },
            category: req.body['new-map-category'],
            zoom: 8
          }
        }
        res.render("map", templateVars);
      });
  });

  router.post('/', (req, res) => {
    let query = `SELECT * FROM maps;`
    db.query(query)
      .then(response => {
        res.end(console.log(response.rows)); // post that returns all map data in array
      });
  });

  router.post('/:id', (req, res) => {
    let query = `SELECT maps.* FROM maps WHERE id = $1;` // fetches map data depending on requested map id
    return db.query(query, [req.params.id])
      .then(res => {
        console.log(res.rows); // hangs due to lack of data use
        // getPins(res.rows.map_id); // filler function to fetch pins depending on map_id ~ or just fetch pins from req? Je ne comprends pas mon ami
      })
      .catch(err => console.log(err.stack));
  });

  // WIP ~ my brain hurts ~ reference addProperty function for modularity or hardcode this
  router.put('/:id/put', (req, res) => {
    let query =`
    DELETE FROM maps WHERE id = $1;
    INSERT INTO maps (id, title, description, category, lat, lng, zoom)
    VALUES ($1, ${req.body.title}, ${req.body.description}, ${req.body.category}, ${req.body.lat}, ${req.body.lng}, ${req.body.zoom});
    `;
    return
  })

  return router;
};


// router.post('/:id/put', (req,res) => {
//   // update single map details (title, type, etc.)
// });
// router.post('/',(req,res) => {
//   // Create new map
// });
// router.post('/:id/delete',(req,res) => {
//   // delete map :id
// });





router.post("/:id/post", (req, res) => {

});
