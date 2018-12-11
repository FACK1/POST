# POST

### About:
our website allows the user to add a post .
### User journey: 
 - As a user I want to add post , the user will the others posts .
### Site Link in Heroku :
[POST]() 
### Site design :

### Architecture :
- Front-End :

  we create  public folder and put inside its folders like :
   - css :
   
       style.css

       resets.css
  - js :
  
      domLogin.js

      domSignup.js
      
      domPost.js

      fetch.js
   
  - html:
  
    login.html
   
    signup.html
  
- Back-End:

  we create src folder and put folders in its like :

  - database :
  
      db_build.js

      db_build.sql 

      db_connection.js
    
  - queries :
  
      getPost.js
      
      postPost.js
  
      postLogin.js

      postSignup.js
      
  - Server:

    server.js

    router.js
   
    handlers.js

    

   - Test :
  
      db_test.js
 
-  Database schema:

![222](https://user-images.githubusercontent.com/37650536/49822335-6b9e3780-fd42-11e8-8554-256eefcc294f.png)







 ### How to run our site on your machine?

1- Clone this repo.

2- Open your command line.

3- Put in terminal : **npm install**.

4- Then put in terminal : **npm run nodemon** to run the server. 

5- Open your browser and put in terminal: **localhost:9001**.


#### Travis CI:

[![Build Status]()
### Team Member:

- [Shaima' Azmi](https://github.com/shaima96)
- [Safa Amro](https://github.com/safaaamro)
- [Razan Tayyem](https://github.com/RazanTayyem)



