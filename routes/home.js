const express = require('express');
const router  = express.Router();

// GETs below

module.exports = (db) => {

  const userAlice = {
    id: 1,
    name: 'Alice',
    email: 'allice@mappi.com',
    password: 'password',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  }

  router.get("/", (req, res) => {

    let query = `SELECT * FROM maps;`;
    return db.query(query)
    .then(response => {
      const templateVars = {
        user: userAlice,
        mapData: response.rows
      }
      res.render("homepage", templateVars);
    })
  });
  return router;
};

