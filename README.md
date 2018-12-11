# POST

### About:
our website allows the user to add a post .
### User journey: 
In our app you can  add  your favourite post by putting the text of  its in the place of input .
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

![untitled diagram]()



- HTML structure :
our website is a  page contains a title for website with background , then will find a box to enter the name for the movie  in the same line have a button to search for the movie and button to add movies  .



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



