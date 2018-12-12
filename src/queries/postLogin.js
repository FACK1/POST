const db_connection = require('../database/db_connection');

const postLogin = (name, cb) => {
  db_connection.query('select password from  users where user_name = $1',
    [name],
    (err, data) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        cb(null,data.rows);

      }
    });
};
module.exports = postLogin;
