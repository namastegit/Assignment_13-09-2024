## Create TODO Project 

step 1 - register 

url : http://localhost:3000/api/auth/register

body : {
  "username": "testuser",
  "password": "password123"
}


step 2 - Login 

url : http://localhost:3000/api/auth/login

body : {
  "username": "testuser",
  "password": "password123"
}

step 3 - 
Response : Token will be generated
 save token in headers 
 Authorizaton : token string( no - "")

 step 4 - Add Task
 url : http://localhost:3000/api/tasks
body : 
{
  "title": "Finish Homework",
  "description": "Complete math and science homework",
  "scheduledTime": "2024-09-15T12:00:00.000Z"
}

step 5 - Fetch all tasks 

url : http://localhost:3000/api/tasks
Authorization: token String;



step - 6 -- delete 

 http://localhost:3000/api/tasks/66e4458a0dd818a8c556540f

 
