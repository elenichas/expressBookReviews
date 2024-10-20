# Bookshop API

This is a simple Bookshop API built using Express.js. The API allows users to view and filter books by ISBN, author, and title, register new users, and fetch book reviews.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/bookshop.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bookshop
    ```

3. Install the required dependencies:

    ```bash
    npm install
    ```

4. Start the server:

    ```bash
    node app.js
    ```

## Usage

The app provides a set of API endpoints to register users, retrieve book details, and access book reviews.

### API Endpoints

#### Register a new user
- **Endpoint:** `/register`
- **Method:** `POST`
- **Request Body:** 
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```

#### Get the list of books
- **Endpoint:** /
- **Method:** GET
- **Response:**
```json
  {
  "title": "Book Title",
  "author": "Book Author",
  "review": "Book Review"
}
 ```

#### Get the details by ISBN
- **Endpoint:** /isbn/:isbn
- **Method:** GET
- **Response:**
```json
  {
  "title": "Book Title",
  "author": "Book Author",
  "review": "Book Review"
}
```

#### Get book details by author
- **Endpoint:** /author/:author
- **Method:** GET
- **Response:**
  ```json
  {
  "filteredBooks": {
    "isbn1": {
      "title": "Book Title",
      "author": "Book Author",
      "review": "Book Review"
    },
  }
  }
   ```
  #### Get book details by title
- **Endpoint:** /title/:title
- **Method:** GET
- **Response:**
  ```json
  {
  "filteredBooks": {
    "isbn1": {
      "title": "Book Title",
      "author": "Book Author",
      "review": "Book Review"
    },
  }
  }
   ```
