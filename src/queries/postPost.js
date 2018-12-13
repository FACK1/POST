const db_connection = require('../database/db_connection');

const postPost = (text_post,user_name, cb) => {
  db_connection.query(`INSERT INTO posts (text_post,user_name)   VALUES ($1,$2)`,
    [text_post,user_name],
    (err, data) => {
      if (err) {
        cb(err);
      } else {
        cb(null, JSON.stringify({ success: 'This was a success' }));
      }
    }
  );
};


module.exports= postPost;
