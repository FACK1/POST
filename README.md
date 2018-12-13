
# POST

### About:
our website allows the user to add a post .
### User journey:
 - As a user I want to add post , the user will see the posts of others  .
### Site Link in Heroku :
[POST](https://postpro.herokuapp.com/)
### Site design :

### Architecture :
```
- Public
       |__html
             |_ login.html
             |_ signup.html
             |_ post.html
       |__Js
            
              |_domPost.js
             
       |__ css
              |_ style.css
              |_ resets.css
              |_ post.css
              |_ signup.css
- Src
     |__ database
              |_ db_build.sql
              |_ db_bulid.js
              |_ db_connection.js
    |__ queries
              |_ postLogin.js
              |_ getPost.js
              |_ postSignup.js
              |_ postPost.js
    |__ server
              |_ server.js
              |_ router.js
              |_ handlers.js
              |_ validater.js
    |__ test
              |_ db_test.js
- gitignore
- config.env
```

### Database schema:

![screenshot from 2018-12-13 08-51-04](https://user-images.githubusercontent.com/37650536/49920849-4d832500-fe71-11e8-93d3-287e2e472e70.png)






 ### How to run our site on your machine?

1- Clone this repo (https://github.com/FACK1/POST)

2- Open your command line.

3- Put in terminal : **npm install**.

4- Then put in terminal : **npm run dev** to run the server.

5- Open your browser and put in terminal: **localhost:9001**.



### Team Member:

- [Shaima' Azmi](https://github.com/shaima96)
- [Safa Amro](https://github.com/safaaamro)
- [Razan Tayyem](https://github.com/RazanTayyem)
