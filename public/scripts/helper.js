// helper functions below
module.exports = (db) => {

  return getPins = function(map_id) {
    const queryStr = `
    SELECT pins.*
    FROM maps
    JOIN pins ON maps.id = map_id
    WHERE map_id = $1;
    `;
    return db.query(queryStr, [map_id])
      .then(res => res.rows)
      .catch(err => (console.log(err.stack)));
  };
}


