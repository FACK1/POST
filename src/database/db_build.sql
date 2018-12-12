BEGIN;
DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  user_name VARCHAR(255) unique,
  email VARCHAR(255),
  password TEXT
);

CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  text_post TEXT,
  time_post timestamp without time zone NOT NULL
   DEFAULT (current_timestamp AT TIME ZONE 'UTC'),
   user_name VARCHAR (255),
 FOREIGN KEY (user_name) REFERENCES users(user_name)
);

COMMIT;
