# POST

### About:
our website allows the user to add a post .
### User journey: 
 - As a user I want to add post , the user will see the posts of others  .
### Site Link in Heroku :
[POST]() 
### Site design :

### Architecture :
```
- Public
       |__html
             |__login.html
             |__signup.html
       |__Js
              |_ domLogin.js
              |_domSingup.js
              |_domPost.js
              |_fetch.js
       |__ css
              |_ style.css
              |_ resets.css
- Src
     |__ database
              |_ db_build.sql
              |_ db_bulid.js
              |_ db_connection.js
    |__ queries
              |_postLogin.js
              |_ getPost.js
              |_postSignup.js
              |_postPost.js
    |__ server
              |_ server.js
              |_ router.js
              |_ handlers.js
    |__ test
              |_ routes_test.js
              |_ db_test.js
- gitignore
- config.env
```

### Database schema:

![222](https://user-images.githubusercontent.com/37650536/49822335-6b9e3780-fd42-11e8-8554-256eefcc294f.png)







 ### How to run our site on your machine?

1- Clone this repo (https://github.com/FACK1/POST)

2- Open your command line.

3- Put in terminal : **npm install**.

4- Then put in terminal : **npm run dev** to run the server. 

5- Open your browser and put in terminal: **localhost:9001**.




#### Travis CI:

[![Build Status]()
### Team Member:

- [Shaima' Azmi](https://github.com/shaima96)
- [Safa Amro](https://github.com/safaaamro)
- [Razan Tayyem](https://github.com/RazanTayyem)



