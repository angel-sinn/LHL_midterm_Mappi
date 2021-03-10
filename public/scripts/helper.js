// helper functions below
module.exports = (db) => {

  const getPins = function(map_id) {
    const queryStr = `
    SELECT pins.*
    FROM maps
    JOIN pins ON maps.id = map_id
    WHERE map_id = $1;
    `;
    return db.query(queryStr, [map_id])
      .then(res => console.log(res.rows))
      .catch(err => (console.log(err.stack)));
  };
  return getPins;
}


