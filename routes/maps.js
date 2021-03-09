const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');


// this will either be used to send and store data about the map..
// right now I am trying to get the map api without exposing the api keyy

// GETs below

module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        API_KEY: process.env.API_KEY,
      }
      res.render("index", templateVars);
  });

  router.get("/:id", (req,res) => {
    //return data about single map
  });
  router.post('/', (req,res) => {
      // make query

      console.log(req.body);
      const userAlice = {
        id: 1,
        name: 'Alice',
        email: 'allice@mappi.com',
        password: 'password',
        image: 'https://imgur.com/r/puppies/QfLwddi',
      }
      const mapData = {
        title: req.body['new-map-title'],
        description: req.body['new-map-description'],
        location: { lat: -25.344, lng: 131.036 },
        category: req.body['new-map-category'],
        zoom: 8
      }
      const templateVars = {
        user: userAlice,
        API_KEY: process.env.API_KEY,
        mapData: mapData
      }
      let query = `
      INSERT INTO maps (user_id, title, category, lat, lng, zoom)
      VALUES (${userAlice.id}, '${mapData.title}', '${mapData.category}', ${mapData.location.lat}, ${mapData.location.lng}, ${mapData.zoom})
      RETURNING *;
      `;
      db.query(query).then(response => {
        templateVars.mapData['id'] = response.rows[0].id;
        res.render("map", templateVars);
      }).catch((e) => console.log(e));
  });

  return router;
};

// // POSTs below
// router.get('/', (req,res) => {
//   // get all maps
// });
// router.get('/:id', (req,res) => {
//   // get single map
//   // get pins with map
// });
// router.post('/:id', (req,res) => {
//   // update single map details (title, type, etc.)
// });
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
