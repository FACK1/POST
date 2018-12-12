const http = require('http');
const router = require('./router');

const PORT = process.env.PORT || 9001;

const server = http.createServer(router);
server.listen(PORT, () => {
  console.log(` the server up and running on port ${PORT}!`);
});
