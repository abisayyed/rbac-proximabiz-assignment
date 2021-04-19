**# rbac-proximabiz-assignment**

**Assignment for node.js backend to access APIs according to roles**

Clone the repo and run:

    npm install

    node server/server.js

Open Postman to access APIs. Port is set to 4100

Please create 2 users for this assignment

User 1:

    email: john@gmail.com
    
    password: john
    
    role: basic

User 2

    email: admin@gmail.com
    
    password: admin
    
    role: admin

After Successful creation use login API to get JWT "**x-access-token**". This token is to be used for each and every API.

**List of APIs:**

POST: /signup

POST: /login

GET: /user/:userId

GET: /users

PUT: /user/:userId

DELETE: /user/:userId

POST: /addSubject

GET: /getAllSubjects

GET: /subjectsBySort/:sort/:limit (ASC/DESC & Records limit)

POST: /addTraining

GET: /getAllTrainings

GET: /getTrainingBySubject/:subject

GET: /getTrainingByType/:type

GET: /getTrainingByStream/:stream

Basic User can access only GET APIs, whereas POST, PUT, DELETE can be accessed only by admin user.

**_Important Note: To access the APIs JWT "x-access-token" is to be set in the header._**
