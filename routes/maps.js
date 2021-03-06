const express = require('express');
const router  = express.Router();
const request = require('request');
const process = require('process');


// this will either be used to send and store data about the map..
// right now I am trying to get the map api without exposing the api keyy


module.exports = (db) => {
  router.get("/", (req, res) => {
      const templateVars = {
        API_KEY: process.env.API_KEY,
      }
      res.render("index", templateVars);
  });
  return router;
};
