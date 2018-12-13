const path = require('path');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring');
const getPost=require('../queries/getPost.js');
const postLogin=require('../queries/postLogin.js');
const postPost = require('../queries/postPost');
const postSignUp = require('../queries/postSignup');
const bcrypt = require('bcryptjs');
const cookie = require('cookie');
const jwt = require('jsonwebtoken');
require('env2')('config.env')
const { secret } = process.env
const validater=require('./validater');



//------------------------------------------------
const  homeHandler=(request,response)=>{
  validater(request.headers.cookie,(err,result)=>{
    if(err){
      const htmlPath =  path.join(__dirname, '../../public/html/login.html')
      fs.readFile(htmlPath, (error, html) => {
          if(error){
            console.log(error);
            response.writeHead(500, {'content-Type': 'text/html'})
            response.end('<h1> Server error! sorry</h1>')
             return;
          }
          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end(html)
      });
    }
    else{
      const postPath =  path.join(__dirname, '../../public/html/post.html')
      fs.readFile(postPath, (error, html) => {
          if(error){
            console.log(error);
            response.writeHead(500, {'content-Type': 'text/html'})
            response.end('<h1> Server error! sorry</h1>')
             return;
          }
          response.writeHead(200, {'Content-Type': 'text/html'})
          response.end(html)
      });

      console.log("zaaabdet");

    }
  })

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
const getPostHandler = (request,response)=> {
  console.log("headerS",request.headers)
validater(request.headers.cookie,(err,result)=>{
  if(err)
  {
    console.log(err)
    response.writeHead(302,{'location': '/'})
    response.end(JSON.stringify({message:"falid"}));
  }else {
    console.log("b")

    getPost((err, result) => {
      console.log("c")
        if (err)
        return serverError(err, response);
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(JSON.stringify(result));
      });

  }
});
}


//
// const getPostHandler = (request,response) => {
//   console.log("headers",request.headers)
//   getPost((err, result) => {
//     if (err)
//     return serverError(err, response);
//     response.writeHead(200, { 'Content-Type': 'application/json' });
//     response.end(JSON.stringify(result));
//   });
// };
//------------------------------------------------
const postPostHandler = (request, response) => {
  validater(request.headers.cookie,(err,result)=>{

         if(err)
         {
           response.writeHead(302,{'location': '/'})
         }
         else{
    console.log(result);
    let data = '';
    request.on('data', chunk => {
        data += chunk;
    });

       request.on('end', (err) => {
        const {text_post} = queryString.parse(data);
        console.log(text_post);
        postPost(text_post,result.name, (err, result) => {
          if (err) {
            console.log(err);
            response.statusCode = 500;
            response.end('Error registering')
            return
          }
          response.statusCode = 200;
          response.writeHead(302,{'location': '/'})
          response.end('successfully post !')
        })
      });
    }

});
}

const postLoginHandler = (req, res) => {
  var body = '';
  req.on('data', (data) => {
    body += data;
  });
  req.on('end', () => {
  const { name ,pass } = queryString.parse(body)
 console.log(name,pass,"here")
  postLogin(name, (err, hashPass) => {
      if (err || hashPass.length==0) {
        console.log(err);
        res.statusCode = 500;
        res.end('Error logging in')
        return
      }
     console.log( hashPass);
      bcrypt.compare(pass, hashPass[0].password, function(err, result) {
        if (err){
          res.statusCode = 403;
          res.end('Error Logging In!');

        }
        else{
          if(result){
            console.log("done")
             res.statusCode = 200;
             res.writeHead(302,{'Set-Cookie': 'name='+jwt.sign({ name: name }, secret),
             'location': '/'})
             res.end('Success Logging In!');
          }
          else{
            console.log("not done")
            res.writeHead(302,{'location': '/postPost'})
            res.end('Not Success Logging In!');
          }
        }
      });

    })
  })
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
});
}

//------------------------------------------------

const getLogoutHandler=(request ,response)=>{

    console.log("done")
     response.statusCode = 200;
     response.writeHead(302,{'Set-Cookie': 'name=false; Max-Age=0;',
     'location': '/'});
     response.end('Success Logging out!');


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
  pageNotFoundHandler,
  getLogoutHandler
};
