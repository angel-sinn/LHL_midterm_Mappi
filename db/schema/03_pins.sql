-- Drop and recreate Pins table (Example)

DROP TABLE IF EXISTS pins CASCADE;
CREATE TABLE pins (
  -- NOT NULL below might break things
  id SERIAL PRIMARY KEY NOT NULL,
  map_id INT REFERENCES maps(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  lat DECIMAL (8,6),
  lng DECIMAL (9,6),
  address VARCHAR(255) NOT NULL
);
