BEGIN ;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) unique,
  email VARCHAR(255),
  password TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  text_post TEXT,
  time_post TIMESTAMP,
   user_id INTEGER,
 FOREIGN KEY (user_id) REFERENCES users(id)
);

COMMIT;
