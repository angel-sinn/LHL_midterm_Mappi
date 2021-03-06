-- Drop and recreate Maps table (Example)

DROP TABLE IF EXISTS maps CASCADE;
CREATE TABLE maps (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(255) DEFAULT NULL,
  lat DECIMAL (8,6),
  lng DECIMAL (9,6),
  zoom INT DEFAULT 10
);
