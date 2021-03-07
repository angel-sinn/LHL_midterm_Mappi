// All routes for Pins are defined here

const express = require('express');
const router  = express.Router();

// GETs below

router.get('/pins', (req, res) => {
  res.render("maps/pins") //route TBD
})

// POSTs below
