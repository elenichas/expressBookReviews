const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


const doesExist = (username) => {
    let userswithsamename = users.filter((user) => {
        return user.username === username
    });
    if (userswithsamename.length > 0) {
        return true;
    } else {
        return false;
    }

}

const authenticatedUser = (username, password) => {
    let validusers = users.filter((user) => {
        return (user.username === username && user.password === password)
    });
    if (validusers.length > 0) {
        return true;
    } else {
        return false;
    }
}

public_users.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username && password) {
        if (!doesExist(username)) {
            users.push({ "username": username, "password": password });
            return res.status(200).json({ message: "User successfully registred. Now you can login" });
        } else {
            return res.status(404).json({ message: "User already exists!" });
        }
    }
    return res.status(404).json({ message: "Unable to register user." });



    //Write your code here
    // return res.status(300).json({message: " 1 Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    //Write your code here
    return res.status(300).json({ books });
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {

    const ISBN = req.params.isbn;
    return res.status(300).json(books[ISBN]);
});



// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author;
    const filteredBooks = {};

    for (const key in books) {
      if (books.hasOwnProperty(key) && books[key].author === author) {
        filteredBooks[key] = books[key];
      }
    }
    return res.status(300).json({ filteredBooks });
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title;
    const filteredBooks = {};

    for (const key in books) {
      if (books.hasOwnProperty(key) && books[key].title === title) {
        filteredBooks[key] = books[key];
      }
    }

    return res.status(300).json({ filteredBooks });
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    const ISBN = req.params.isbn;
    const book = books[ISBN];

    //   return res.status(300).json(book);
    return res.send(book.review);
});

module.exports.general = public_users;
