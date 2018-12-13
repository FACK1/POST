const cookie = require('cookie');
const jwt = require('jsonwebtoken');
require('env2')('config.env')
const { secret } = process.env
function validater(cookies , cb) {
if(cookies !== undefined){
const parsedCookie = cookie.parse(cookies);
jwt.verify(parsedCookie.name, secret, (err, resp) => {
if(err){
cb(err)
} else {
cb(null,resp)
}
});
}
else {
cb(true)
}
}
module.exports=validater;
