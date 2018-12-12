const handlers = require('./handlers.js');

const router = (request, response)=> {
      if (request.url === '/') {
            handlers.homeHandler(request,response)
      }
    else if (request.url.includes('/public/')) {
            handlers.publicHandler(request,response)
    }
    else if (request.url==='/getPost') {
          handlers.getPostHandler(request,response)
    }
    else if (request.url === '/postPost') {
          handlers.postPostHandler(request,response)
    }else if (request.url ==='/postSignUp') {
            handlers.postSignUpHandler(request,response)
      }
      else if (request.url ==='/postLogin') {
              handlers.postLoginHandler(request,response)
        }
        else if (request.url ==='/getLogout') {
                handlers.getLogoutHandler(request,response)
          }
    else {
          handlers.pageNotFoundHandler(request,response)
    }

    }
  module.exports = router
