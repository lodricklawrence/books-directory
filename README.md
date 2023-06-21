# Books-directory

# Description

### Project origin
Books-directory is a backend project which i performed as one of the task posted in [task link](https://www.blog.duomly.com/node-js-project-ideas-for-beginners/#1-books-directory).

### What it can do
In this project a user can register a book by its id and name and the book will be saved in book.json file via POST http request pointing an certain server end point, fetch all books which were saved at books.json file via GET http request pointing a certain endpoint in the server, fetch a single book saved at books.json file via GET http request with book's id passed as params in the request pointing a certain server endpoint, edit a single book saved at books.json file via PUT http request with book's id as params in the request pointing a certain server endpoint and delete a single book saved at books.json file via DELETE http request with book's id as params in the request pointing a certain server endpoint.

### Technology used
Node.Js with express.js.

# Installation guide
1. Install Node.js v16.14.2 in your local computer [Node Js](https://nodejs.org/en/).
2. Install Git as a version controller.
3. Copy the project repository directory URL from here.
4. Go to the directory in your computer where you want the cloned project to be placed.
5. Open the command line and run git clone [paste the URL] then run.
6. The project files are ready set in your local computer at that specific directory.
7. Then run npm install, Inorder to install all dependencies which present in package.json file.
8. After installation of all dependencies run npm start to your terminal to initiate the express server.


# How to use the project
1. Inorder to use the project, install Postman or Insomnia or any other software for testing backend http requests at provided endpoints listed below.
2. After installation start testing the requests and observe the responses.
3. Remember all the registered books will be stored in books.json file.

# Project End-points
| HTTP Method  | URL |Functionality|
| ------------- | ------------- |-------|
| POST  | /Addbooks  |Adds a new book in books.json file|
| GET  | /Addbooks   |Fetch's all books from books.json file|
| GET  | /Idbooks/id   |Fetch's a single book from books.json file|
| PUT  | /Idbooks/id   |Edit's a single book from books.json file|
| DELETE  | /Idbooks/id   |Delete's a single book from books.json file|

# Acknowlegements
Before i started this project i passed along team treehouse tutorials to obtain Node.Js and Express.Js knowledges as i was able to complete all the tutorials and be able to use the knowledge i obtained to work on the project. To follow along the tutorials use the link [teamtreehouse](https://teamtreehouse.com/). Also i used [stackoverflow](https://stackoverflow.com/) and [w3schools](https://www.w3schools.com/) to solve many of challenges i faced when performing this project


