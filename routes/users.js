/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();


module.exports = (db) => {

  const userAlice = {
    id: 1,
    name: 'Alice',
    email: 'allice@mappi.com',
    password: 'password',
    image: 'https://images.unsplash.com/photo-1513245543132-31f507417b26?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  }

  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get('/', (req,res) =>{
    res.render("index");
  });

  router.get('/:id', (req,res) =>{
    // return single user

      let query = `SELECT * FROM maps WHERE user_id = $1;`;
      return db.query(query, [req.params.id])
      .then(response => {
        console.log(response.rows);
        const templateVars = {
          user: userAlice,
          mapData: response.rows
        }
        res.render("users", templateVars);
      });
    })

    router.get('/:id/contributed', (req, res) => {

      let query = `
      SELECT DISTINCT maps.title AS title, maps.id AS map_id, pins.user_id AS collaborated_maps
      FROM pins
      JOIN maps ON maps.id = map_id
      WHERE pins.user_id = $1;`;
      return db.query(query, [req.params.id])
      .then(response => {
        res.json(response.rows);
      });
    })

    router.get('/:id/favourite_maps', (req, res) => {

      let query = `
      SELECT maps.title AS map_title, maps.id AS map_id
      FROM favourite_maps
      JOIN maps ON maps.id = map_id
      WHERE favourite_maps.user_id = $1;`;
      return db.query(query, [req.params.id])
      .then(response => {
        res.json(response.rows);
      });
    })

  return router;
};
