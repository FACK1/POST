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
  time_post TIMESTAMP DEFAULT CURRENT_TIME,
   user_name VARCHAR (255),
 FOREIGN KEY (user_name) REFERENCES users(user_name)
);

COMMIT;
