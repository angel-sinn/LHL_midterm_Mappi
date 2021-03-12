-- Drop and recreate Favourite Maps table (Example)

DROP TABLE IF EXISTS favourite_maps CASCADE;
CREATE TABLE favourite_maps (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  map_id INT REFERENCES maps(id) ON DELETE CASCADE
);
