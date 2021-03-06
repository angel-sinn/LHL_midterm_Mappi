const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');


// this will either be used to send and store data about the map..
// right now I am trying to get the map api without exposing the api keyy


module.exports = (db) => {
  router.get("/", (req, res) => {
    request(`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap&libraries=&v=weekly`, function (error, response, body) {
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.
      res.send(response.body);

    });






  //   let query = `SELECT * FROM widgets`;
  //   console.log(query);
  //   db.query(query)
  //     .then(data => {
  //       const widgets = data.rows;
  //       res.json({ widgets });
  //     })
  //     .catch(err => {
  //       res
  //         .status(500)
  //         .json({ error: err.message });
  //     });
  });
  return router;
};
