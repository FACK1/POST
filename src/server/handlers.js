const path = require('path');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');
const getPost=require('../queries/getPost.js');
const postLogin=require('../queries/postLogin.js');
const postPost = require('../queries/postPost');
const postSignUp = require('../queries/postSignup');
const bcrypt = require('bcryptjs');

//------------------------------------------------
const  homeHandler=(request,response)=>{
  const htmlPath =  path.join(__dirname, '../../public/html/login.html')
  fs.readFile(htmlPath, (error, html) => {
      if(error){
        console.log(error);
         response.writeHead(500, {'content-Type': 'text/html'})
         response.end('<h1> Server error! sorry</h1>')
      }
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end(html)
  });
}
//------------------------------------------------
const  publicHandler=(request,response)=>{
  const filePath =  path.join(__dirname, '..', '..',request.url);
  const extention = request.url.split('.')[1];
  const contentTypeMapping = {
     'js': 'application/js',
     'css': 'text/css',
     'html': 'text/html',
     'jpg': 'image/jpg',
     'png': 'image/png',
     'ico': 'image/x-ico',
     'jpeg': 'image/jpeg'
     }
  if (contentTypeMapping[extention] === undefined) {
             pageNotFoundHandler(request, response);
               return;
  }

 fs.readFile(filePath, (error, file) => {
     if(error){
       console.log(error);

         response.writeHeader(500, {'content-Type': 'text/html'});
         response.end('<h1> Server error! sorry</h1>');
     }
     response.writeHead(200, {'content-Type': contentTypeMapping[extention]})
     response.end(file)
 })
}
//------------------------------------------------
const getPostHandler = response => {
  getPost((err, result) => {
    if (err)
    return serverError(err, response);
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(result));
  });
};
//------------------------------------------------
const postPostHandler = (request, response) => {

    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });

    request.on('end', (err) => {
      const {text} = queryString.parse(data);
            });

}

//------------------------------------------------
const postLoginHandler = (request, response) => {

}


//------------------------------------------------

const postSignUpHandler = (request, res) => {
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });

    request.on('end', (err) => {
      const {name, email, psw} = queryString.parse(data);
      bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(psw, salt, function(err, hash) {
    postSignUp(name,email, hash, (err, result) => {
        if (err) {
          console.log(err);
          res.statusCode = 500;
          res.end('Error registering')
          return
        }
        res.statusCode = 200;
        res.writeHead(302,{'location': '/'})
        res.end('successfully registered!')
      })
    });
    console.log(name, email, psw);
});

    // postSignUp({name,email,psw}, (err, passwordInDatabase) => {
    //   if (err) {
    //     res.statusCode = 500;
    //     res.end('Error logging in')
    //     return
    //   }
    //
    // })
});
}


//------------------------------------------------
const pageNotFoundHandler=(request,response)=>{
  response.writeHead(404, {'content-Type': 'text/html'})
  response.end('<h1>Page Not Found</h1>')
}

module.exports={
  homeHandler,
  publicHandler,
  getPostHandler,
  postPostHandler,
  postLoginHandler,
  postSignUpHandler,
  pageNotFoundHandler
};
