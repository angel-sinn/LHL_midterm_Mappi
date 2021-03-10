-- Drop and recreate Pins table (Example)

DROP TABLE IF EXISTS pins CASCADE;
CREATE TABLE pins (
  id SERIAL PRIMARY KEY,
  map_id INT REFERENCES maps(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(255),
  lat DECIMAL (8,6),
  lng DECIMAL (9,6),
  address VARCHAR(255) NOT NULL
);
