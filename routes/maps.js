const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');
const { getPackedSettings } = require('http2');
// const { getPins } = require('../public/scripts/app');


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
        console.log(res.rows[0]); // hangs due to lack of data use
        // returns anon. map data object
        // should also return map_id pins
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
        // should insert maps data into maps
      });
  });

  router.post('/:id', (req, res) => {
    let query = `SELECT maps.* FROM maps WHERE id = $1;`;
    return db.query(query, [req.params.id])
      .then(res => {
        console.log(res.rows); // hangs due to lack of data use
        /*SELECT pins.*
          FROM maps
          JOIN pins ON maps(id) = map_id
          WHERE maps.id = $1;*/ // this will be an AJAX request...
      })
      .catch(err => console.log(err.stack));
  });

  // WIP ~ probably need to change lat, lng, zoom reqs
  router.put('/:id/put', (req, res) => {
    let query =`
    UPDATE maps
      SET title = ${req.body.title},
          description = ${req.body.description},
          category = ${req.body.category},
          lat = ${req.body.lat},
          lng = ${req.body.lng},
          zoom = ${req.body.zoom}
      WHERE id = $1;
    `;
    console.log(query);
    return db.query(query, [req.params.id])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err.stack));
  })

  router.delete('/:id/delete', (req, res) => {
    let query =`DELETE FROM maps WHERE id = $1`;
    console.log(query);
    return db.query(query, [req.params.id])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err.stack));
  })

  return router;
};
