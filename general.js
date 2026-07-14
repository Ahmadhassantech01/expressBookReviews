const axios = require('axios');

const BASE_URL = "http://localhost:5000";

// ---------- Using Promise callbacks (.then / .catch) ----------

function getAllBooks() {
  return axios.get(`${BASE_URL}/`)
    .then((response) => {
      console.log("All Books:\n", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching all books:", error.message);
    });
}

function getBookByISBN(isbn) {
  return axios.get(`${BASE_URL}/isbn/${isbn}`)
    .then((response) => {
      console.log(`Book with ISBN ${isbn}:\n`, response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching book by ISBN:", error.message);
    });
}

function getBooksByAuthor(author) {
  return axios.get(`${BASE_URL}/author/${author}`)
    .then((response) => {
      console.log(`Books by author ${author}:\n`, response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching books by author:", error.message);
    });
}

// ---------- Using async/await ----------

async function getBooksByTitleAsync(title) {
  try {
    const response = await axios.get(`${BASE_URL}/title/${title}`);
    console.log(`Books with title ${title}:\n`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books by title:", error.message);
  }
}

async function getAllBooksAsync() {
  try {
    const response = await axios.get(`${BASE_URL}/`);
    console.log("All Books (async/await):\n", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching all books:", error.message);
  }
}

async function getBookByISBNAsync(isbn) {
  try {
    const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
    console.log(`Book with ISBN ${isbn} (async/await):\n`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching book by ISBN:", error.message);
  }
}

async function getBooksByAuthorAsync(author) {
  try {
    const response = await axios.get(`${BASE_URL}/author/${author}`);
    console.log(`Books by author ${author} (async/await):\n`, response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching books by author:", error.message);
  }
}

// ---------- Run demo calls ----------
getAllBooks();
getBookByISBN(1);
getBooksByAuthor("Jane Austen");
getBooksByTitleAsync("Pride and Prejudice");
getAllBooksAsync();
getBookByISBNAsync(9);
getBooksByAuthorAsync("Dante Alighieri");

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitleAsync,
  getAllBooksAsync,
  getBookByISBNAsync,
  getBooksByAuthorAsync
};
