# LitNerd Bookshop

Lit Nerd Bookshop is a simple React application that demonstrates how a frontend can interact with a backend using **CRUD** operations. The backend is implemented using Express/Node.js, and the data is stored in a MySQL database. This project was developed locally and serves as a preparatory exercise for a portfolio project.

### Features
- **Create**: Add new books to the collection.
- **Read**: View the list of all books.
- **Update**: Edit details of existing books.
- **Delete**: Remove books from the collection.

### Technologies Used
- **Frontend**: React
- **Backend**: Express/Node.js
- **Database**: MySQL

## Table of Contents
1. [Installation](#steps)
3. [Database Setup](#database_setup)
3. [Running the Application](#running_the_application)
4. [Usage](#usage)
5. [Folder Structure](#folder_structure)
6. [Endpoints](#endpoints)
7. [Contributing](#contributing)
8. [License](#license)

### Prerequisites
- Node.js
- MySQL

## Steps
1. **Clone the repository:*8
   ```
   git clone https://github.com/yourusername/lit-nerd-bookshop.git
   cd lit-nerd-bookshop
   ```
2. **Install backend dependencies:**
   ```
   cd backend
   npm install express
   npm install cors
   npm install mysql
   npm install nodemon
   ```

3. **Install frontend dependencies:**
   ```
   cd frontend
   npm install react
   npm install axios
   npm install react-router-dom
   ```
   
### Database Setup
1. **Create a MySQL database:**
   
```
CREATE DATABASE databasename;
USE databasename;

```

2. Create the `books` table:
```
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    desc VARCHAR(500) NOT NULL,
    cover VARCHAR(255),
    price INT NOT NULL
);
```

3. **Update the database connection in backend/index.js:**
```
const db = mysql.createConnection({
    host: "localhost",
    user: "yourusername",
    password: "yourpassword",
    database: "databasename"
});
```

## Running the Application

1. **Start the backend server:**
```
cd backend
npm start
```
The backend server will run on http://localhost:5500.

2. **Start the frontend development server:**
```
cd ../frontend
npm start
```
The frontend server will run on `http://localhost:3000`

### Usage
 - Open your browser and navigate to `http://localhost:3000`. (starting the frontend server will automatically open the react app in your browser)
 - Use the interface to add, view, update, and delete books in the collection.


## Folder Structure

```
lit-nerd-bookshop/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   └── ...other backend files
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Books.jsx
│   │   │   ├── Add.jsx
│   │   │   └── Update.jsx
|   |   |-- index.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...other frontend files
│   ├── package.json
│   └── ...other frontend files
│
└── README.md

```

### Endpoints
#### Backend API
 - **GET /books:** Fetch all books.
 - **POST /books:** Add a new book.
 - **PUT /books/**
    : Update an existing book.
 - **DELETE /books/**
    : Delete a book.

## Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

[@Iganzaroy](https://github.com/Iganza-roy) -- **iganzaroy55@gmail.com**



