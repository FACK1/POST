const db_connection = require('../database/db_connection');

const postSignup = (name,email, password, cb) => {
  db_connection.query(`INSERT INTO users (user_name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password],
    (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, JSON.stringify({ success: ' success' }));
      }
    }
  );
};
module.exports = postSignup;
