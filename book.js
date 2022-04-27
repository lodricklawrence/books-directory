const express=require("express");
const app=express();
const bodyParser=require("body-parser");
const fs=require('fs');
const store=require('./books.json');
const bookDirectory=require('./bookDir');
const port=3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// post method to add books
app.post('/Allbooks',bookDirectory.addBook);

// get method for getting all books
app.get('/Allbooks',bookDirectory.getAllBooks);

// get method to get all books by their id
app.get('/Allbooks/:id',bookDirectory.getBookId);

// delete method for delete books refering to the id provided in params
app.delete('/Allbooks/:id',bookDirectory.deleteBook);

// put method for updating name of specified id in route params
app.put('/Allbooks/:id',bookDirectory.editBook);

// server PORT listening
app.listen(port,()=>{
    console.log("server is listening on port"+port);
})
