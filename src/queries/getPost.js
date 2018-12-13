const db_connection = require('../database/db_connection');

const getPost = (cb) => {
  db_connection.query('select * from  posts',

    (err, data) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        cb(null,data.rows);

      }
    });
};
module.exports = getPost;
